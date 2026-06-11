import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react';

const QUOTE =
    'Full stack, full control: crafting enterprise-grade solutions with Frappe and ERPNext.';

// ─── A single word that brightens as scroll progress passes it ───────
const Word = ({
    word,
    progress,
    range,
}: {
    word: string;
    progress: MotionValue<number>;
    range: [number, number];
}) => {
    const opacity = useTransform(progress, range, [0.12, 1]);
    return (
        <motion.span style={{ opacity }} className="inline-block mr-[0.28em]">
            {word}
        </motion.span>
    );
};

// ─── Scroll-driven quote reveal ──────────────────────────────────────
const Statement = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start 0.85', 'start 0.3'],
    });

    const words = QUOTE.split(' ');

    return (
        <section className="py-28 md:py-44">
            <div ref={ref} className="mx-auto max-w-5xl px-6 md:px-10">
                <p className="font-display font-medium text-[clamp(1.6rem,4vw,3.2rem)] leading-[1.25] tracking-tight">
                    {words.map((word, i) => (
                        <Word
                            key={i}
                            word={word}
                            progress={scrollYProgress}
                            range={[i / words.length, (i + 1) / words.length]}
                        />
                    ))}
                </p>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-8 font-mono text-xs tracking-[0.3em] text-violet uppercase"
                >
                    — Karan Mistry
                </motion.p>
            </div>
        </section>
    );
};

export default Statement;
