import { useNavigate } from 'react-router-dom';

import type { ButtonProps } from '../../types';

// ─── Variant Styles ──────────────────────────────────────────────────
const VARIANT_STYLES = {
    primary:
        'px-4 py-2 bg-[#C778DD] text-[#0A0A0A] border border-[#C778DD] hover:bg-transparent hover:text-[#C778DD] transition-colors duration-300 cursor-pointer',
    secondary:
        'px-4 py-2 bg-[#0A0A0A] text-[#C778DD] border border-[#C778DD] hover:bg-[#C778DD] hover:text-[#0A0A0A] transition-colors duration-300 cursor-pointer',
    outline:
        'px-4 py-2 border border-[#C778DD] text-[#C778DD] hover:bg-[#C778DD] hover:text-[#0A0A0A] transition-colors duration-300 cursor-pointer',
};

// ─── Component ───────────────────────────────────────────────────────
const Button: React.FC<ButtonProps> = ({ text, variant = 'outline', action }) => {
    const navigate = useNavigate();

    const handleClick = (): void => {
        if (action) {
            action();
        } else {
            navigate('/coming-soon');
        }
    };

    return (
        <button className={VARIANT_STYLES[variant]} onClick={handleClick}>
            {text}
        </button>
    );
};

export default Button;