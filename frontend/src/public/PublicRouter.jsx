import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Home } from './home/Home';
import { Andelorapi } from './exposition/Andelorapi';
import { Tickets } from './reservation/Tickets';
import { ConfirmationRes } from './Confirmation/ConfirmationRes';
import Error from '../utils/Error';
import Faq from './faq/Faq';
import Visite from './visite/Visite';
import MentionLegales from './legal/MentionLegales';

export const AdminRouter = () => {

    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exposition" element={<Andelorapi />} />
                <Route path="/visite" element={<Visite />} />
                <Route path="/tickets" element={<Tickets />} />
                <Route path="/confirmation-reservation" element={<ConfirmationRes />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/mentions-legales" element={<MentionLegales />} />
                <Route path="/*" element={<Error />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default AdminRouter;



