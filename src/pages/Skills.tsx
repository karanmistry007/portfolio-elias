import SectionH1 from '../components/ui/SectionH1';
import SkillsCard from '../components/layouts/SkillsCard';
import SkillsImage from '../assets/skills.png';

// ? SKILLS DATA
const SKILLS_DATA: {
    skill: string;
    description: string;
}[] = [
        {
            skill: 'Languages',
            description: 'Python, JavaScript, Typescript, SQL, Jinja, HTML, CSS',
        },
        {
            skill: 'Databases',
            description: 'MariaDB, MySQL, PostgreSQL, SQLite',
        },
        {
            skill: 'Tools',
            description: 'VS Code, Postman, Git, Linux, Docker, Windows, Nginx',
        },
        {
            skill: 'Other',
            description: 'REST, SOAP, Jinja, Bootstrap, TailwindCSS',
        },
        {
            skill: 'Frameworks',
            description:
                'Frappe, ERPNext (App of Frappe), Django, React.js, Astro.js, Next.js',
        },
        {
            skill: 'ERP Modules',
            description:
                'CRM, Sales, Marketing, PMS, POS, Healthcare, SaaS, Product Engineering',
        },
    ];

// ? MAIN COMPONENT
const Skills = () => {
    // ? RENDER
    return (
        <>
            <div className="container-1">
                <div className="skills-container py-8 md:py-12 lg:py-16 relative">
                    <div className="skills flex flex-col lg:flex-row gap-12 justify-between items-start">
                        {/* // ? SKILLS IMAGE SECTION */}
                        <div className="skills-image-container w-full lg:w-[40%]">
                            {/* // ? SKILLS HEADING */}
                            <SectionH1 message="Skills" />

                            {/* // ? SKILLS IMAGE */}
                            <img
                                src={SkillsImage}
                                className="max-h-[300px] lg:max-h-max object-bottom object-cover w-full"
                                alt="Skills"
                            />
                        </div>

                        {/* // ? SKILLS CARDS SECTION */}
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
        </>
    );
};

export default Skills;