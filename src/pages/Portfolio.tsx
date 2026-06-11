import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MotionConfig } from 'motion/react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SmoothScroll from '../components/SmoothScroll';
import { Marquee } from '../components/ui';
import Hero from '../components/sections/Hero';
import Statement from '../components/sections/Statement';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';

// Keywords pulled from the skills data for the hero marquee
const MARQUEE_ITEMS = [
    'ERPNext',
    'Frappe',
    'Python',
    'React',
    'Docker',
    'Kubernetes',
    'Multi-Tenant SaaS',
    'PostgreSQL',
    'MariaDB',
    'System Design',
];

// ─── Portfolio (single page) ─────────────────────────────────────────
const Portfolio = () => {
    const { section } = useParams<{ section?: string }>();

    // Deep links like /work or /contact scroll to their section on load
    useEffect(() => {
        if (!section) return;
        const el = document.getElementById(section);
        if (el) el.scrollIntoView({ behavior: 'auto' });
    }, [section]);

    return (
        <MotionConfig reducedMotion="user">
            <SmoothScroll>
                <div>
                    <Navbar />
                    <main>
                        <Hero />
                        <Marquee items={MARQUEE_ITEMS} />
                        <Statement />
                        <About />
                        <Experience />
                        <Skills />
                        <Projects />
                        <Contact />
                    </main>
                    <Footer />
                </div>
            </SmoothScroll>
        </MotionConfig>
    );
};

export default Portfolio;
