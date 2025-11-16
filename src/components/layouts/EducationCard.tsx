import React from 'react';

// ? TYPES
interface EducationCardProps {
    icon: React.ReactNode;
    year: string;
    image: string;
    degree: string;
    link?: string;
    institution: string;
    description: string;
}

// ? MAIN COMPONENT
const EducationCard: React.FC<EducationCardProps> = ({
    icon,
    year,
    image,
    degree,
    link,
    institution,
    description,
}) => {
    // ? RENDER
    return (
        <div className="education-card flex gap-4 items-start justify-center">
            {/* // ? EDUCATION ICON */}
            <div className="education-svg">{icon}</div>

            {/* // ? EDUCATION CONTENT */}
            <div className="education-item-content flex flex-col gap-1 items-start">
                {/* // ? YEAR */}
                <h6 className="year text-white font-semibold">{year}</h6>

                {/* // ? DEGREE */}
                <h3 className="heading text-xl text-[#C778DD] font-bold">{degree}</h3>

                {/* // ? INSTITUTION */}
                <h4 className="sub-heading text-white font-medium">{institution}</h4>

                {/* // ? INSTITUTION LOGO */}
                {image && (
                    <a href={link} target="_blank" rel="noreferrer" title={institution}>
                        <img
                            className="max-h-12 object-contain"
                            src={image}
                            alt={institution}
                        />
                    </a>
                )}

                {/* // ? DESCRIPTION */}
                <p className="content text-sm text-[#ABB2BF]">{description}</p>
            </div>
        </div>
    );
};

export default EducationCard;