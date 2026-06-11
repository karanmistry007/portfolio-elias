import { useRef } from 'react';
import {
    motion,
    useScroll,
    useTransform,
    type MotionValue,
} from 'motion/react';

import { PROJECT_DETAILS } from '../../data';
import type { ProjectDetail } from '../../types';
import { SectionHeading } from '../ui';

interface ProjectCardProps {
    project: ProjectDetail;
    index: number;
    total: number;
    containerProgress: MotionValue<number>;
}

// ─── A single sticky card that scales back as the next one arrives ───
const ProjectCard = ({
    project,
    index,
    total,
    containerProgress,
}: ProjectCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);

    // Inner image parallax, driven by this card's own viewport position
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ['start end', 'end start'],
    });
    const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

    // As later cards stack on top, this one recedes and dims
    const targetScale = 1 - (total - 1 - index) * 0.035;
    const scale = useTransform(
        containerProgress,
        [index / total, 1],
        [1, targetScale]
    );
    const brightness = useTransform(
        containerProgress,
        [index / total, 1],
        [1, 0.55]
    );
    const filter = useTransform(brightness, (b) => `brightness(${b})`);

    return (
        <div
            ref={cardRef}
            className="sticky"
            style={{ top: `calc(12vh + ${index * 1.4}rem)` }}
        >
            <motion.article
                style={{ scale, filter }}
                className="origin-top overflow-hidden rounded-3xl border border-line bg-surface shadow-[0_-10px_60px_rgba(0,0,0,0.45)]"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Text */}
                    <div className="flex flex-col p-7 md:p-12">
                        <div className="flex items-baseline justify-between">
                            <span className="font-mono text-sm text-violet">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <span className="font-mono text-[10px] tracking-[0.25em] text-fog/60 uppercase">
                                Selected work
                            </span>
                        </div>

                        <h3 className="mt-6 font-display font-semibold text-2xl md:text-4xl leading-[1.1] tracking-tight">
                            {project.title}
                        </h3>

                        <p className="mt-5 text-fog leading-relaxed text-sm md:text-base">
                            {project.description}
                        </p>

                        <div className="mt-auto pt-8 flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full bg-elev border border-line px-3 py-1 font-mono text-[10px] md:text-[11px] text-fog"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Image with internal parallax */}
                    <div className="relative overflow-hidden min-h-[240px] lg:min-h-[460px] border-t lg:border-t-0 lg:border-l border-line">
                        <motion.img
                            style={{ y: imageY, scale: 1.22 }}
                            src={project.image}
                            alt={project.title}
                            loading="lazy"
                            decoding="async"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-ink/50 via-transparent to-violet/10 pointer-events-none" />
                    </div>
                </div>
            </motion.article>
        </div>
    );
};

// ─── Projects (sticky stacking deck) ─────────────────────────────────
const Projects = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    return (
        <section id="work" className="py-24 md:py-36 scroll-mt-24">
            <div className="mx-auto max-w-7xl px-6 md:px-10">
                <SectionHeading
                    index="04"
                    note={`Selected work (${String(PROJECT_DETAILS.length).padStart(2, '0')})`}
                    title="Projects"
                />

                <div ref={containerRef} className="flex flex-col gap-[12vh]">
                    {PROJECT_DETAILS.map((project, i) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            index={i}
                            total={PROJECT_DETAILS.length}
                            containerProgress={scrollYProgress}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
