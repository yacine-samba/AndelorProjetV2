import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
import './Admin.css'

export const Edit = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [reservation, setReservation] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    date_reservation: '',
    heure_reservation: '',
    nombre_billet: '',
  });

  useEffect(() => {
    const fetchReservation = async () => {
      try {
        const response = await axios.get(`/api/reservations/${id}`);
        setReservation(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchReservation();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReservation((prevReservation) => ({
      ...prevReservation,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`/api/reservations/${id}`, reservation);
      navigate('/admin/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="home h-full m8 pt-6 p-4">
      <h1>Modifier la réservation</h1>

      <div className="relative py-8">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                id
              </th>
              <th scope="col" className="px-6 py-3">
                Nom
              </th>
              <th scope="col" className="px-6 py-3">
                Prénom
              </th>
              <th scope="col" className="px-6 py-3">
                Email
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
            <tr key={reservation.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {reservation.id}
              </th>
              <td className="px-6 py-4">
                <input
                  className='input-field-admin'
                  type="text"
                  id="nom"
                  name="nom"
                  value={reservation.nom}
                  onChange={handleChange}
                />
              </td>
              <td className="px-6 py-4">
                <input
                  className='input-field-admin'
                  type="text"
                  id="prenom"
                  name="prenom"
                  value={reservation.prenom}
                  onChange={handleChange}
                />
              </td>

              <td className="px-6 py-4">
                <input
                  className='input-field-admin'
                  type="text"
                  id="email"
                  name="email"
                  value={reservation.email}
                  onChange={handleChange}
                />
              </td>

              <td className="px-6 py-4">
                <input
                  className='input-field-admin'
                  type="text"
                  id="telephone"
                  name="telephone"
                  value={reservation.telephone}
                  onChange={handleChange}
                />
              </td>

              <td className="px-6 py-4">
                <input
                  className='input-field-admin'
                  type="date"
                  id="date_reservation"
                  name="date_reservation"
                  value={new Date(reservation.date_reservation).toLocaleDateString('fr-FR')}
                  onChange={handleChange}
                />
              </td>

              <td className="px-6 py-4">
                <input
                  className='input-field-admin'
                  type="time"
                  id="heure_reservation"
                  name="heure_reservation"
                  value={new Date(reservation.heure_reservation).toLocaleTimeString('fr-FR', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                  onChange={handleChange}
                />
              </td>

              <td className="px-6 py-4">
                <input
                  className='input-field-admin'
                  type="text"
                  id="nombre_billet"
                  name="nombre_billet"
                  value={reservation.nombre_billet}
                  onChange={handleChange}
                />
              </td>
              <td className="px-6 py-4">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>
                  Valider
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Edit;