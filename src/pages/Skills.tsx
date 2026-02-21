import { SectionH1 } from '../components/ui';
import { SkillsCard } from '../components/layouts';
import { SKILLS_DATA } from '../data';
import SkillsImage from '../assets/images/skills.png';

// ─── Component ───────────────────────────────────────────────────────
const Skills = () => {
    return (
        <div className="container-1" id="skills">
            <div className="skills-container py-8 md:py-12 lg:py-16 relative">
                <div className="skills flex flex-col lg:flex-row gap-12 justify-between items-start">
                    {/* Skills Image Section */}
                    <div className="skills-image-container w-full lg:w-[40%]">
                        <SectionH1 message="Skills" />

                        <img
                            src={SkillsImage}
                            className="max-h-[300px] lg:max-h-max object-bottom object-cover w-full"
                            alt="Skills"
                        />
                    </div>

                    {/* Skills Cards */}
                    <div className="skills-content-container grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 w-full lg:w-[60%] items-stretch">
                        {SKILLS_DATA.map((data, index) => (
                            <SkillsCard
                                key={index}
                                skill={data.skill}
                                description={data.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;