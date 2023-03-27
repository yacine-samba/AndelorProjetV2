import React, { useState, useEffect } from 'react';
import 'chart.js/auto'
import { Line } from 'react-chartjs-2';
import axios from '../../../api/axios';
import './Graph.css'

export const Graph = () => {

  const [chartData, setChartData] = useState({ datasets: [] });

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get('/api/reservations');
        const reservations = response.data['hydra:member'];
        generateChartData(reservations);
        console.log(reservations);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReservations();
  }, []);

  const generateChartData = (reservations) => {

    // if (!reservations) {
    //   return;
    // }

    const startDate = new Date('2023-03-01');
    const endDate = new Date('2023-03-31');
    const days = [];
    for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
      days.push(new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date));
    }
    const data = {
      labels: days,
      datasets: [
        {
          label: 'Billet.s vendu.s',
          data: [],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }
      ]
    };

    for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
      days.push(new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date));
    }
    data.labels = days;

    // Calculer les réservations pour chaque jour
    const reservationsForDay = {};
    reservations?.forEach((reservation) => {
      const reservationDay = new Date(reservation.dateReservation).getDate();
      reservationsForDay[reservationDay] = (reservationsForDay[reservationDay] || 0) + reservation.nombreBillet;
    });

    // Ajouter les données pour chaque jour
    for (let day = 1; day <= days.length; day++) {
      data.datasets[0].data.push(reservationsForDay[day] || 0);
    }
    setChartData(data);
  }

  useEffect(() => {
    generateChartData();
  }, []);



  return (
      <Line className="canvas" data={chartData} />
  );
}

export default Graph;
