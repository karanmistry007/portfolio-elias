import ComingSoon from '../components/layouts/ComingSoon';
import SectionH1 from '../components/ui/SectionH1';

// ? MAIN COMPONENT
const Contact = () => {
    // ? RENDER
    return (
        <>
            <div className="container-1" id="contact">
                <div className="contact-container py-8 md:py-12 lg:py-16 relative">
                    {/* // ? CONTACT HEADING */}
                    <SectionH1 message="Contact" />

                    {/* // ? CONTACT CONTENT */}
                    <div className="contact">
                        <ComingSoon message="Contact Section Coming Soon..." />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;