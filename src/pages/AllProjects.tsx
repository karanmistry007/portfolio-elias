import { useScrollAnimation } from '../hooks';
import { Navbar, SectionH1 } from '../components/ui';
import { ProjectCard } from '../components/layouts';
import { LOGO_TEXT, NAV_LINKS, SOCIAL_LINKS, PROJECT_DETAILS } from '../data';

// ─── Component ───────────────────────────────────────────────────────
const AllProjects = () => {
    const headingAnim = useScrollAnimation();
    const cardsAnim = useScrollAnimation({ threshold: 0.05 });

    return (
        <div className="bg-[#282C33] min-h-screen">
            <Navbar
                logoText={LOGO_TEXT}
                navLinks={NAV_LINKS}
                socialLinks={SOCIAL_LINKS}
                activeSection=""
            />

            <div className="container-1 pt-32">
                <div className="all-project-container mt-8 lg:mt-20 py-8 md:py-12 lg:py-16">
                    <div className="">
                        <div
                            ref={headingAnim.ref}
                            className={headingAnim.isVisible ? 'animate-fade-in-up' : 'animate-hidden'}
                        >
                            <SectionH1 message="All Projects" />
                        </div>

                        <p className="text-[#ABB2BF] mb-12">
                            A comprehensive list of my enterprise, SaaS, and architectural builds.
                        </p>

                        {/* Project Cards Grid */}
                        <div
                            ref={cardsAnim.ref}
                            className="project-card-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                        >
                            {PROJECT_DETAILS.map((data, index) => (
                                <div
                                    key={index}
                                    className={`${cardsAnim.isVisible
                                        ? `animate-fade-in-up stagger-${(index % 5) + 1}`
                                        : 'animate-hidden'
                                        }`}
                                >
                                    <ProjectCard
                                        image={data.image}
                                        techStack={data.techStack}
                                        title={data.title}
                                        description={data.description}
                                        link={data.link}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProjects;
