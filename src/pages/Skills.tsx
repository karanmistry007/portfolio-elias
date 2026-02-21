import { SectionH1 } from '../components/ui';
import { SkillsCard } from '../components/layouts';
import { SKILLS_DATA } from '../data';
import { useScrollAnimation } from '../hooks';
import SkillsImage from '../assets/images/skills.png';

// ─── Component ───────────────────────────────────────────────────────
const Skills = () => {
    const headingAnim = useScrollAnimation();
    const imageAnim = useScrollAnimation({ threshold: 0.2 });
    const cardsAnim = useScrollAnimation({ threshold: 0.1 });

    return (
        <div className="container-1" id="skills">
            <div className="skills-container py-8 md:py-12 lg:py-16 relative">
                <div className="skills flex flex-col lg:flex-row gap-12 justify-between items-start">
                    {/* Skills Image Section */}
                    <div className="skills-image-container w-full lg:w-[40%]">
                        <div
                            ref={headingAnim.ref}
                            className={headingAnim.isVisible ? 'animate-fade-in-up' : 'animate-hidden'}
                        >
                            <SectionH1 message="Skills" />
                        </div>

                        <div
                            ref={imageAnim.ref}
                            className={imageAnim.isVisible ? 'animate-fade-in-left' : 'animate-hidden'}
                        >
                            <img
                                src={SkillsImage}
                                className="max-h-[300px] lg:max-h-max object-bottom object-cover w-full"
                                alt="Skills"
                            />
                        </div>
                    </div>

                    {/* Skills Cards */}
                    <div
                        ref={cardsAnim.ref}
                        className="skills-content-container grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 w-full lg:w-[60%] items-stretch"
                    >
                        {SKILLS_DATA.map((data, index) => (
                            <div
                                key={index}
                                className={`${cardsAnim.isVisible
                                        ? `animate-fade-in-up stagger-${index + 1}`
                                        : 'animate-hidden'
                                    }`}
                            >
                                <SkillsCard skill={data.skill} description={data.description} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;