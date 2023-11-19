import { useState } from 'react';

interface useStyleTypes {
    style: { transform: string }
    setNewStyle: (e: any) => void
}

const useStyle = (): useStyleTypes => {
    const [style, setStyle] = useState({ transform: 'translate(0, 0)' });

    const setNewStyle = (e: any) => {
        const newStyle = {
            transform: `translate(-${(e.clientX * 0.3) / 8}px, ${(e.clientY * 0.3) / 8}px)`
        };

        setStyle(newStyle);
    };

    return {
        style,
        setNewStyle
    }
};

export default useStyle;
