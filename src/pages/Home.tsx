import BannerImage from '../assets/images/banner_image.png';
import QuoteImage from '../assets/icons/quote.svg';
import { Button } from '../components/ui';

// ─── Component ───────────────────────────────────────────────────────
const Home = () => {
    return (
        <div className="container-1" id="home">
            {/* Banner Section */}
            <div className="banner-container mt-8 lg:mt-20 py-8 md:py-12 lg:py-16">
                <div className="banner flex flex-col lg:flex-row justify-between items-center gap-4">
                    {/* Banner Text */}
                    <div className="banner-text-container">
                        <div className="banner-text">
                            <h2 className="text-[32px] font-semibold mb-8 lg:max-w-[540px]">
                                Karan Mistry is a{' '}
                                <span className="text-[#C778DD]">Full Stack Frappe</span> and{' '}
                                <span className="text-[#C778DD]">ERPNext Developer</span>
                            </h2>
                            <p className="text-[#ABB2BF] mb-6 lg:max-w-[460px]">
                                Building intelligent, scalable full-stack enterprise solutions
                                that transform complex business challenges into seamless,
                                high-performance, scalable digital experiences.
                            </p>
                        </div>

                        <Button
                            text="Contact me!!"
                            variant="outline"
                            action={() => console.log('Contact Me!!')}
                        />
                    </div>

                    {/* Banner Image */}
                    <div className="banner-image-container">
                        <div className="banner-image">
                            <img src={BannerImage} alt="Karan Mistry Banner" />
                        </div>

                        {/* Current Work Status */}
                        <div className="banner-image-text-container border flex items-center gap-2 px-4 py-2 mt-4">
                            <div className="square bg-[#C778DD] h-4 w-4 border border-[#C778DD]"></div>
                            <div className="banner-image-text">
                                Currently working on Portfolio
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quote Section */}
            <div className="quote-container py-8 md:py-12 lg:py-16 relative">
                <div className="quote w-fit m-auto">
                    <div className="quote-text text-xl lg:text-2xl p-4 lg:p-8 font-medium border border-[#ABB2BF] w-fit ml-auto relative">
                        <p>
                            Full stack, full control: crafting enterprise-grade solutions
                            with Frappe and ERPNext.
                        </p>

                        <div className="h-6 lg:h-8 w-6 lg:w-8 absolute -top-3.5 lg:-top-4 left-2 lg:left-3 bg-[#282C33] flex p-0.5 justify-center items-center">
                            <img src={QuoteImage} alt="Quote" />
                        </div>
                    </div>

                    <div className="quote-author text-xl lg:text-2xl p-2 lg:p-4 font-medium border border-[#ABB2BF] w-fit ml-auto relative">
                        <p>- Karan Mistry</p>

                        <div className="h-6 lg:h-8 w-6 lg:w-8 absolute -top-3.5 lg:-top-4 right-2 lg:right-3 bg-[#282C33] flex p-0.5 justify-center items-center">
                            <img src={QuoteImage} alt="Quote" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;