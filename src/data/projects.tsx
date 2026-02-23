import type { ProjectDetail } from '../types';

import TradingManagementImage from '../assets/images/trading_management.jpg';
import RealEstateCRMImage from '../assets/images/real_estate.jpg';
import PharmacyHealthcareImage from '../assets/images/pharmacy_erp.jpg';
import MedicalHealthcareImage from '../assets/images/medical_telehealth.jpg';
import InternalSystemImage from '../assets/images/internal_system.jpg';
import DairyTechERPImage from '../assets/images/dairy_tech.jpg';
import SaasDeploymentImage from '../assets/images/saas_deployment.jpg';
import RetailPOSImage from '../assets/images/retail_pos.jpg';
import IntegrationsImage from '../assets/images/integrations.jpg';

// ─── Project Details ─────────────────────────────────────────────────
export const PROJECT_DETAILS: ProjectDetail[] = [
    {
        image: DairyTechERPImage,
        title: 'Dairy Tech ERP',
        techStack: ['ERPNext', 'Frappe', 'Python', 'JavaScript', 'MariaDB', 'REST APIs', 'Mobile API', 'Azure Blob', 'DB Replication'],
        description:
            'Built and managed a multi-tenant dairy-tech ERP across multiple servers. Handled server setup, updates, maintenance, and GitHub repo management. Set up remote database replication, Azure storage, and mobile APIs. Developed automated contract workflows and customer billing portals.',
    },
    {
        image: MedicalHealthcareImage,
        title: 'Medical Telehealth SaaS',
        techStack: ['ERPNext', 'Frappe', 'Python', 'Express.js', 'PostgreSQL', 'RabbitMQ', 'Keycloak', 'FHIR'],
        description:
            'Full-fledged telehealth SaaS with multi-server architecture. Used ERPNext core logic, Express.js/PostgreSQL backend for mobile, RabbitMQ middleware, and Keycloak. Features doctor-patient video scheduling, FHIR-compliant auto-prescriptions linked to pharmacy/labs, and insurance auto-billing.',
    },
    {
        image: PharmacyHealthcareImage,
        title: 'Enterprise Pharmacy SaaS ERP',
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
            'Multi-tenant SaaS ERP for multi-facility healthcare networks. Engineered high-volume prescription handling, complex multi-branch billing, and synchronized legacy SOAP medical databases.',
    },
    {
        image: RetailPOSImage,
        title: 'Healthcare POS & Retail ERP',
        techStack: ['ERPNext', 'Frappe', 'Python', 'Astro.js', 'JavaScript', 'MariaDB', 'PWA'],
        description:
            'Custom healthcare POS for retail and wholesale. Added live inventory/stock-taking, batch-wise barcodes, cashier expense management, and wholesale-wise ledgers. Features extreme keyboard optimization, extensive reporting, and a PWA delivery app.',
    },
    {
        image: SaasDeploymentImage,
        title: 'Automated SaaS Deployment & CoA',
        techStack: ['ERPNext', 'Frappe', 'Python', 'JavaScript', 'Docker', 'Kubernetes'],
        description:
            'Created network REST APIs for HDM Cash machines and a Frappe Cloud-like multi-tenant SaaS auto-deployment system. Containerized apps with Frappe Docker and orchestrated deployments on Kubernetes clusters. Delivered a fully customized Tanzania chart of accounts.',
    },
    {
        image: RealEstateCRMImage,
        title: 'Multi-Tenant Real Estate SaaS',
        techStack: ['ERPNext', 'Frappe', 'Python', 'JavaScript', 'MariaDB', 'REST APIs'],
        description:
            'Scalable, multi-tenant real estate CRM. Built high-concurrency server architecture handling complex property booking workflows, dynamic lead pipelines, and custom role-based dashboards.',
    },
    {
        image: TradingManagementImage,
        title: 'Trading Management',
        techStack: ['ERPNext', 'Frappe', 'Python', 'Astro.js', 'JavaScript', 'MariaDB'],
        description:
            'End-to-end trading ERP covering lifecycle from buying to stock movement. Features real-time dashboards, custom doctypes, and seamless API integration with Astro.js frontends.',
    },
    {
        image: InternalSystemImage,
        title: 'Internal System (PMS & CRM)',
        techStack: ['ERPNext', 'Frappe', 'Python', 'JavaScript', 'MariaDB', 'REST APIs'],
        description:
            'Comprehensive Frappe CRM and PMS implementation. Crafted custom lead workflows, resource allocation logic, and a real-time floating screen timer for multi-task timesheet tracking.',
    },
    {
        image: IntegrationsImage,
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
            'Omnichannel social CRM hub connecting ERPNext to WhatsApp, Facebook, and Instagram. Automated lead capture, session messaging, and deep analytics tracking.',
    },
];
