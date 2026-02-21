import { SectionH1 } from '../components/ui';
import { ProjectCard } from '../components/layouts';
import { PROJECT_DETAILS } from '../data';
import { useScrollAnimation } from '../hooks';

// ─── Component ───────────────────────────────────────────────────────
const Projects = () => {
    const headingAnim = useScrollAnimation();
    const cardsAnim = useScrollAnimation({ threshold: 0.05 });

    return (
        <div className="container-1" id="projects">
            <div className="project-container py-8 md:py-12 lg:py-16 relative">
                <div
                    ref={headingAnim.ref}
                    className={headingAnim.isVisible ? 'animate-fade-in-up' : 'animate-hidden'}
                >
                    <SectionH1 message="Projects" />
                </div>

                {/* Project Cards Grid */}
                <div
                    ref={cardsAnim.ref}
                    className="project-card-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                    {PROJECT_DETAILS.slice(0, 5).map((data, index) => (
                        <div
                            key={index}
                            className={`${cardsAnim.isVisible
                                ? `animate-fade-in-up stagger-${index + 1}`
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

                    {/* View All Projects Card */}
                    <div
                        className={`${cardsAnim.isVisible
                            ? `animate-fade-in-up stagger-6`
                            : 'animate-hidden'
                            } h-full`}
                    >
                        <a href="/all-projects" className="block h-full">
                            <div className="project-card border border-[#ABB2BF] flex items-center justify-center p-8 h-full hover-lift hover:border-[#C778DD] group transition-all duration-300 min-h-[300px]">
                                <h3 className="text-white text-2xl font-bold group-hover:text-[#C778DD] transition-colors flex items-center gap-2">
                                    View All Projects <span className="text-[#C778DD] text-3xl transition-transform group-hover:translate-x-2">→</span>
                                </h3>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;