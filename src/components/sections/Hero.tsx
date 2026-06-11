import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

import { MagneticButton } from '../ui';

// ─── Staggered line reveal for the display headline ──────────────────
const HeadlineLine = ({
    children,
    delay,
}: {
    children: React.ReactNode;
    delay: number;
}) => (
    <span className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
        <motion.span
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
            className="block"
        >
            {children}
        </motion.span>
    </span>
);

// ─── Hero ────────────────────────────────────────────────────────────
const Hero = () => {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    // Content drifts up and fades as you scroll; glow orbs drift slower
    const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
    const orbY = useTransform(scrollYProgress, [0, 1], [0, -180]);
    const orbY2 = useTransform(scrollYProgress, [0, 1], [0, 220]);

    const scrollTo = (id: string) =>
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section
            ref={ref}
            id="home"
            className="relative min-h-svh flex flex-col justify-center overflow-hidden"
        >
            {/* Background glow orbs (parallax) */}
            <motion.div
                style={{ y: orbY }}
                aria-hidden
                className="absolute top-[-10%] right-[-15%] w-[55vw] h-[55vw] rounded-full bg-violet/14 blur-[120px] pointer-events-none"
            />
            <motion.div
                style={{ y: orbY2 }}
                aria-hidden
                className="absolute bottom-[-25%] left-[-15%] w-[45vw] h-[45vw] rounded-full bg-iris/10 blur-[120px] pointer-events-none"
            />

            <motion.div
                style={{ y: contentY, opacity: contentOpacity }}
                className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10 pt-28 pb-16"
            >
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="font-mono text-xs md:text-sm tracking-[0.3em] text-fog uppercase mb-8"
                >
                    Karan Mistry — Ahmedabad, India
                </motion.p>

                <h1 className="font-display font-semibold uppercase leading-[0.95] tracking-tight text-[clamp(2rem,9vw,8.5rem)]">
                    <HeadlineLine delay={0.25}>Technical</HeadlineLine>
                    <HeadlineLine delay={0.35}>
                        Lead <span className="text-fog/40">&</span>
                    </HeadlineLine>
                    <HeadlineLine delay={0.45}>
                        <span className="text-gradient-violet">Frappe·ERPNext</span>
                    </HeadlineLine>
                    <HeadlineLine delay={0.55}>Expert</HeadlineLine>
                </h1>

                <div className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end gap-10 md:gap-16 justify-between">
                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.75 }}
                        className="max-w-md text-fog leading-relaxed"
                    >
                        Building intelligent, scalable full-stack enterprise solutions that
                        transform complex business challenges into seamless,
                        high-performance, scalable digital experiences.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.85 }}
                        className="flex flex-wrap items-center gap-4"
                    >
                        <MagneticButton onClick={() => scrollTo('contact')}>
                            Contact me <span aria-hidden>↗</span>
                        </MagneticButton>
                        <MagneticButton variant="ghost" onClick={() => scrollTo('work')}>
                            View work <span aria-hidden>↓</span>
                        </MagneticButton>
                    </motion.div>
                </div>

                {/* Status chip */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.05 }}
                    className="mt-12 inline-flex items-center gap-3 rounded-full border border-line px-4 py-2"
                >
                    <span className="h-2 w-2 rounded-full bg-violet animate-pulse-dot" />
                    <span className="font-mono text-xs text-fog">
                        Currently working on Portfolio
                    </span>
                </motion.div>
            </motion.div>

            {/* Scroll hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 1 }}
                style={{ opacity: contentOpacity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.3em] text-fog/60 uppercase"
            >
                <motion.span
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="block"
                >
                    Scroll ↓
                </motion.span>
            </motion.div>
        </section>
    );
};

export default Hero;
