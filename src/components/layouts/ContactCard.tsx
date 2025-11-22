import React from 'react';

// ? TYPES
interface ContactCardProps {
    icon: React.ReactNode;
    link: string;
    details: string;
}

// ? MAIN COMPONENT
const ContactCard: React.FC<ContactCardProps> = ({ icon, details, link }) => {
    // ? RENDER
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            title={details}
            className="contact-card-item flex items-center gap-2 text-[#ABB2BF] hover:text-white transition-all duration-300"
        >
            {/* // ? CONTACT ICON */}
            < div className="contact-icon text-xl" > {icon}</div >

            {/* // ? CONTACT DETAILS */}
            < div className="contact-info" > {details}</div >
        </a >
    );
};

export default ContactCard;