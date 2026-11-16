import { Component, type ReactNode } from 'react';

type Props = { onError: () => void; children: ReactNode };

/** Se o visualizador 3D (ou o download dele) quebrar, avisa o pai em vez de derrubar a página. */
export class ViewerBoundary extends Component<Props, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {
    this.props.onError();
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}
