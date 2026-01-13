import React, { useState, useEffect } from 'react';
import { Zap, ArrowRight } from 'lucide-react'; 

function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveHandler = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", moveHandler);

        // Cleanup
        return () => {
            window.removeEventListener("mousemove", moveHandler);
        };
    }, []); 

    return (
        <div 
            className="pointer-events-none fixed top-0 left-0 z-[9999]"
            style={{ 
                transform: `translate(${position.x - 40}px, ${position.y - 40}px)`,
                transition: 'transform 0.05s ease-out' 
            }}
        >
            <div
                className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 blur-3xl opacity-80"
            />
        </div>
    );
}

export default CustomCursor;
