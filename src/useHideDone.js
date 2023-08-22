import { useState, useEffect } from 'react';

export const useHideDone = () => {
    const [hideDone, setHideDone] = useState(JSON.parse(localStorage.getItem("hideDone")) || false);

    useEffect(() => {
        localStorage.setItem("hideDone", JSON.stringify(hideDone));
    }, [hideDone]);

    const toggleHideDone = () => {
        setHideDone(hideDone => !hideDone);
    };

    return ({
        hideDone,
        toggleHideDone,
    });
};