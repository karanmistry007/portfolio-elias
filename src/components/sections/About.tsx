import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

import AboutImage from '../../assets/images/about_image.png';
import { Reveal, SectionHeading } from '../ui';

const STATS = [
    { value: '3+', label: 'Years of experience' },
    { value: '10+', label: 'Professionals led' },
    { value: '9', label: 'Major projects shipped' },
];

// ─── About ───────────────────────────────────────────────────────────
const About = () => {
    const imageRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: imageRef,
        offset: ['start end', 'end start'],
    });
    // Inner image moves slower than the frame → parallax window effect
    const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

    return (
        <section id="about" className="py-24 md:py-36 scroll-mt-24">
            <div className="mx-auto max-w-7xl px-6 md:px-10">
                <SectionHeading index="01" note="Who I am" title="About" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
                    {/* Portrait with parallax */}
                    <div
                        ref={imageRef}
                        className="lg:col-span-5 relative overflow-hidden rounded-2xl border border-line bg-surface"
                    >
                        <motion.img
                            style={{ y: imageY, scale: 1.18 }}
                            src={AboutImage}
                            alt="Karan Mistry"
                            loading="lazy"
                            decoding="async"
                            className="w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-4 left-4 font-mono text-[10px] tracking-[0.25em] text-snow/70 uppercase">
                            Ahmedabad, IN
                        </div>
                    </div>

                    {/* Bio + stats */}
                    <div className="lg:col-span-7">
                        <Reveal>
                            <p className="text-lg md:text-xl text-snow/90 leading-relaxed">
                                A Technical Lead and Full Stack Frappe/ERPNext developer based
                                in Ahmedabad, India with over 3 years of hands-on experience. I
                                design large-scale ERP systems, build multi-tenant SaaS
                                products, and architect solutions that simplify complex
                                business operations into seamless digital workflows.
                            </p>
                        </Reveal>
                        <Reveal delay={0.15}>
                            <p className="mt-6 text-fog leading-relaxed">
                                I work across the full stack from multi-server infrastructure
                                and remote DB replication to cloud integrations and production
                                deployments. I also lead development teams, manage scaling with
                                Frappe Bench and Docker, and deliver pre-sales demos that
                                bridge the gap between business needs and technical solutions.
                            </p>
                        </Reveal>

                        <div className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-10">
                            {STATS.map((stat, i) => (
                                <Reveal key={stat.label} delay={0.1 * i}>
                                    <div className="font-display font-semibold text-4xl md:text-5xl text-gradient-violet">
                                        {stat.value}
                                    </div>
                                    <div className="mt-2 font-mono text-[10px] md:text-xs tracking-[0.2em] text-fog uppercase">
                                        {stat.label}
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
