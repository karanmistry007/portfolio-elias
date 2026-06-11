import { ReactLenis } from 'lenis/react';

// ─── Lenis smooth-scroll wrapper ─────────────────────────────────────
const SmoothScroll = ({ children }: { children: React.ReactNode }) => (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2 }}>
        {children}
    </ReactLenis>
);

export default SmoothScroll;
