import { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router';

import { Navbar, Footer } from '../components/ui';
import { LOGO_TEXT, NAV_LINKS, SOCIAL_LINKS } from '../data';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import Skills from './Skills';

// ─── Section IDs ─────────────────────────────────────────────────────
const SECTION_IDS = ['', 'about', 'resume', 'skills', 'projects', 'contact'];

// ─── Component ───────────────────────────────────────────────────────
const Portfolio = () => {
    const { section } = useParams<{ section?: string }>();
    const navigate = useNavigate();
    const isScrollingToSectionRef = useRef<boolean>(false);

    // ─── Detect Active Section on Scroll ─────────────────────────────
    useEffect(() => {
        const handleScroll = (): void => {
            if (isScrollingToSectionRef.current) return;

            let currentSection = '';

            for (const sectionId of SECTION_IDS) {
                const element = document.getElementById(sectionId);
                if (
                    element &&
                    element.getBoundingClientRect().top < window.innerHeight * 0.5
                ) {
                    currentSection = sectionId;
                }
            }

            const currentPath = window.location.pathname.replace('/', '') || '';
            if (currentSection !== currentPath && currentSection !== section) {
                navigate(`/${currentSection}`, { replace: true });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [section, navigate]);

    // ─── Render ──────────────────────────────────────────────────────
    return (
        <div className="portfolio">
            <Navbar
                logoText={LOGO_TEXT}
                navLinks={NAV_LINKS}
                socialLinks={SOCIAL_LINKS}
                activeSection={section || ''}
            />

            <main>
                <Home />
                <About />
                <Resume />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default Portfolio;