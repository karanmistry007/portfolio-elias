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
                    {PROJECT_DETAILS.map((data, index) => (
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
                </div>
            </div>
        </div>
    );
};

export default Projects;