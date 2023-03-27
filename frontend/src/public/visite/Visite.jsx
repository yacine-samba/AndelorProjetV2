import React from 'react'
import { Button } from '../components/button/Button';
import { Back } from '../components/back/Back'
import guide1 from './assets/guide1.jpg';
import guide2 from './assets/guide2.jpg';
import guide3 from './assets/guide3.jpg';
import guide4 from './assets/guide4.jpg';
import { Helmet } from 'react-helmet';

export const Visite = () => {
    return (
        <div>
        <Helmet>
          <meta name="description" content="Visite de l'éxposition | Andelor" />
        </Helmet>
            <div className='section'>
                <div className="mb-4 w-full">
                    <Back path="/" />
                </div>
                <h1 className='title text-2xl sm:text-4xl'>Une exposition Multigénérationnelle :<br /> Découvrez la Science des <span className="text-[#FF8C00]"> C</span>
                    <span className="text-[#FFC107 ">O</span>
                    <span className="text-[#00BFFF]">U</span>
                    <span className="text-[#00CED1]">L</span>
                    <span className="text-[#a961df]">E</span>
                    <span className="text-[#9400D3]">U</span>
                    <span className="text-[#FF69B4]">R</span>
                    <span className="text-[#FF1493]">S</span> !
                </h1>


                <div className="flex flex-col sm:flex-row items-center my-8">
                    <h2 className='sm:w-3/4 pb-8'>Explorez l'univers mystérieux d'Andelor</h2>
                    <p className='text-xl'>L'Exposition <span className='text-color-primary'>Andelor</span> vous permettra de découvrir les couleurs sous toutes leurs formes et dans toutes leurs dimensions. Vous pourrez explorer les théories scientifiques derrière la couleur, voir comment les artistes ont utilisé la couleur à travers l'histoire de l'art, et expérimenter les différentes couleurs et leur impact sur votre humeur et vos émotions.</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center my-8">
                    <h2 className='sm:w-3/4 pb-8'>Exploration immersive de l'univers Andelor</h2>
                    <p className='text-xl'>En plus des éléments traditionnels de l'exposition, nous sommes fiers d'offrir une expérience de réalité virtuelle qui vous permettra de plonger encore plus profondément dans le monde de la couleur. Avec des casques VR de pointe, vous pourrez explorer des mondes virtuels étonnants et découvrir des expériences de couleurs que vous ne pourriez jamais vivre autrement.</p>
                </div>
            </div>

            <div className="section text-center">
                <h2>Décrouvrez notre guide</h2>
                <div className='flex flex-col sm:flex-row items-center justify-between'>
                    <img src={guide1} alt="Guide de l'exposition page1" />
                    <img src={guide2} alt="Guide de l'exposition page2" />
                    <img src={guide3} alt="Guide de l'exposition page3" />
                    <img src={guide4} alt="Guide de l'exposition page4" />
                </div>
                <a href="/" className='hover:text-color-primary'>
                    Voir le guide
                </a>
            </div>
            <div className='section'>
                <div className='bg-'>
                    <h2 className='sm:w-3/4 pb-8'>Explorez l'univers d'Andelor en réalité virtuelle - Essayez maintenant !"</h2>
                    <p>Découvrez l'expérience unique de l'application intéractive d'Andelor. Plongez dans un monde virtuel où vous pourrez explorer une exposition fascinante sur la couleur et vivre une aventure immersive grâce à la réalité virtuelle.</p>
                    <Button margin={"mt-8"}>Découvrir</Button>
                </div>
            </div>
        </div>
    )
}

export default Visite;