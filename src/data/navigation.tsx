import { FaGithub, FaInstagram } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io5';

import type { NavLink, SocialLink } from '../types';

// ─── Logo ────────────────────────────────────────────────────────────
export const LOGO_TEXT: string = 'Karan Mistry';

// ─── Navigation Links (section anchors) ──────────────────────────────
export const NAV_LINKS: NavLink[] = [
    { link: 'about', name: 'About' },
    { link: 'experience', name: 'Experience' },
    { link: 'skills', name: 'Skills' },
    { link: 'work', name: 'Work' },
    { link: 'contact', name: 'Contact' },
];

// ─── Social Links ────────────────────────────────────────────────────
export const SOCIAL_LINKS: SocialLink[] = [
    {
        name: 'GitHub',
        link: 'https://github.com/karanmistry007',
        icon: <FaGithub size={20} />,
    },
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/karan-mistry-506a83238/',
        icon: <IoLogoLinkedin size={20} />,
    },
    {
        name: 'Instagram',
        link: 'https://instagram.com/karan._.mistry',
        icon: <FaInstagram size={20} />,
    },
];
