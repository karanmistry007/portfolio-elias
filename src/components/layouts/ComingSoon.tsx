import React from 'react';

// ? TYPES
interface ComingSoonProps {
    message?: string;
}

// ? MAIN COMPONENT
const ComingSoon: React.FC<ComingSoonProps> = ({ message }) => {
    // ? RENDER
    return (
        <div className="coming-soon border border-[#ABB2BF] text-2xl text-[#C778DD] flex justify-center items-center h-48 p-2 lg:p-6">
            {message}
        </div>
    );
};

export default ComingSoon;