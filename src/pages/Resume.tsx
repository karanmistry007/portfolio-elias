import { Button, SectionH1, SectionH2 } from '../components/ui';
import { EducationCard, ExperienceCard } from '../components/layouts';
import { EDUCATION_DATA, EXPERIENCE_DATA } from '../data';

// ─── Component ───────────────────────────────────────────────────────
const Resume = () => {
    return (
        <div className="container-1" id="resume">
            <div className="resume-container py-8 md:py-12 lg:py-16 relative">
                <SectionH1 message="Resume" />

                {/* Resume Content */}
                <div className="resume flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 justify-between items-start text-[#ABB2BF]">
                    {/* Education Section */}
                    <div className="education-container lg:w-1/2">
                        <SectionH2 message="Education" />

                        <div className="education-card-container flex flex-col gap-6">
                            {EDUCATION_DATA.map((education, index) => (
                                <EducationCard
                                    key={index}
                                    icon={education.icon}
                                    year={education.year}
                                    image={education.image}
                                    degree={education.degree}
                                    link={education.link}
                                    institution={education.institution}
                                    description={education.description}
                                />
                            ))}
                        </div>

                        <div className="download-button mt-6">
                            <Button
                                text="Download Resume ->"
                                variant="outline"
                                action={() => console.log('Download Resume ->')}
                            />
                        </div>
                    </div>

                    {/* Experience Section */}
                    <div className="experience-container lg:w-1/2">
                        <SectionH2 message="Experience" />

                        <div className="experience-card-container flex flex-col gap-6">
                            {EXPERIENCE_DATA.map((experience, index) => (
                                <ExperienceCard
                                    key={index}
                                    icon={experience.icon}
                                    year={experience.year}
                                    image={experience.image}
                                    position={experience.position}
                                    link={experience.link}
                                    company={experience.company}
                                    description={experience.description}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;