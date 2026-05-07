import React from 'react';

export function BrainCircuitIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={props.width || "24"} 
            height={props.height || "24"} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={`lucide lucide-brain-circuit ${props.className || ''}`}
            {...props}
        >
            <path d="M12 12h.01"/>
            <path d="M16 6V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2"/>
            <path d="M16 18v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2"/>
            <path d="M8 12H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1Z"/>
            <path d="M18 12h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Z"/>
            <path d="M12 12v6"/>
            <path d="M12 6v6"/>
        </svg>
    );
}
