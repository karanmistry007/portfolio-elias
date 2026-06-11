import { useRef } from 'react';
import { motion, useScroll } from 'motion/react';

import { EDUCATION_DATA, EXPERIENCE_DATA } from '../../data';
import { MagneticButton, Reveal, SectionHeading } from '../ui';
import ResumePdf from '../../assets/documents/Karan Mistry Resume Technical Lead & Full-Stack Frappe_ERPNext Developer.pdf';

// ─── Experience timeline + education ─────────────────────────────────
const Experience = () => {
    const timelineRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ['start 0.8', 'end 0.6'],
    });

    return (
        <section id="experience" className="py-24 md:py-36 scroll-mt-24">
            <div className="mx-auto max-w-7xl px-6 md:px-10">
                <SectionHeading index="02" note="The path so far" title="Experience" />

                {/* Timeline */}
                <div ref={timelineRef} className="relative">
                    {/* Rail that draws itself as you scroll */}
                    <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-line" />
                    <motion.div
                        style={{ scaleY: scrollYProgress }}
                        className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-iris to-violet origin-top"
                    />

                    <div className="flex flex-col gap-14 md:gap-16">
                        {EXPERIENCE_DATA.map((job, i) => (
                            <Reveal key={`${job.company}-${job.year}`} delay={0.05 * i}>
                                <div className="relative pl-10 md:pl-16 group">
                                    {/* Node */}
                                    <span className="absolute left-0 top-2 h-[15px] w-[15px] md:h-[19px] md:w-[19px] rounded-full border-2 border-violet bg-ink group-hover:bg-violet transition-colors duration-300" />

                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10">
                                        <div className="md:col-span-3 font-mono text-xs tracking-[0.15em] text-fog uppercase pt-1.5">
                                            {job.year}
                                        </div>
                                        <div className="md:col-span-9">
                                            <h3 className="font-display font-semibold text-2xl md:text-3xl tracking-tight group-hover:text-violet transition-colors duration-300">
                                                {job.position}
                                            </h3>
                                            <a
                                                href={job.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-2 inline-flex items-center gap-3 text-fog hover:text-snow transition-colors"
                                            >
                                                <img
                                                    src={job.image}
                                                    alt={job.company}
                                                    loading="lazy"
                                                    decoding="async"
                                                    className="h-6 w-6 rounded-full object-cover border border-line"
                                                />
                                                <span className="link-underline text-sm">
                                                    {job.company} ↗
                                                </span>
                                            </a>
                                            <p className="mt-4 max-w-2xl text-fog leading-relaxed">
                                                {job.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div className="mt-24 md:mt-32">
                    <Reveal>
                        <div className="flex items-baseline gap-4 font-mono text-xs tracking-[0.25em] text-fog uppercase mb-10">
                            <span className="text-violet">02.1</span>
                            <span>Education</span>
                            <span className="hidden sm:block flex-1 h-px self-center bg-line" />
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {EDUCATION_DATA.map((edu, i) => (
                            <Reveal key={edu.degree} delay={0.1 * i} className="h-full">
                                <a
                                    href={edu.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-full flex-col rounded-2xl border border-line bg-surface p-7 transition-all duration-300 hover:border-violet/50 hover:-translate-y-1.5 hover:bg-elev"
                                >
                                    <div className="font-mono text-xs text-violet tracking-[0.15em]">
                                        {edu.year}
                                    </div>
                                    <h4 className="mt-4 font-display font-semibold text-xl leading-snug">
                                        {edu.degree}
                                    </h4>
                                    <p className="mt-2 text-sm text-snow/70">{edu.institution}</p>
                                    <p className="mt-4 text-sm text-fog leading-relaxed flex-1">
                                        {edu.description}
                                    </p>
                                </a>
                            </Reveal>
                        ))}
                    </div>
                </div>

                <Reveal delay={0.2} className="mt-14">
                    <MagneticButton href={ResumePdf} variant="ghost">
                        Download Resume <span aria-hidden>↓</span>
                    </MagneticButton>
                </Reveal>
            </div>
        </section>
    );
};

export default Experience;
