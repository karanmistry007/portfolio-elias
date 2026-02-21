import type { ExperienceCardProps } from '../../types';

// ─── Component ───────────────────────────────────────────────────────
const ExperienceCard: React.FC<ExperienceCardProps> = ({
    icon,
    year,
    image,
    position,
    link,
    company,
    description,
}) => {
    return (
        <div className="experience-card flex gap-4 items-start justify-center">
            <div className="experience-svg">{icon}</div>

            <div className="experience-item-content flex flex-col gap-1 items-start">
                <h6 className="year text-white font-semibold">{year}</h6>
                <h3 className="heading text-xl text-[#C778DD] font-bold">{position}</h3>
                <h4 className="sub-heading text-white font-medium">{company}</h4>

                {image && (
                    <a href={link} target="_blank" rel="noreferrer" title={company}>
                        <img
                            className="max-h-12 object-contain"
                            src={image}
                            alt={company}
                        />
                    </a>
                )}

                <p className="content text-sm text-[#ABB2BF]">{description}</p>
            </div>
        </div>
    );
};

export default ExperienceCard;