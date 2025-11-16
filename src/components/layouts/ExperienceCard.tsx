import React from 'react';

// ? TYPES
interface ExperienceCardProps {
    icon: React.ReactNode;
    year: string;
    image: string;
    position: string;
    link?: string;
    company: string;
    description: string;
}

// ? MAIN COMPONENT
const ExperienceCard: React.FC<ExperienceCardProps> = ({
    icon,
    year,
    image,
    position,
    link,
    company,
    description,
}) => {
    // ? RENDER
    return (
        <div className="experience-card flex gap-4 items-start justify-center">
            {/* // ? EXPERIENCE ICON */}
            <div className="experience-svg">{icon}</div>

            {/* // ? EXPERIENCE CONTENT */}
            <div className="experience-item-content flex flex-col gap-1 items-start">
                {/* // ? YEAR */}
                <h6 className="year text-white font-semibold">{year}</h6>

                {/* // ? POSITION */}
                <h3 className="heading text-xl text-[#C778DD] font-bold">
                    {position}
                </h3>

                {/* // ? COMPANY */}
                <h4 className="sub-heading text-white font-medium">{company}</h4>

                {/* // ? COMPANY LOGO */}
                {image && (
                    <a href={link} target="_blank" rel="noreferrer" title={company}>
                        <img
                            className="max-h-12 object-contain"
                            src={image}
                            alt={company}
                        />
                    </a>
                )}

                {/* // ? DESCRIPTION */}
                <p className="content text-sm text-[#ABB2BF]">{description}</p>
            </div>
        </div>
    );
};

export default ExperienceCard;