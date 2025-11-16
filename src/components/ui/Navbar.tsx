import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

// ? TYPES
interface NavbarProps {
    logoText: string;
    navLinks: {
        name: string;
        link: string;
        active: boolean;
    }[];
    socialLinks: {
        name: string;
        link: string;
        icon: React.ReactNode;
    }[];
    activeSection: string;
}

// ? MAIN COMPONENT
const Navbar: React.FC<NavbarProps> = ({
    logoText,
    navLinks,
    socialLinks,
    activeSection,
}) => {
    // ? STATE MANAGEMENT
    const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);
    const [activeLink, setActiveLink] = useState<string>(activeSection);

    // ? HOOKS
    const navigate = useNavigate();

    // ? REFS
    const isScrollingToSectionRef = useRef<boolean>(false);

    // ? EFFECTS
    useEffect(() => {
        setActiveLink(activeSection);
    }, [activeSection]);

    // ? SCROLL TO SECTION FUNCTION
    const scrollToSection = (sectionId: string): void => {
        // ADJUST FOR HOME SECTION
        if (sectionId === '') sectionId = 'home';

        const element = document.getElementById(sectionId);
        if (element) {
            isScrollingToSectionRef.current = true;

            // DETERMINE NAVBAR HEIGHT BASED ON SCREEN SIZE
            const navbarHeight = window.innerWidth >= 1024 ? 80 : 32;

            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });

            // RESET FLAG AFTER SCROLL COMPLETES
            setTimeout(() => {
                isScrollingToSectionRef.current = false;
            }, 1000);
        }
    };

    // ? EVENT HANDLERS
    const handleNavLinkClick = (link: string): void => {
        navigate(`/${link}`);
        setActiveLink(link);
        scrollToSection(link);
        setIsNavbarOpen(false);
    };

    const handleNavbarToggle = (): void => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    // ? RENDER
    return (
        <nav
            className={`${isNavbarOpen ? 'h-dvh' : 'h-auto'
                } lg:h-auto bg-[#282C33] fixed w-full z-50 top-0 left-0 border-b border-[#C778DD]`}
        >
            <div className="nav-container container-1">
                <div className="nav py-4 lg:pt-8 lg:pb-2 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-12">
                    {/* // ? LOGO AND HAMBURGER SECTION */}
                    <div className="nav-logo-container flex justify-between items-center lg:block">
                        {/* // ? LOGO */}
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

                        {/* // ? HAMBURGER MENU */}
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

                    {/* // ? NAVIGATION LINKS */}
                    <div
                        className={`${isNavbarOpen ? 'block' : 'hidden'
                            } lg:block nav-links text-4xl lg:text-[16px] flex flex-col gap-8`}
                    >
                        <ul className="flex flex-col lg:flex-row gap-9 lg:items-center">
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

                        {/* // ? SOCIAL LINKS */}
                        <div className="social-links-container lg:fixed lg:left-0 lg:top-[50%] lg:transform lg:-translate-y-1/2 lg:px-4">
                            <div className="social-links flex flex-row lg:flex-col gap-4 justify-center items-center">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        className="text-[#ABB2BF] hover:text-white transition-colors duration-300"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;