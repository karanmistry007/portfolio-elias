import AboutImage from '../assets/about_image.png';
import Button from '../components/ui/Button';
import SectionH1 from '../components/ui/SectionH1';

// ? MAIN COMPONENT
const About = () => {
    // ? RENDER
    return (
        <>
            <div className="container-1" id="about">
                <div className="about-container py-8 md:py-12 lg:py-16">
                    <div className="about flex flex-col lg:flex-row gap-12 lg:gap-24 justify-between items-center relative">
                        {/* // ? ABOUT CONTENT */}
                        <div className="about-content">
                            {/* // ? ABOUT HEADING */}
                            <SectionH1 message="About" />

                            {/* // ? ABOUT TEXT */}
                            <div className="about-text text-[#ABB2BF] lg:max-w-[400px]">
                                <p className="mb-6">Hello, I'm Karan Mistry!</p>
                                <p className="mb-6">
                                    I am a lead Full Stack Frappe and ERPNext developer based in
                                    Ahmedabad, India. I specialize in building scalable and
                                    responsive enterprise applications that blend innovative
                                    technology with practical business solutions.
                                </p>
                                <p className="mb-6">
                                    Turning complex business challenges into seamless,
                                    high-performance digital experiences has been my passion for
                                    several years. I have worked with diverse clients and teams,
                                    constantly striving to learn and implement the latest
                                    technologies and frameworks to deliver outstanding results.
                                </p>

                                {/* // ? READ MORE BUTTON */}
                                <Button
                                    text="Read More ->"
                                    variant="outline"
                                    action={() => console.log('Read More ->')}
                                />
                            </div>
                        </div>

                        {/* // ? ABOUT IMAGE */}
                        <div className="about-image">
                            <img src={AboutImage} alt="Karan Mistry" className="w-full" />
                        </div>

                        {/* // TODO DECORATIVE SQUARE */}
                        {/* <div className="quote-side-square hidden lg:block border border-[#ABB2BF] h-32 w-32 absolute top-1/2 -translate-y-1/2 right-[calc(100%+140px)]"></div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;