import React from 'react';

// ? TYPES
interface ButtonProps {
    text: string;
    variant?: 'primary' | 'secondary' | 'outline';
    action?: () => void;
}

// ? VARIANT STYLES
const VARIANT_STYLES = {
    primary:
        'px-4 py-2 bg-[#C778DD] text-[#0A0A0A] border border-[#C778DD] hover:bg-transparent hover:text-[#C778DD] transition-colors duration-300 cursor-pointer',
    secondary:
        'px-4 py-2 bg-[#0A0A0A] text-[#C778DD] border border-[#C778DD] hover:bg-[#C778DD] hover:text-[#0A0A0A] transition-colors duration-300 cursor-pointer',
    outline:
        'px-4 py-2 border border-[#C778DD] text-[#C778DD] hover:bg-[#C778DD] hover:text-[#0A0A0A] transition-colors duration-300 cursor-pointer',
};

// ? MAIN COMPONENT
const Button: React.FC<ButtonProps> = ({
    text,
    variant = 'outline',
    action,
}) => {
    // ? EVENT HANDLERS
    const handleClick = (): void => {
        if (action) {
            action();
        }
    };

    // ? RENDER
    return (
        <>
            <button className={VARIANT_STYLES[variant]} onClick={handleClick}>
                {text}
            </button>
        </>
    );
};

export default Button;