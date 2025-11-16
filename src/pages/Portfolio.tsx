import { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io5';
import Navbar from '../components/ui/Navbar';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import Skills from './Skills';

// ? CONSTANTS
const LOGO_TEXT: string = 'Karan Mistry';

const NAV_LINKS: {
    name: string;
    link: string;
    active: boolean;
}[] = [
        {
            link: '',
            name: 'Home',
            active: true,
        },
        {
            link: 'about',
            name: 'About',
            active: false,
        },
        {
            link: 'resume',
            name: 'Resume',
            active: false,
        },
        {
            link: 'skills',
            name: 'Skills',
            active: false,
        },
        {
            link: 'projects',
            name: 'Projects',
            active: false,
        },
        {
            link: 'contact',
            name: 'Contact',
            active: false,
        },
    ];

const SOCIAL_LINKS: {
    name: string;
    link: string;
    icon: React.ReactNode;
}[] = [
        {
            name: 'GitHub',
            link: 'https://github.com/karanmistry007',
            icon: <FaGithub size={30} />,
        },
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/karan-mistry-506a83238/',
            icon: <IoLogoLinkedin size={30} />,
        },
        {
            name: 'Instagram',
            link: 'https://instagram.com/karan._.mistry',
            icon: <FaInstagram size={30} />,
        },
    ];

// ? MAIN COMPONENT
const Portfolio = () => {
    // ? ROUTER HOOKS
    const { section } = useParams<{ section?: string }>();
    const navigate = useNavigate();

    // ? REFS
    const isScrollingToSectionRef = useRef<boolean>(false);

    // ? DETECT ACTIVE SECTION ON SCROLL
    useEffect(() => {
        const handleScroll = (): void => {
            // DON'T UPDATE URL IF PROGRAMMATICALLY SCROLLING
            if (isScrollingToSectionRef.current) return;

            const sections = ['', 'about', 'resume', 'skills', 'projects', 'contact'];
            let currentSection = '';

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (
                    element &&
                    element.getBoundingClientRect().top < window.innerHeight * 0.5
                ) {
                    currentSection = sectionId;
                }
            }

            // UPDATE URL IF SECTION CHANGED
            const currentPath = window.location.pathname.replace('/', '') || '';
            if (currentSection !== currentPath && currentSection !== section) {
                navigate(`/${currentSection}`, { replace: true });
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [section, navigate]);

    // ? RENDER
    return (
        <>
            <div className="portfolio">
                {/* // ? NAVIGATION */}
                <Navbar
                    logoText={LOGO_TEXT}
                    navLinks={NAV_LINKS}
                    socialLinks={SOCIAL_LINKS}
                    activeSection={section || ''}
                />

                {/* // ? HOME SECTION */}
                <Home />

                {/* // ? ABOUT SECTION */}
                <About />

                {/* // ? RESUME SECTION */}
                <Resume />

                {/* // ? SKILLS SECTION */}
                <Skills />

                {/* // ? PROJECTS SECTION */}
                <Projects />

                {/* // ? CONTACT SECTION */}
                <Contact />
            </div>
        </>
    );
};

export default Portfolio;