import { useState } from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io5';
import Logo from '../../assets/logo.svg';

// ? CONSTANTS
const LOGO_TEXT: string = 'Karan Mistry';

const NAV_LINKS: {
    name: string;
    link: string;
    active: boolean
}[] = [
        {
            link: 'home',
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
const Navbar = () => {
    // ? STATE MANAGEMENT
    const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);

    // ? EVENT HANDLERS
    const handleNavbarToggle = (): void => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    // ? RENDER
    return (
        <nav
            className={`${isNavbarOpen ? 'h-dvh' : 'h-auto'
                } lg:h-auto bg-[#282C33] fixed w-full z-50 top-0 left-0`}
        >
            <div className="nav-container container-1">
                <div className="nav py-4 lg:pt-8 lg:pb-2 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-12">
                    {/* // ? LOGO AND HAMBURGER SECTION */}
                    <div className="nav-logo-container flex justify-between items-center lg:block">
                        {/* // ? LOGO */}
                        <button className="nav-logo flex gap-2 items-center cursor-pointer">
                            <div className="logo">
                                <img src={Logo} alt="Logo" className="h-4 w-4" />
                            </div>
                            <div className="logo-text">
                                <h6 className="text-[16px] font-bold">{LOGO_TEXT}</h6>
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
                            {NAV_LINKS.map((data, index) => (
                                <li
                                    key={index}
                                    className={`${data.active ? 'text-white' : 'text-[#ABB2BF]'
                                        } hover:text-white font-medium transition-colors duration-200`}
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
                                {SOCIAL_LINKS.map((social, index) => (
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