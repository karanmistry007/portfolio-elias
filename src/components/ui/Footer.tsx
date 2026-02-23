import React from 'react';
import { LOGO_TEXT, SOCIAL_LINKS } from '../../data';
import LogoIcon from '../../assets/icons/logo.svg';

const Footer: React.FC = () => {
    return (
        <footer className="footer bg-[#282C33] border-t border-[#ABB2BF] pt-8 pb-8 mt-16 md:mt-24 lg:mt-32">
            <div className="container-1">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0 pb-8 mb-8 border-b border-[#ABB2BF]">
                    {/* Left Side: Logo and Description */}
                    <div className="footer-left flex flex-col gap-4 max-w-[500px]">
                        <div className="flex items-center gap-2">
                            <img src={LogoIcon} alt="Logo" className="h-4 w-4" />
                            <h3 className="text-white font-bold text-[16px]">{LOGO_TEXT}</h3>
                        </div>
                        <p className="text-[#ABB2BF] text-sm leading-relaxed">
                            Technical Lead & Full Stack Frappe/ERPNext Developer based in Ahmedabad, India. Building scalable SaaS products, multi-tenant architectures, and enterprise-grade ERP solutions
                        </p>
                    </div>

                    {/* Right Side: Media/Socials */}
                    <div className="footer-right flex flex-col gap-4">
                        <h3 className="text-white font-bold text-xl">Media</h3>
                        <div className="flex gap-4">
                            {SOCIAL_LINKS.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className="text-[#ABB2BF] hover:text-[#C778DD] transition-all duration-300"
                                >
                                    <div className="w-6 h-6 flex items-center justify-center">
                                        {social.icon}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom: Copyright */}
                <div className="footer-bottom text-center">
                    <p className="text-[#ABB2BF] text-xs md:text-sm">
                        © Copyright {new Date().getFullYear()}. Made by Karan Mistry. Design by{' '}
                        <a
                            href="https://www.figma.com/@elias_dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-[#C778DD] transition-all duration-300 underline underline-offset-4"
                        >
                            EliasDevis
                        </a>
                        . All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
