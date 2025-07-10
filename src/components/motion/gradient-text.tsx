import React, { useEffect } from 'react';
import type { ReactNode } from 'react';

interface GradientTextProps {
    children: ReactNode;
    className?: string;
    colors?: string[];
    animationSpeed?: number;
    showBorder?: boolean;
}

export default function GradientText({
    children,
    className = "",
    colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
    animationSpeed = 8,
    showBorder = false,
}: GradientTextProps) {
    const animationName = `gradient-${Math.random().toString(36).substr(2, 9)}`;

    useEffect(() => {
        // Create keyframes dynamically
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ${animationName} {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, [animationName]);

    const gradientStyle = {
        backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
        backgroundSize: "300% 100%",
        animation: `${animationName} ${animationSpeed}s ease-in-out infinite`,
    };    return (
        <span
            className={`inline-block text-transparent bg-cover ${className}`}
            style={{
                ...gradientStyle,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
            }}
        >
            {children}
        </span>
    );
}
