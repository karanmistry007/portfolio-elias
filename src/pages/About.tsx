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
                                A Technical Lead and Full Stack Frappe/ERPNext developer based in Ahmedabad, India with over 3 years of hands-on experience. I design large-scale ERP systems, build multi-tenant SaaS products, and architect solutions that simplify complex business operations into seamless digital workflows.
                            </p>
                            <p className="mb-6">
                                I work across the full stack from multi-server infrastructure and remote DB replication to cloud integrations and production deployments. I also lead development teams, manage scaling with Frappe Bench and Docker, and deliver pre-sales demos that bridge the gap between business needs and technical solutions.
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