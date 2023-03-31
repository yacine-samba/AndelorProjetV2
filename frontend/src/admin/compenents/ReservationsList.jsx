import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import { useNavigate } from "react-router-dom";

export const ReservationsList = () => {

    const [reservations, setReservations] = useState([]);
    const [loading, setLoading] = useState(false);


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
                setLoading(true);
                setTimeout(() => {
                    setLoading(false);
                }, 1500);
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
            <p className='text-base'>Vous pouvez modifier ou supprimer une réservation</p>

            <div className={`
                ${loading ? 'block' : 'hidden'}
            fixed top-0 left-0 w-full h-full bg-black opacity-80 z-50
            flex flex-col justify-center items-center
            `}>
                <h1 className='pb-8'>Suppression de la réservation en cours...</h1>

                <div role="status">
                    <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-color-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span class="sr-only">Loading...</span>
                </div>

            </div>
            <div className="relative overflow-x-auto py-8 w-2/3 mx-auto">
                <table className="w-full text-md text-left rounded-xl text-gray-400">
                    <thead className="text-md uppercase  bg-light-color-grey text-gray-300">
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
                                    {/* bouton modifier et delete */}
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleEdit(reservation.id)}>
                                        Modifier
                                    </button>
                                    {/* <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={() => handleDelete(reservation.id)}>
                                        Supprimer
                                    </button> */}
                                    <button className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={() => handleDelete(reservation.id)}>
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