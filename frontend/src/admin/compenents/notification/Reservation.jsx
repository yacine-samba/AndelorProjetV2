import React, { useEffect, useState } from 'react'
import axios from '../../../api/axios';

export const Reservation = () => {

    const [lastReservations, setLastReservations] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/last-reservation')
            .then(response => {
                setLastReservations(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div className="my-8">
            <h2>Dernieres réservation</h2>
            <div className="flex items-center justify-center w-full">
                {lastReservations.map(reservation => (
                    <div className="mx-8 my-4"  key={reservation.id}>
                        <p className='bg-color-grey p-8 rounded-md'> 
                            <span className="text-color-primary  font-bold text-xl">{reservation.nombre_billet}</span> place.s pour le {new Date(reservation.date_reservation).toLocaleDateString('fr-FR')} à {new Date(reservation.heure_reservation).toLocaleTimeString('fr-FR', {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                    })}h au nom de <span className="font-bold ">{reservation.nom}</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Reservation;