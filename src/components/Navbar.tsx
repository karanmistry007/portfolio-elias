import { useEffect, useState } from 'react';
import {
    AnimatePresence,
    motion,
    useScroll,
    useSpring,
} from 'motion/react';

import { NAV_LINKS, SOCIAL_LINKS } from '../data';

// ─── Fixed navbar with scroll progress + section tracking ────────────
const Navbar = () => {
    const [activeSection, setActiveSection] = useState('');
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const { scrollYProgress } = useScroll();
    const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

    // Track which section is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                }
            },
            { rootMargin: '-40% 0px -55% 0px' }
        );
        for (const { link } of NAV_LINKS) {
            const el = document.getElementById(link);
            if (el) observer.observe(el);
        }
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Lock body scroll while the mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    const scrollTo = (id: string) => {
        setMenuOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
                    scrolled
                        ? 'bg-ink/70 backdrop-blur-xl border-b border-line'
                        : 'bg-transparent border-b border-transparent'
                }`}
            >
                {/* Scroll progress hairline */}
                <motion.div
                    style={{ scaleX: progress }}
                    className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-iris to-violet origin-left"
                />

                <nav className="mx-auto max-w-7xl px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="font-display font-semibold text-lg tracking-tight cursor-pointer"
                    >
                        KM<span className="text-violet">©</span>
                    </button>

                    {/* Desktop links */}
                    <ul className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((nav) => (
                            <li key={nav.link}>
                                <button
                                    onClick={() => scrollTo(nav.link)}
                                    className={`link-underline font-mono text-xs tracking-[0.2em] uppercase transition-colors duration-300 cursor-pointer ${
                                        activeSection === nav.link
                                            ? 'text-violet'
                                            : 'text-fog hover:text-snow'
                                    }`}
                                >
                                    {nav.name}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile burger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                        className="md:hidden relative z-50 flex flex-col gap-1.5 p-2 cursor-pointer"
                    >
                        <motion.span
                            animate={menuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                            className="block h-px w-6 bg-snow"
                        />
                        <motion.span
                            animate={menuOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
                            className="block h-px w-6 bg-snow"
                        />
                    </button>
                </nav>
            </motion.header>

            {/* Mobile full-screen menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 z-40 bg-ink/95 backdrop-blur-2xl flex flex-col justify-center px-8 md:hidden"
                    >
                        <ul className="flex flex-col gap-2">
                            {NAV_LINKS.map((nav, i) => (
                                <li key={nav.link} className="overflow-hidden">
                                    <motion.button
                                        initial={{ y: '110%' }}
                                        animate={{ y: 0 }}
                                        exit={{ y: '110%' }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.06 * i,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        onClick={() => scrollTo(nav.link)}
                                        className="font-display font-semibold text-5xl tracking-tight text-snow hover:text-violet transition-colors cursor-pointer"
                                    >
                                        {nav.name}
                                    </motion.button>
                                </li>
                            ))}
                        </ul>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mt-12 flex gap-6"
                        >
                            {SOCIAL_LINKS.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className="text-fog hover:text-violet transition-colors"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
