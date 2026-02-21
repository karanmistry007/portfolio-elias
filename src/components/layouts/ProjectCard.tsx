import type { ProjectCardProps } from '../../types';
import { Button } from '../ui';

// ─── Component ───────────────────────────────────────────────────────
const ProjectCard: React.FC<ProjectCardProps> = ({
    image,
    techStack,
    title,
    description,
    link,
}) => {
    const handleButtonClick = () => {
        if (link) {
            window.open(link, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div className="project-card border border-[#ABB2BF] flex flex-col h-full group hover:border-[#C778DD] transition-colors duration-300">
            {/* Project Image */}
            <div className="project-image overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Tech Stack */}
            <div className="project-tech-stack border-t border-[#ABB2BF] px-4 py-2">
                <p className="text-sm text-[#ABB2BF]">{techStack.join(' ')}</p>
            </div>

            {/* Content */}
            <div className="project-content border-t border-[#ABB2BF] p-4 flex flex-col flex-1 gap-3">
                <h3 className="project-title text-white text-xl font-bold">{title}</h3>
                <p className="project-description text-[#ABB2BF] text-sm flex-1">
                    {description}
                </p>
                <div className="project-action pt-1">
                    <Button text="Live ->" action={handleButtonClick} />
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;