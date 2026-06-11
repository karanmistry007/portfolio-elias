import { LOGO_TEXT, SOCIAL_LINKS } from '../data';

// ─── Footer ──────────────────────────────────────────────────────────
const Footer = () => (
    <footer className="border-t border-line">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-12">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 pb-10 mb-8 border-b border-line">
                <div className="max-w-md">
                    <div className="font-display font-semibold text-lg tracking-tight">
                        {LOGO_TEXT}
                        <span className="text-violet">.</span>
                    </div>
                    <p className="mt-3 text-sm text-fog leading-relaxed">
                        Technical Lead & Full Stack Frappe/ERPNext Developer based in
                        Ahmedabad, India. Building scalable SaaS products, multi-tenant
                        architectures, and enterprise-grade ERP solutions.
                    </p>
                </div>

                <div>
                    <h3 className="font-mono text-xs tracking-[0.25em] text-fog uppercase mb-4">
                        Media
                    </h3>
                    <div className="flex gap-5">
                        {SOCIAL_LINKS.map((social) => (
                            <a
                                key={social.name}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                                className="text-fog hover:text-violet hover:-translate-y-0.5 transition-all duration-300"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <p className="text-center font-mono text-[11px] text-fog/70">
                © {new Date().getFullYear()} Karan Mistry. All rights reserved.
            </p>
        </div>
    </footer>
);

export default Footer;
