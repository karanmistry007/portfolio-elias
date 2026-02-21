import AboutImage from '../assets/images/about_image.png';
import { Button, SectionH1 } from '../components/ui';
import { useScrollAnimation } from '../hooks';

// ─── Component ───────────────────────────────────────────────────────
const About = () => {
    const headingAnim = useScrollAnimation();
    const contentAnim = useScrollAnimation({ threshold: 0.1 });
    const imageAnim = useScrollAnimation({ threshold: 0.2 });

    return (
        <div className="container-1" id="about">
            <div className="about-container py-8 md:py-12 lg:py-16">
                <div className="about flex flex-col lg:flex-row gap-12 lg:gap-24 justify-between items-center relative">
                    {/* About Content */}
                    <div className="about-content">
                        <div
                            ref={headingAnim.ref}
                            className={headingAnim.isVisible ? 'animate-fade-in-up' : 'animate-hidden'}
                        >
                            <SectionH1 message="About" />
                        </div>

                        <div
                            ref={contentAnim.ref}
                            className={`about-text text-[#ABB2BF] lg:max-w-[400px] ${contentAnim.isVisible ? 'animate-fade-in-left' : 'animate-hidden'
                                }`}
                        >
                            <p className="mb-6">
                                With almost 3 years of experience, I am currently a Technical Lead and Full Stack Frappe/ERPNext developer based in
                                Ahmedabad, India. I specialize in large-scale ERP technical design, system architecture, and building SaaS products that solve complex business challenges.
                            </p>
                            <p className="mb-6">
                                My expertise spans across multi-server architecture, multi-tenant hosting, and remote DB configuration.
                                Beyond core development, I actively lead development teams, optimize scaling with bench production and Docker, and handle pre-sales demos to deliver enterprise-grade digital experiences.
                            </p>

                            <Button
                                text="Read More ->"
                                variant="outline"
                            />
                        </div>
                    </div>

                    {/* About Image */}
                    <div
                        ref={imageAnim.ref}
                        className={`about-image ${imageAnim.isVisible ? 'animate-fade-in-right' : 'animate-hidden'
                            }`}
                    >
                        <img src={AboutImage} alt="Karan Mistry" className="w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;