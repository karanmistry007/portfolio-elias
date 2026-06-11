import { CONTACT_DETAILS } from '../../data';
import { MagneticButton, Reveal, SectionHeading } from '../ui';

// ─── Contact ─────────────────────────────────────────────────────────
const Contact = () => (
    <section id="contact" className="py-24 md:py-36 scroll-mt-24 relative overflow-hidden">
        {/* Ambient glow */}
        <div
            aria-hidden
            className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 w-[70vw] h-[50vw] rounded-full bg-violet/10 blur-[140px] pointer-events-none"
        />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
            <SectionHeading index="05" note="Get in touch" title="Let's build something great together" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">
                <div>
                    <Reveal>
                        <p className="text-fog leading-relaxed">
                            I'm Karan Mistry, a Technical Lead and Full Stack Frappe/ERPNext
                            developer currently working with Sanskar Technolab — one of
                            India's leading Frappe Certified Partners and ERPNext
                            implementers. I specialize in turning complex business challenges
                            into scalable, high-performance digital solutions.
                        </p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="mt-6 text-fog leading-relaxed">
                            Whether you need help with ERP implementation, multi-tenant SaaS
                            deployment, custom product development, or enterprise
                            architecture — I'd love to connect. Feel free to reach out using
                            the details here. Let's build something great together!
                        </p>
                    </Reveal>
                    <Reveal delay={0.2} className="mt-10">
                        <MagneticButton href="mailto:ksmistry007@gmail.com">
                            Say hello <span aria-hidden>↗</span>
                        </MagneticButton>
                    </Reveal>
                </div>

                {/* Contact channels */}
                <div className="flex flex-col">
                    {CONTACT_DETAILS.map((contact, i) => (
                        <Reveal key={contact.details} delay={0.06 * i}>
                            <a
                                href={contact.link}
                                target={contact.link.startsWith('http') ? '_blank' : undefined}
                                rel={
                                    contact.link.startsWith('http')
                                        ? 'noopener noreferrer'
                                        : undefined
                                }
                                className="group flex items-center justify-between gap-4 border-b border-line py-5 transition-colors duration-300 hover:border-violet/50"
                            >
                                <span className="flex items-center gap-4 text-fog group-hover:text-snow transition-colors duration-300">
                                    <span className="text-violet/70 group-hover:text-violet transition-colors duration-300">
                                        {contact.icon}
                                    </span>
                                    <span className="font-mono text-sm">{contact.details}</span>
                                </span>
                                <span
                                    aria-hidden
                                    className="text-fog/50 transition-all duration-300 group-hover:text-violet group-hover:translate-x-1 group-hover:-translate-y-1"
                                >
                                    ↗
                                </span>
                            </a>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default Contact;
