import type { SkillsCardProps } from '../../types';

// ─── Component ───────────────────────────────────────────────────────
const SkillsCard: React.FC<SkillsCardProps> = ({ skill, description }) => {
    return (
        <div className="skills-card border border-[#ABB2BF] hover-lift hover:border-[#C778DD] transition-colors duration-300">
            <div className="skill-card-heading">
                <h3 className="text-base text-white font-bold p-2">{skill}</h3>
            </div>
            <div className="skill-card-text border-t border-[#ABB2BF]">
                <p className="text-base text-[#ABB2BF] p-2">{description}</p>
            </div>
        </div>
    );
};

export default SkillsCard;