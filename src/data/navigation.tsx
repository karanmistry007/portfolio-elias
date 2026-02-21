import { FaGithub, FaInstagram } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io5';

import type { NavLink, SocialLink } from '../types';

// ─── Logo ────────────────────────────────────────────────────────────
export const LOGO_TEXT: string = 'Karan Mistry';

// ─── Navigation Links ────────────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
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

// ─── Social Links ────────────────────────────────────────────────────
export const SOCIAL_LINKS: SocialLink[] = [
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
