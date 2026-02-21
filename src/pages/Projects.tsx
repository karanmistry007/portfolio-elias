import { SectionH1 } from '../components/ui';
import { ProjectCard } from '../components/layouts';
import { PROJECT_DETAILS } from '../data';

// ─── Component ───────────────────────────────────────────────────────
const Projects = () => {
    return (
        <div className="container-1" id="projects">
            <div className="project-container py-8 md:py-12 lg:py-16 relative">
                <SectionH1 message="Projects" />

                {/* Project Cards Grid */}
                <div className="project-card-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {PROJECT_DETAILS.map((data, index) => (
                        <ProjectCard
                            key={index}
                            image={data.image}
                            techStack={data.techStack}
                            title={data.title}
                            description={data.description}
                            link={data.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;