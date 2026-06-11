import type { ExperienceItem } from '../types';

import SoftCodingLogo from '../assets/images/softcoding.jpg';
import UnnatiLogo from '../assets/images/unnatiinformatics.jpg';
import SanskarLogo from '../assets/images/sanskartechnolab.jpg';

// ─── Experience Data (most recent first) ─────────────────────────────
export const EXPERIENCE_DATA: ExperienceItem[] = [
    {
        year: '2023 November — Present',
        image: SanskarLogo,
        position: 'Technical Lead',
        link: 'https://sanskartechnolab.com/',
        company: 'Sanskar Technolab',
        description:
            'Leading a team of 10+ professionals while managing large-scale ERP technical design, deployment, and pre-sales demos for SaaS products. Specializing in Frappe/ERPNext architecture, advanced server fine-tuning, bench production, Docker, multi-tenant/multi-server setups, and remote DB hosting.',
    },
    {
        year: '2023 July — November',
        image: SanskarLogo,
        position: 'Python Developer Trainee',
        link: 'https://sanskartechnolab.com/',
        company: 'Sanskar Technolab',
        description:
            'Developed frontend templates using Bootstrap and Tailwind CSS, while gaining in-depth knowledge of Frappe and ERPNext modules, contributing to CRM, Sales, PMS, and Accounting. Offered a full-time position due to strong performance.',
    },
    {
        year: '2023 February — May',
        image: UnnatiLogo,
        position: 'Python and Django Intern',
        link: 'https://unnatiinformatics.com/',
        company: 'Unnati Informatics LLP',
        description:
            'Gained hands-on experience in full-stack development with Django, JavaScript, and advanced Python OOP principles. Developed a fully functional e-commerce application and earned internship certification.',
    },
    {
        year: '2022 June — July',
        image: SoftCodingLogo,
        position: 'Web Developer Intern',
        link: 'https://www.softcodingsolutions.com/',
        company: 'SoftCoding Solutions',
        description:
            'Completed an intensive Web Development program covering HTML, CSS, JavaScript, and Git. Developed interactive features through JavaScript events and honed skills with personal projects, earning certification.',
    },
];
