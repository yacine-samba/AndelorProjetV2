import React, { useEffect, useState } from 'react'
import axios from '../../api/axios';
import Reservation from '../compenents/notification/Reservation';
import ReservationsList from '../compenents/ReservationsList';

export const Dashboard = () => {

  const [allReservation, setAllReservation] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:8000/api/total-reservation')
          .then(response => {



            setAllReservation(response.data.total);
          })
          .catch(error => {
              console.error(error);
          });
  }, []);

  return (
    
    <div className="home h-full m8 pt-6 p-4">
      <h1>Bienvenue sur votre espace Administrateur</h1>
      <p>Vous pouvez gérer les réservations</p>
      <div className="totalres">
        <h2>Nombre de billets 'vendus'</h2> 
        <p className="text-4xl text-color-primary font-bold">{allReservation}</p>
      </div>
      
      <div>
        <Reservation />
      </div>
      <div className="list">
        <ReservationsList />
      </div>
    </div>
  )
}

export default Dashboard;