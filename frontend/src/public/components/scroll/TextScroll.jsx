import React, { useEffect, useState } from 'react'
import './TextScroll.css'

export const TextScroll = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="flex item-center overflow-x-hidden">
            <div className="text text-[3rem] md:text-[4rem] lg:text-[5rem]" style={{ transform: `translateX(-${scrollPosition}px)` }}>
                Couleur
                Perception
                Lumière
                Écran
                RVB
                Pigments
                Créativité
                Science
                Expérience
                Imagination
                Intéractivité
                Couleurs
                Perception
                Lumière
                Écran
                RVB
                Pigments
                Créativité
                Science
                Expérience
                Imagination
                Intéractivité
                Perception
                Lumière
                Écran
                RVB
                Pigments
                Créativité
            </div>
        </div>
    )
}


export default TextScroll;