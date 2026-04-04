import { Footer } from '../../components/Footer';
import { Hero } from '../../components/Hero';
import { About } from '../../components/About';
import { Projects } from '../../components/Projects';
import { Services } from '../../components/Services';
import { Testimonials } from '../../components/Testimonials';
import { CTA } from '../../components/CTA';

export function Home() {
    return (
        <main>
            <Hero />
            <Services />
            <About />
            <Projects />
            <Testimonials />
            <CTA />
            <Footer />
        </main>
    );
}   
