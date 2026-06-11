import { SKILLS_DATA } from '../../data';
import { Reveal, SectionHeading } from '../ui';

// ─── Skills as interactive editorial rows ────────────────────────────
const Skills = () => (
    <section id="skills" className="py-24 md:py-36 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
            <SectionHeading index="03" note="What I work with" title="Skills" />

            <div className="border-t border-line">
                {SKILLS_DATA.map((group, i) => (
                    <Reveal key={group.skill} delay={0.05 * i}>
                        <div className="group relative overflow-hidden border-b border-line">
                            {/* Violet wash slides up on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-violet/10 to-iris/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />

                            <div className="relative grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-10 items-center py-8 md:py-10 px-1 md:px-4">
                                <span className="md:col-span-1 font-mono text-xs text-fog/60">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <h3 className="md:col-span-4 font-display font-semibold text-2xl md:text-3xl tracking-tight group-hover:text-violet group-hover:translate-x-2 transition-all duration-500">
                                    {group.skill}
                                </h3>
                                <div className="md:col-span-7 flex flex-wrap gap-2">
                                    {group.description.split(',').map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-line px-3.5 py-1.5 font-mono text-[11px] text-fog group-hover:border-violet/40 group-hover:text-snow transition-colors duration-500"
                                        >
                                            {tech.trim()}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);

export default Skills;
