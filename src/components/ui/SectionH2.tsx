import type { SectionHeadingProps } from '../../types';

// ─── Component ───────────────────────────────────────────────────────
const SectionH2: React.FC<SectionHeadingProps> = ({ message }) => {
    return (
        <div className="section-heading-h2 mb-5 flex gap-2 items-center">
            <h2 className="text-white text-xl md:text-2xl font-bold">
                <span className="text-[#C778DD]">##</span>
                {message}
            </h2>
            <div className="purple-line w-full h-px bg-[#C778DD]"></div>
        </div>
    );
};

export default SectionH2;