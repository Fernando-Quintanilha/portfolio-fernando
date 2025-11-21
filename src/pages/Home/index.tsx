import { Footer } from '../../components/Footer';
import { Hero } from '../../components/Hero';
import { Projects } from '../../components/Projects';
import { Services } from '../../components/Services';

export function Home() {
    return (
        <main>
            <Hero />
            <Services />
            <Projects />
            <Footer />
        </main>
    );
}   
