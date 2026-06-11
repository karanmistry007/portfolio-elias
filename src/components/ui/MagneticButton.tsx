import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

interface MagneticButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: 'solid' | 'ghost';
    className?: string;
}

// ─── Button that magnetically follows the cursor ─────────────────────
const MagneticButton = ({
    children,
    href,
    onClick,
    variant = 'solid',
    className = '',
}: MagneticButtonProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 180, damping: 14, mass: 0.4 });
    const springY = useSpring(y, { stiffness: 180, damping: 14, mass: 0.4 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
        y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const base =
        'inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-medium text-sm tracking-wide transition-colors duration-300 cursor-pointer select-none';
    const variants = {
        solid:
            'bg-snow text-ink hover:bg-violet hover:text-ink',
        ghost:
            'border border-line text-snow hover:border-violet/60 hover:text-violet',
    };

    const content = href ? (
        <a
            href={href}
            onClick={onClick}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={`${base} ${variants[variant]} ${className}`}
        >
            {children}
        </a>
    ) : (
        <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
            {children}
        </button>
    );

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            className="inline-block"
        >
            {content}
        </motion.div>
    );
};

export default MagneticButton;
