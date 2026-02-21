import type { ProjectDetail } from '../types';

import TradingManagementImage from '../assets/images/trading_management.jpg';
import RealEstateCRMImage from '../assets/images/realestate_crm.jpg';
import PharmacyHealthcareImage from '../assets/images/pharmacy_healthcare.jpg';
import ChartOfAccountsImage from '../assets/images/chart_of_accounts.jpg';
import POSImage from '../assets/images/pos.jpg';
import WhatsAppImage from '../assets/images/whatsapp.jpg';

// ─── Project Details ─────────────────────────────────────────────────
export const PROJECT_DETAILS: ProjectDetail[] = [
    {
        image: TradingManagementImage,
        title: 'Trading Management',
        techStack: ['ERPNext', 'Frappe', 'Python', 'Astro.js', 'JavaScript', 'MariaDB'],
        description:
            'End-to-end trading workflow solution covering buying, selling, stock movement, and financial tracking with customized ERPNext doctypes and automated operations.',
    },
    {
        image: RealEstateCRMImage,
        title: 'Real Estate CRM',
        techStack: ['ERPNext', 'Frappe', 'Python', 'JavaScript', 'MariaDB', 'REST APIs'],
        description:
            'Domain-specific CRM for real estate to manage leads, properties, bookings, and follow-ups with custom workflows and role-based dashboards.',
    },
    {
        image: PharmacyHealthcareImage,
        title: 'Pharmacy Healthcare Suite',
        techStack: [
            'ERPNext',
            'Frappe',
            'Python',
            'JavaScript',
            'SQL',
            'HTML',
            'CSS',
            'MariaDB',
            'React.js',
            'REST APIs',
            'SOAP APIs',
        ],
        description:
            'Healthcare and pharmacy solution for patient management, prescriptions, billing, and inventory with third-party REST/SOAP service integrations.',
    },
    {
        image: ChartOfAccountsImage,
        title: 'Chart Of Account Customization',
        techStack: ['ERPNext', 'Frappe', 'Python', 'JavaScript', 'MariaDB'],
        description:
            'Customized Chart of Accounts in ERPNext for multi-branch and industry-specific accounting with improved financial structure and automation.',
    },
    {
        image: POSImage,
        title: 'POS Customizations',
        techStack: ['ERPNext', 'Frappe', 'Python', 'Astro.js', 'JavaScript', 'MariaDB'],
        description:
            'Enhanced ERPNext POS for retail and pharma with tailored UI, discount logic, shortcut flows, and optimized offline performance.',
    },
    {
        image: WhatsAppImage,
        title: 'WhatsApp, Facebook, Instagram Integrations',
        techStack: [
            'ERPNext',
            'Frappe',
            'Python',
            'JavaScript',
            'HTML',
            'Bootstrap',
            'jQuery',
            'REST APIs',
        ],
        description:
            'Social and messaging integrations connecting ERPNext with WhatsApp, Facebook, and Instagram for automated notifications and lead capture.',
    },
];
