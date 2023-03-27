import React from 'react'
import { Prism } from '../components/prism/Prism';
import { Separator } from '../components/separator/Separator'
import { NewReservation } from '../components/context/newreservation/NewReservation';
import { Back } from '../components/back/Back'

export const Tickets = () => {
  return (
    <div className='h-full m8 pt-6 p-4 max-w-5xl mx-auto'>
      <Back path="/"/>
      <Prism />
      <Separator />
      <NewReservation path={"/confirmation-reservation"} />

    </div>
  )
}

export default Tickets;