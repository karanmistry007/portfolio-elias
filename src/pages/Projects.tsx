import ComingSoon from '../components/layouts/ComingSoon';
import SectionH1 from '../components/ui/SectionH1';

// ? MAIN COMPONENT
const Projects = () => {
    // ? RENDER
    return (
        <>
            <div className="container-1" id="projects">
                <div className="project-container py-8 md:py-12 lg:py-16 relative">
                    {/* // ? PROJECTS HEADING */}
                    <SectionH1 message="Projects" />

                    {/* // ? PROJECTS CONTENT */}
                    <div className="projects">
                        <ComingSoon message="Projects Section Coming Soon..." />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;