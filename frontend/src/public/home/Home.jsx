import React from 'react';
import { faCalendar, faEye, faLocationDot, faPersonRays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../components/button/Button';
import videobg from './assets/bg_1.mp4';
import colors from './assets/colors.png';
import { Carousel } from '../components/carousel/Carousel';
import { Separator } from '../components/separator/Separator';
import { TextScroll } from '../components/scroll/TextScroll.jsx';
import { Helmet } from 'react-helmet';


export const Home = () => {

  return (
    <div className="home h-full overflow-x-hidden">
      <Helmet>
        <meta name="description" content="Page d'accueil | Exposition Andelor" />
      </Helmet>
      <div className="hero h-screen">
        <video autoPlay loop muted playsInline src={videobg}>
        <p>Votre navigateur ne supporte pas la vidéo actuelle. Voici un <a href={videobg}>lien vers la video</a>.</p>
        </video>
        <div className="flex flex-col items-center justify-end h-full">
          <h1 className='AndelorTitle'>Andel<span>o</span>r</h1>
          <h2><span className='text-color-primary'>"</span>Une symphonie des sens<span className='text-color-primary'>"</span></h2>
          <a href="#discover">
            <Button type="submit" margin={"mt-8"}>Découvrir</Button>
          </a>
        </div>
      </div>
      <div>
      </div>

      <div id="discover" className="section h-full">
        <h2 className='text-4xl title'>L'exposition qui revele les secrets des
          <span className="text-[#FF8C00]"> C</span>
          <span className="text-[#FFC107 ">O</span>
          <span className="text-[#00BFFF]">U</span>
          <span className="text-[#00CED1]">L</span>
          <span className="text-[#a961df]">E</span>
          <span className="text-[#9400D3]">U</span>
          <span className="text-[#FF69B4]">R</span>
          <span className="text-[#FF1493]">S</span>
        </h2>
        <div className='flex flex-col items-center lg:flex-row lg:flex-row-reverse'>
          <img src={colors} alt="Illustration de la couleur" />
          <div className='lg:mr-8'>
            <p>Hey toi ! Tu te demandes ce qu'est vraiment la couleur ?</p>
            <p>Ça tombe bien, nous avons une exposition qui va t'émerveiller !<br /> Viens découvrir tous les secrets de la couleur, comment elle est créée sur les écrans et dans la vraie vie, et même comment les scientifiques l'étudient.<br /> Mais ce n'est pas tout ! Tu pourras aussi t'amuser en apprenant grâce à nos activités pour les petits et les grands. Alors, prêt à voir la vie en couleur ? </p><br />
          </div>

        </div>
        <div className='flex flex-col items-center'>
          <p className='text-center'>Rejoins-nous pour une éxperience incroyable à l'exposition <span className="text-color-primary">Andelor</span> !</p>
          <a href="/exposition">
            <Button margin={"mt-8"}>Réserver ma place</Button>
          </a>
        </div>
      </div>

      <div className="section h-full pt-6 p-4">
        <h2 className="text-4xl title pb-8">Infos <span className="text-color-primary">cles</span> de l'exposition</h2>
        <p className="pb-8">Voici les infos les plus importantes à connaître pour ne pas manquer l'exposition :</p>

        <div className="flex flex-col md:flex-row items-start">
        <div className='sm:mx-8'>
          <div>
            <h3>Quand ?</h3>
            <div className="flex items-start py-4">
              <FontAwesomeIcon className="text-color-primary text-3xl p-4" icon={faCalendar} />
              <p className="text-lg">
                L'exposition "Andelor" se tiendra du 1er mars au 31 avril 2023.<br />
                Les horaires d'ouverture seront de 10h à 18h tous les jours.
              </p>
            </div>
          </div>

          <div>
            <h3>Lieu de l'éposition</h3>
            <div className="flex items-start py-4">
              <FontAwesomeIcon className="text-color-primary text-3xl p-4" icon={faLocationDot} />
              <p className="text-lg">
                L'exposition aura lieu au Musée du Multimédia et des Sciences de la ville de Champs-sur-Marne, situé au 2 Rue Albert Einstein, 77420 Champs-sur-Marne.
              </p>
            </div>
          </div>
        </div>

        <div className='sm:mx-8'>
          <h3>Accessibilité</h3>
          <div className="flex items-start py-4">
            <FontAwesomeIcon className="text-color-primary text-3xl p-4" icon={faLocationDot} />
            <p className="text-lg">
              Le Musée du Multimédia et des Sciences est accessible aux personnes à mobilité réduite. Des audioguides en français et en anglais seront disponibles à l'accueil pour les visiteurs malentendants ou malvoyants.<br /> Les animaux d'assistance sont également autorisés dans le musée.</p>
          </div>
          <div className="flex items-start py-4">
            <FontAwesomeIcon className="text-color-primary text-3xl p-4" icon={faPersonRays} />
            <p className="text-lg">
              Pour qui ? Tout le monde, curieux et passionnés de la couleur, petits et grands, amateurs et professionnels.
            </p>
          </div>
        </div>

        <div className='sm:mx-8'>
          <h3>Réservation</h3>
          <div className="flex items-start py-4">
            <FontAwesomeIcon className="text-color-primary text-3xl p-4" icon={faEye} />
            <p className="text-lg">
              La visite de l'éxposition Andelor est totalement gratuite. Il est possible de réserver sa visite de l'exposition en ligne sur notre site web.<br />
              Et n'oublie pas de partager l'info avec tes amis et ta famille, pour qu'ils ne ratent pas cette expérience inoubliable !
            </p>
          </div>
        </div>
        </div>


      </div>

      <div className="section h-full pt-6 p-4" >

        <h2 className="text-4xl title">Les <span className="text-[#FF8C00]">C</span>
          <span className="text-[#FFC107 ">O</span>
          <span className="text-[#00BFFF]">U</span>
          <span className="text-[#00CED1]">L</span>
          <span className="text-[#8F00FF]">E</span>
          <span className="text-[#9400D3]">U</span>
          <span className="text-[#FF69B4]">R</span>
          <span className="text-[#FF1493]">S</span> sous tous les angles</h2>

        <Carousel />

        <p className="text-center">Nous espérons que vous apprécierez votre visite et que vous en apprendrez davantage sur le monde fascinant de la couleur.</p>
        <Separator />

        <TextScroll />
        <p className="text-center">Venez explorer l'univers fascinant de la couleur à travers notre exposition !</p>
        <a href="/exposition" className="flex justify-center">
          <Button margin={"mt-8"}>Réserver ma place</Button>
        </a>
      </div>

    </div>
  );
}

export default Home;


