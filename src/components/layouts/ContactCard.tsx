import type { ContactCardProps } from '../../types';

// ─── Component ───────────────────────────────────────────────────────
const ContactCard: React.FC<ContactCardProps> = ({ icon, details, link }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            title={details}
            className="contact-card-item flex items-center gap-2 text-[#ABB2BF] hover:text-white transition-all duration-300"
        >
            <div className="contact-icon text-xl">{icon}</div>
            <div className="contact-info">{details}</div>
        </a>
    );
};

export default ContactCard;