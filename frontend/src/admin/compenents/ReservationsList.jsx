import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import { useNavigate } from "react-router-dom";

export const ReservationsList = () => {

    const [reservations, setReservations] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8000/api/reservation')
            .then(response => {
                setReservations(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);



    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/reservations/${id}`)
            .then(() => {
                setReservations(reservations.filter(reservation => reservation.id !== id));
            })
            .catch(error => {
                console.error(error);
            });
    }

    const navigate = useNavigate();

    const handleEdit = (id) => {
        // redirection vers la page d'édition de la réservation
        navigate(`action/edit/${id}`);
    }

    if (!Array.isArray(reservations)) {

        return <div></div>;
    }

    return (
        <div>
            <h2>Tableau de toutes les reservations</h2>

            <div className="relative overflow-x-auto py-8">
                <table className="w-full text-sm text-left rounded-xl text-gray-400">
                    <thead className="text-xs uppercase  bg-light-color-grey text-gray-300">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nom Prénom
                            </th>
                            <th scope="col" className="px-6 py-3">
                                E-mail
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Téléphone
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date de réservation
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Heure de réservation
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nombre de billet.s
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservations.map(reservation => (
                            <tr key={reservation.id} className=" border-b bg-color-grey border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap ">
                                    {reservation.id}
                                </th>
                                <td className="px-6 py-4">
                                    {reservation.nom} {reservation.prenom}
                                </td>
                                <td className="px-6 py-4">
                                    {reservation.email}
                                </td>
                                <td className="px-6 py-4">
                                    {reservation.telephone}
                                </td>
                                <td className="px-6 py-4">
                                    {new Date(reservation.date_reservation).toLocaleDateString('fr-FR')}
                                </td>
                                <td className="px-6 py-4">
                                    {new Date(reservation.heure_reservation).toLocaleTimeString('fr-FR', {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                    })}
                                </td>
                                <td className="px-6 py-4">
                                    {reservation.nombre_billet}
                                </td>
                                <td className="px-6 py-4">
                                    {/* bouton modifier et delete */}
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleEdit(reservation.id)}>
                                        Modifier
                                    </button>
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={() => handleDelete(reservation.id)}>
                                        Supprimer
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );


}

export default ReservationsList;