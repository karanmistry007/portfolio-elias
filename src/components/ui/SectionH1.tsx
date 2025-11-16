import React from 'react';

// ? TYPES
interface SectionH1Props {
    message: string;
}

const SectionH1: React.FC<SectionH1Props> = ({ message }) => {
    return (
        <div className="section-heading-h1 mb-6 flex gap-2 items-center">
            <h2 className="text-white text-2xl md:text-3xl font-bold">
                <span className="text-[#C778DD]">#</span>
                {message}
            </h2>
            <div className="purple-line w-full h-px bg-[#C778DD]"></div>
        </div>
    );
};

export default SectionH1;