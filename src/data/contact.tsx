import { FaGithub } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';
import { SiAwwwards } from 'react-icons/si';

import type { ContactDetail } from '../types';

// ─── Contact Details ─────────────────────────────────────────────────
export const CONTACT_DETAILS: ContactDetail[] = [
    {
        icon: <SiAwwwards size={25} />,
        link: 'https://karanmistry.in/',
        details: 'karanmistry.in',
    },
    {
        icon: <MdOutlineMailOutline size={25} />,
        link: 'mailto:ksmistry007@gmail.com',
        details: 'ksmistry007@gmail.com',
    },
    {
        icon: <IoLogoLinkedin size={25} />,
        link: 'https://www.linkedin.com/in/karan-mistry-506a83238/',
        details: 'LinkedIn',
    },
    {
        icon: <FaGithub size={25} />,
        link: 'https://github.com/karanmistry007',
        details: 'GitHub',
    },
    {
        icon: <SiAwwwards size={25} />,
        link: 'https://sanskartechnolab.com/',
        details: 'sanskartechnolab.com',
    },
    {
        icon: <MdOutlineMailOutline size={25} />,
        link: 'mailto:karan@sanskartechnolab.com',
        details: 'karan@sanskartechnolab.com',
    },
];
