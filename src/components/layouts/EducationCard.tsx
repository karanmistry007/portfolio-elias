import type { EducationCardProps } from '../../types';

// ─── Component ───────────────────────────────────────────────────────
const EducationCard: React.FC<EducationCardProps> = ({
    icon,
    year,
    image,
    degree,
    link,
    institution,
    description,
}) => {
    return (
        <div className="education-card flex gap-4 items-start justify-center">
            <div className="education-svg">{icon}</div>

            <div className="education-item-content flex flex-col gap-1 items-start">
                <h6 className="year text-white font-semibold">{year}</h6>
                <h3 className="heading text-xl text-[#C778DD] font-bold">{degree}</h3>
                <h4 className="sub-heading text-white font-medium">{institution}</h4>

                {image && (
                    <a href={link} target="_blank" rel="noreferrer" title={institution}>
                        <img
                            className="max-h-12 object-contain"
                            src={image}
                            alt={institution}
                        />
                    </a>
                )}

                <p className="content text-sm text-[#ABB2BF]">{description}</p>
            </div>
        </div>
    );
};

export default EducationCard;