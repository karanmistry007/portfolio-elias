import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import type { NavbarProps } from '../../types';
import Logo from '../../assets/icons/logo.svg';

// ─── Component ───────────────────────────────────────────────────────
const Navbar: React.FC<NavbarProps> = ({
    logoText,
    navLinks,
    socialLinks,
    activeSection,
}) => {
    // ─── State ───────────────────────────────────────────────────────
    const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);
    const [activeLink, setActiveLink] = useState<string>(activeSection);

    // ─── Hooks ───────────────────────────────────────────────────────
    const navigate = useNavigate();
    const isScrollingToSectionRef = useRef<boolean>(false);

    // ─── Effects ─────────────────────────────────────────────────────
    useEffect(() => {
        setActiveLink(activeSection);
    }, [activeSection]);

    // ─── Scroll To Section ───────────────────────────────────────────
    const scrollToSection = (sectionId: string): void => {
        if (sectionId === '') sectionId = 'home';

        const element = document.getElementById(sectionId);
        if (element) {
            isScrollingToSectionRef.current = true;

            const navbarHeight = window.innerWidth >= 1024 ? 80 : 32;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });

            setTimeout(() => {
                isScrollingToSectionRef.current = false;
            }, 1000);
        }
    };

    // ─── Event Handlers ──────────────────────────────────────────────
    const handleNavLinkClick = (link: string): void => {
        navigate(`/${link}`);
        setActiveLink(link);
        scrollToSection(link);
        setIsNavbarOpen(false);
    };

    const handleNavbarToggle = (): void => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    // ─── Render ──────────────────────────────────────────────────────
    return (
        <nav
            className={`${isNavbarOpen ? 'h-dvh' : 'h-auto'
                } lg:h-auto bg-[#282C33] fixed w-full z-50 top-0 left-0 border-b border-[#C778DD]`}
        >
            <div className="nav-container container-1 border-b border-[#C778DD] lg:border-none">
                <div className="nav py-4 lg:pt-8 lg:pb-2 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-12">
                    {/* Logo & Hamburger */}
                    <div className="nav-logo-container flex justify-between items-center lg:block">
                        <button
                            className="nav-logo flex gap-2 items-center cursor-pointer"
                            onClick={() => handleNavLinkClick('')}
                        >
                            <div className="logo">
                                <img src={Logo} alt="Logo" className="h-4 w-4" />
                            </div>
                            <div className="logo-text">
                                <h6 className="text-[16px] font-bold">{logoText}</h6>
                            </div>
                        </button>

                        {/* Hamburger Menu */}
                        <div className="hamburger-container">
                            <button
                                className={`${isNavbarOpen ? 'relative' : ''
                                    } hamburger flex flex-col gap-1.5 justify-center lg:hidden`}
                                onClick={handleNavbarToggle}
                                aria-label="Toggle navigation menu"
                            >
                                <div
                                    className={`${isNavbarOpen ? 'rotate-45' : 'rotate-0'
                                        } line h-0.5 w-6 bg-white transition-transform duration-300`}
                                ></div>
                                <div
                                    className={`${isNavbarOpen ? '-rotate-45 absolute w-6' : 'rotate-0 w-3.5'
                                        } line h-0.5 ml-auto bg-white transition-transform duration-300`}
                                ></div>
                            </button>
                        </div>
                    </div>

                    {/* Desktop Fixed Social Links */}
                    <div className="hidden lg:flex fixed left-4 xl:left-8 top-1/2 -translate-y-1/2 z-50 flex-col gap-6 justify-center items-center">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                                className="text-[#ABB2BF] hover:text-[#C778DD] hover:translate-x-1 lg:hover:translate-x-1 transition-all duration-300"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    {/* Navigation Links Dropdown */}
                    <div
                        className={`absolute lg:relative top-[72px] lg:top-0 left-0 w-full lg:w-auto bg-[#282C33] lg:bg-transparent transition-all duration-300 ease-in-out transform origin-top lg:transform-none lg:opacity-100 lg:scale-y-100 lg:flex ${isNavbarOpen
                            ? 'flex scale-y-100 opacity-100 pointer-events-auto h-[calc(100dvh-72px)] lg:h-auto z-40 justify-between pb-4 sm:pb-8 md:pb-16 lg:pb-0'
                            : 'scale-y-0 opacity-0 pointer-events-none lg:pointer-events-auto h-0 lg:h-auto lg:overflow-visible overflow-hidden'
                            } nav-links text-4xl lg:text-[16px] flex-col gap-8 items-center lg:items-start`}
                    >
                        <ul className={`flex flex-col lg:flex-row gap-9 lg:items-center ${isNavbarOpen && 'container-1'}`}>
                            {navLinks.map((data, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleNavLinkClick(data.link)}
                                    className={`${activeLink === data.link ? 'text-white' : 'text-[#ABB2BF]'
                                        } hover:text-white font-medium transition-colors duration-200 cursor-pointer`}
                                >
                                    <button className="cursor-pointer">
                                        <span className="text-[#C778DD]">#</span>
                                        <span>{data.name}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>

                        {/* Mobile Social Links */}
                        <div className="flex lg:hidden flex-row gap-6 justify-center items-center mt-auto lg:pb-8">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className="text-[#ABB2BF] hover:text-[#C778DD] hover:-translate-y-1 transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;