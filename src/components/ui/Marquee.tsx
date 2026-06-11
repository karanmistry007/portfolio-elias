interface MarqueeProps {
    items: string[];
}

// ─── Infinite horizontal keyword marquee ─────────────────────────────
const Marquee = ({ items }: MarqueeProps) => {
    const row = (ariaHidden: boolean) => (
        <div
            aria-hidden={ariaHidden}
            className="flex shrink-0 items-center"
        >
            {items.map((item) => (
                <span
                    key={item}
                    className="flex items-center font-display font-medium text-2xl md:text-4xl text-fog/60 uppercase tracking-tight whitespace-nowrap"
                >
                    <span className="px-6 md:px-10 hover:text-violet transition-colors duration-300">
                        {item}
                    </span>
                    <span className="text-violet/50 text-base md:text-xl">✦</span>
                </span>
            ))}
        </div>
    );

    return (
        <div className="relative overflow-hidden border-y border-line py-6 md:py-8">
            <div className="flex w-max animate-marquee">
                {row(false)}
                {row(true)}
            </div>
        </div>
    );
};

export default Marquee;
