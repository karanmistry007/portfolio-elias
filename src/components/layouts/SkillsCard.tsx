import React from 'react';

// ? TYPES
interface SkillsCardProps {
    skill: string;
    description: string;
}

// ? MAIN COMPONENT
const SkillsCard: React.FC<SkillsCardProps> = ({ skill, description }) => {
    // ? RENDER
    return (
        <div className="skills-card border border-[#ABB2BF]">
            {/* // ? SKILL CARD HEADING */}
            <div className="skill-card-heading">
                <h3 className="text-base text-white font-bold p-2">{skill}</h3>
            </div>

            {/* // ? SKILL CARD DESCRIPTION */}
            <div className="skill-card-text border-t border-[#ABB2BF]">
                <p className="text-base text-[#ABB2BF] p-2">{description}</p>
            </div>
        </div>
    );
};

export default SkillsCard;