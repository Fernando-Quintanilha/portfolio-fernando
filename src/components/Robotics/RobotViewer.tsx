import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { ScrollTrigger } from '../../lib/gsap';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useLatest } from '../../hooks/useLatest';

type Props = { url: string; onError: () => void };

const DRACO_PATH = '/draco/';

export default function RobotViewer({ url, onError }: Props) {
  const host = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const errorRef = useLatest(onError);

  useEffect(() => {
    const el = host.current;
    if (!el) return;

    // preserveDrawingBuffer: o quadro só é redesenhado quando algo muda, então o último desenho precisa ficar na tela.
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.NeutralToneMapping;
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.01, 50);
    scene.add(new THREE.HemisphereLight(0xffffff, 0x8a857c, 0.9));
    const key = new THREE.DirectionalLight(0xffffff, 1.9);
    key.position.set(2, 3, 1.5);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0xffffff, 0.5);
    fill.position.set(-2, 1, -1.5);
    scene.add(fill);

    const pivot = new THREE.Group();
    scene.add(pivot);

    let disposed = false;
    let needsRender = true;
    let raf = 0;

    const draco = new DRACOLoader().setDecoderPath(DRACO_PATH);
    const loader = new GLTFLoader().setDRACOLoader(draco);
    loader.load(
      url,
      (gltf) => {
        if (disposed) return;
        const model = gltf.scene;
        // Materiais do CAD vêm metálicos e escurecem sem um ambiente; deixa tudo fosco com a cor original.
        model.traverse((o) => {
          const mesh = o as THREE.Mesh;
          const mats = Array.isArray(mesh.material) ? mesh.material : mesh.material ? [mesh.material] : [];
          mats.forEach((m) => {
            const std = m as THREE.MeshStandardMaterial;
            if ('metalness' in std) {
              std.metalness = 0;
              std.roughness = 0.75;
            }
          });
        });
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);
        pivot.add(model);
        const span = Math.max(size.x, size.y, size.z);
        camera.position.set(span * 1.55, span * 1.05, span * 1.55);
        camera.lookAt(0, 0, 0);
        needsRender = true;
      },
      undefined,
      () => errorRef.current(),
    );

    const resize = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      renderer.setSize(w, h, false);
      renderer.domElement.style.width = '100%';
      renderer.domElement.style.height = '100%';
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      needsRender = true;
    };
    const ro = new ResizeObserver(resize);
    ro.observe(el);
    resize();

    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        pivot.rotation.y = -0.6 + self.progress * Math.PI * (reduced ? 0 : 1.4);
        needsRender = true;
      },
    });

    const loop = () => {
      if (needsRender) {
        renderer.render(scene, camera);
        needsRender = false;
      }
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      st.kill();
      ro.disconnect();
      draco.dispose();
      scene.traverse((o) => {
        const mesh = o as THREE.Mesh;
        if (mesh.geometry) mesh.geometry.dispose();
        const mat = mesh.material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
        else mat?.dispose();
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [url, reduced, errorRef]);

  return <div ref={host} className="h-full w-full" />;
}
