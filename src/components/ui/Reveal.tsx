import { motion } from 'motion/react';

interface RevealProps {
    children: React.ReactNode;
    delay?: number;
    y?: number;
    className?: string;
}

// ─── Fade-up reveal when the element enters the viewport ─────────────
const Reveal = ({ children, delay = 0, y = 36, className = '' }: RevealProps) => (
    <motion.div
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
        className={className}
    >
        {children}
    </motion.div>
);

export default Reveal;
