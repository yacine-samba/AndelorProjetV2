import React, { useEffect, useState } from 'react';
import { Back } from '../components/back/Back';
import { Separator } from '../components/separator/Separator';
import { Prism } from '../components/prism/Prism';
import { PresentBy } from '../components/presentby/PresentBy';
import { Description } from '../components/description/Description';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Popup } from '../components/popup/Popup';
import { Button } from '../components/button/Button';
import axios from '../../api/axios';
import teaser from './assets/teaser.mp4';
import './Andelorapi.css';
import Maps from '../components/maps/Maps';
import { Helmet } from 'react-helmet';




export const Andelorapi = () => {
  const [exposition, setExposition] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/expositions/1`)
      .then(response => setExposition(response.data));
  }, []);

  if (!exposition) {
    return (
      <div class="flex flex-col items-center w-screen max-w-5xl relative m-auto">
        <div class="animate-pulse flex space-x-4 w-full">
          <div class="flex-1 space-y-6 py-1">
            <div class="h-10 bg-slate-700 rounded"></div>
            <div class="h-16 bg-slate-700 rounded"></div>
            <div class="h-28 bg-slate-700 rounded"></div>
            <div class="h-8 bg-slate-700 rounded"></div>
            <div class="h-8 bg-slate-700 rounded"></div>
            <div class="h-8 bg-slate-700 rounded"></div>
            <div class="h-8 bg-slate-700 rounded"></div>
            <div class="h-8 bg-slate-700 rounded"></div>
            <div class="h-8 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='max-w-5xl relative m-auto h-full'>
    <Helmet>
      <meta name="description" content="L'exposition Andelor | Andelor" />
    </Helmet>
      <div className="h-full-m8 pt-6 p-4">
        <Back path={"/"} />
        <Prism />
        <Separator />
        <Popup textPopup={
          <div>
            <h2>Teaser de l’exposition</h2>
            <video className='w-full' src={teaser} autoPlay loop muted playsInline controls>
              
        <p>Votre navigateur ne supporte pas la vidéo actuelle. Voici un <a href={teaser}>lien vers la video</a>.</p>
            </video>
            <h3>Découvrez notre vidéo de présentation !</h3>

          </div>
        } text={"Teaser de l’exposition"} icon={faPlay} /> {/* Voir comment intégrer du html dans un props */}
        <Separator />
        <Description />
        <Separator />
        <Maps lat="48.83725175067427" lng="2.585281608119868"/>
        <Separator />
        <PresentBy
          link="https://yacine-samba.fr"
          name="Présenté par WebStory"
        />
      </div>
      <div className='flex items-center justify-between sticky bottom-0 w-full bg-main-color p-4 border-t'>
        <h2>Visite gratuite</h2>
        <Button path="/tickets">Réserver</Button>
      </div>
    </div>
  );
}

export default Andelorapi;