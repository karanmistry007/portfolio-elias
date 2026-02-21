import { SectionH1 } from '../components/ui';
import { ContactCard } from '../components/layouts';
import { CONTACT_DETAILS } from '../data';
import { useScrollAnimation } from '../hooks';

// ─── Component ───────────────────────────────────────────────────────
const Contact = () => {
    const headingAnim = useScrollAnimation();
    const contentAnim = useScrollAnimation({ threshold: 0.1 });
    const detailsAnim = useScrollAnimation({ threshold: 0.2 });

    return (
        <div className="container-1" id="contact">
            <div className="contact-container py-8 md:py-12 lg:py-16 relative">
                <div className="contact flex flex-col lg:flex-row gap-12 lg:gap-24 justify-between items-center relative">
                    {/* Contact Content */}
                    <div className="contact-content">
                        <div
                            ref={headingAnim.ref}
                            className={headingAnim.isVisible ? 'animate-fade-in-up' : 'animate-hidden'}
                        >
                            <SectionH1 message="Contact" />
                        </div>

                        <div
                            ref={contentAnim.ref}
                            className={`contact-text text-[#ABB2BF] lg:max-w-[500px] ${contentAnim.isVisible ? 'animate-fade-in-left' : 'animate-hidden'
                                }`}
                        >
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

                    {/* Contact Details */}
                    <div
                        ref={detailsAnim.ref}
                        className={`contact-details w-full lg:w-auto ${detailsAnim.isVisible ? 'animate-fade-in-right' : 'animate-hidden'
                            }`}
                    >
                        <div className="contact-card border border-[#ABB2BF] p-4 hover-glow">
                            <div className="contact-card-content">
                                <h3 className="text-base text-white font-semibold mb-4">
                                    Contact me here
                                </h3>

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
    );
};

export default Contact;