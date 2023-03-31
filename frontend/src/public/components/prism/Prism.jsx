import React, { useEffect, useState } from 'react'
import prism from './prism.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import axios from '../../../api/axios'
import './Prism.css'

export const Prism = () => {
    const [exposition, setExposition] = useState(null);

    useEffect(() => {
        axios.get(`/api/expositions/1`)
            .then(response => setExposition(response.data));
    }, []);

    if (!exposition) {
        return (
            <div class="flex flex-col items-center">
                <div class="animate-pulse flex space-x-4 w-full">
                    <div class="flex-1 space-y-6 py-1">
                        <div class="h-10 bg-slate-700 rounded"></div>
                        <div class="h-16 bg-slate-700 rounded"></div>
                        <div class="h-28 bg-slate-700 rounded"></div>
                        <div class="h-8 bg-slate-700 rounded"></div>
                        <div class="h-8 bg-slate-700 rounded"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center ">
            <h1 className="title text-4xl">{exposition.nom}</h1>
            <p>Découvrez L'univers éclatant de la couleur : une exposition pour tous</p>
            <img src={prism} alt="Présentation de l'éxposition" />
            <div className="w-full">
                <h2 className='text-color-primary'>À partir du {exposition.date_debut}</h2>
                <h2 className='text-slate-500'>
                    <FontAwesomeIcon className='mr-2' icon={faLocationDot} />
                    Paris
                </h2></div>
        </div>
    )
}

export default Prism;