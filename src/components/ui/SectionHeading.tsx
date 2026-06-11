import { motion } from 'motion/react';

interface SectionHeadingProps {
    index: string;
    title: string;
    note?: string;
}

// ─── Numbered editorial section heading with rule line ───────────────
// In-view detection lives on the unclipped wrapper (variants propagate
// down) — observing the translated h2 itself never fires, because it
// sits fully clipped outside its overflow-hidden parent.
const SectionHeading = ({ index, title, note }: SectionHeadingProps) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="mb-14 md:mb-20"
    >
        <motion.div
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.6 } },
            }}
            className="flex items-baseline gap-4 font-mono text-xs tracking-[0.25em] text-fog uppercase"
        >
            <span className="text-violet">{index}</span>
            <span>{note}</span>
            <span className="hidden sm:block flex-1 h-px self-center bg-line" />
        </motion.div>

        <div className="overflow-hidden mt-4">
            <motion.h2
                variants={{
                    hidden: { y: '110%' },
                    visible: {
                        y: 0,
                        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                    },
                }}
                className="font-display font-semibold text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.05] tracking-tight"
            >
                {title}
            </motion.h2>
        </div>
    </motion.div>
);

export default SectionHeading;
