import BannerImage from '../../assets/banner_image.png'
import Button from '../ui/Button'

const Banner = () => {
    return (
        <>
            <div className="banner-container py-8 md:py-12 lg:py-16">
                <div className="banner flex flex-col lg:flex-row justify-between items-center gap-4">
                    <div className="banner-text-container">
                        <div className="banner-text">
                            <h2 className='text-[32px] font-semibold mb-8  max-w-[540px]'>
                                Karan Mistry is a <span className='text-[#C778DD]'>Full Stack Frappe</span> and <span className='text-[#C778DD]'>ERPNext Developer</span>
                            </h2>
                            <p className='text-[#ABB2BF] mb-6 max-w-[460px]'>
                                Building intelligent, scalable full-stack enterprise solutions that transform complex business challenges into seamless, high-performance, scalable digital experiences.</p>
                        </div>
                        <Button
                            text="Contact me!!"
                            variant="outline"
                            action={() => console.log('Contact Me!!')}
                        />                    </div>
                    <div className="banner-image-container">
                        <div className="banner-image">
                            <img src={BannerImage} alt="Banner Image" />
                        </div>
                        <div className="banner-image-text-container border flex items-center gap-2 px-4 py-2 mt-4">
                            <div className="square bg-[#C778DD] h-4 w-4 border border-[#C778DD]">
                            </div>
                            <div className="banner-image-text">
                                Currently working on Portfolio
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner