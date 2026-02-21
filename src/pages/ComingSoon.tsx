import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from '../hooks';
import { Button, Navbar } from '../components/ui';
import { LOGO_TEXT, NAV_LINKS, SOCIAL_LINKS } from '../data';

// ─── Component ───────────────────────────────────────────────────────
const ComingSoon = () => {
    const navigate = useNavigate();
    const contentAnim = useScrollAnimation({ threshold: 0.1 });

    return (
        <div className="min-h-dvh bg-[#282C33] flex flex-col items-center justify-center px-4 relative overflow-hidden pt-20 lg:pt-32">
            <Navbar
                logoText={LOGO_TEXT}
                navLinks={NAV_LINKS}
                socialLinks={SOCIAL_LINKS}
                activeSection=""
            />
            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-16 h-16 border border-[#ABB2BF] opacity-20 rotate-12"></div>
            <div className="absolute top-40 right-16 w-10 h-10 border border-[#C778DD] opacity-30 -rotate-6"></div>
            <div className="absolute bottom-32 left-20 w-12 h-12 border border-[#C778DD] opacity-20 rotate-45"></div>
            <div className="absolute bottom-20 right-10 w-20 h-20 border border-[#ABB2BF] opacity-15 -rotate-12"></div>
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#C778DD] opacity-40 rounded-full"></div>
            <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-[#C778DD] opacity-30 rounded-full"></div>
            <div className="absolute bottom-1/4 right-1/4 w-2.5 h-2.5 bg-[#C778DD] opacity-25 rounded-full"></div>

            {/* Content */}
            <div
                ref={contentAnim.ref}
                className={`text-center max-w-[600px] ${contentAnim.isVisible ? 'animate-fade-in-up' : 'animate-hidden'
                    }`}
            >
                {/* Terminal-Style Header */}
                <div className="mb-8">
                    <div className="inline-block border border-[#ABB2BF] px-6 py-3 mb-6">
                        <span className="text-[#C778DD] text-sm font-medium tracking-widest uppercase">
              // Status: 503
                        </span>
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    <span className="text-[#C778DD]">Coming</span>
                    <br />
                    <span className="text-white">Soon</span>
                    <span className="text-[#C778DD] animate-pulse">_</span>
                </h1>

                {/* Description */}
                <p className="text-[#ABB2BF] text-base md:text-lg mb-4 leading-relaxed">
                    This page is currently under development.
                </p>
                <p className="text-[#ABB2BF] text-sm md:text-base mb-10">
                    I'm crafting something amazing. Stay tuned for updates!
                </p>

                {/* Progress Bar */}
                <div className="w-full max-w-[300px] mx-auto mb-10">
                    <div className="flex justify-between text-xs text-[#ABB2BF] mb-2">
                        <span>Progress</span>
                        <span className="text-[#C778DD]">42%</span>
                    </div>
                    <div className="w-full h-1 bg-[#ABB2BF]/20 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-[#C778DD] rounded-full transition-all duration-1000"
                            style={{ width: '42%' }}
                        ></div>
                    </div>
                </div>

                {/* Back Button */}
                <Button
                    text="<- Go Back"
                    variant="outline"
                    onClick={() => navigate(-1 as unknown as number)}
                />
            </div>

        </div>
    );
};

export default ComingSoon;
