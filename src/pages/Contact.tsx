import { FaGithub } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';
import { SiAwwwards } from 'react-icons/si';
import ContactCard from '../components/layouts/ContactCard';
import SectionH1 from '../components/ui/SectionH1';

// ? CONTACT DATA
const CONTACT_DETAILS: {
    icon: React.ReactNode;
    link: string;
    details: string;
}[] = [
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

// ? MAIN COMPONENT
const Contact = () => {
    // ? RENDER
    return (
        <>
            <div className="container-1" id="contact">
                <div className="contact-container py-8 md:py-12 lg:py-16 relative">
                    <div className="contact flex flex-col lg:flex-row gap-12 lg:gap-24 justify-between items-center relative">
                        {/* // ? CONTACT CONTENT */}
                        <div className="contact-content">
                            {/* // ? CONTACT HEADING */}
                            <SectionH1 message="Contact" />

                            {/* // ? CONTACT TEXT */}
                            <div className="contact-text text-[#ABB2BF] lg:max-w-[500px]">
                                <p className="mb-6">
                                    I am Karan Mistry, a Full Stack Developer focused on product
                                    development and enterprise solutions, currently working with
                                    Sanskar Technolab—one of the leading Frappe Certified Partners
                                    and ERPNext implementers in India. My vision is to turn complex
                                    business challenges into seamless, high-performance digital
                                    experiences.
                                </p>
                                <p>
                                    If you're seeking expert guidance for ERP implementation,
                                    deployments, custom product development, or enterprise software,
                                    Feel free to reach out. all contact details are provided below.
                                    Let's build your next successful solution together!
                                </p>
                            </div>
                        </div>

                        {/* // ? CONTACT DETAILS */}
                        <div className="contact-details w-full lg:w-auto">
                            <div className="contact-card border border-[#ABB2BF] p-4">
                                {/* // ? CONTACT CARD HEADING */}
                                <div className="contact-card-content">
                                    <h3 className="text-base text-white font-semibold mb-4">
                                        Contact me here
                                    </h3>

                                    {/* // ? CONTACT CARD ITEMS */}
                                    <div className="contact-card-items flex flex-col gap-2">
                                        {CONTACT_DETAILS.map((contact, index) => (
                                            <ContactCard
                                                key={index}
                                                icon={contact.icon}
                                                link={contact.link}
                                                details={contact.details}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;