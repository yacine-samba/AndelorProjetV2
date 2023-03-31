import React from 'react'
import { Button } from '../components/button/Button';
import { Back } from '../components/back/Back'
import guide1 from './assets/guide1.png';
import guide from './assets/guide.pdf';
import affiche1 from './assets/affiche.png';
import affiche from './assets/affiche.pdf';
import { Helmet } from 'react-helmet';
import vr from './assets/vr.png';
import ReactPlayer from 'react-player';

export const Visite = () => {
    return (
        <div>
            <Helmet>
                <meta name="description" content="Visite de l'éxposition | Andelor" />
            </Helmet>
            <div className='px-4 pt-8'>
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
            <div className='bg-[#16213c] p-4 py-28'>
                <h2 className='text-center'>Décrouvrez le guide et l'affiche de notre exposition !</h2>
                <div>
                    <div className='flex flex-col sm:flex-row justify-center'>
                        <div className="text-center flex flex-col items-center mx-8">
                            <img src={guide1} alt="Guide de l'exposition page1" />
                            <a href={guide} target="_blank" className='hover:text-color-primary'>
                                Voir le guide
                            </a>
                        </div>
                        <div className="text-center flex flex-col items-center mx-8">
                            <img src={affiche1} alt="Guide de l'exposition page1" />
                            <a href={affiche} target="_blank" className='hover:text-color-primary'>
                                Voir l'affiche
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='section'>

                <div className='flex flex-col items-start justify-center lg:flex-row p-2'>
                    <img src={vr} alt="Illustration de la couleur" className='m-0 p-0 pb-8 sm:max-w-sm' />
                    <div className='lg:ml-8 max-w-lg'>
                        <h2 className='pb-8'>Explorez l'univers d'Andelor en réalité virtuelle - Essayez maintenant !</h2>
                        <p className='text-base'>Découvrez l'expérience unique de l'application intéractive d'Andelor. Plongez dans un monde virtuel où vous pourrez explorer une exposition fascinante sur la couleur et vivre une aventure immersive grâce à la réalité virtuelle.</p>
                        <a href="https://andelor.fr/andelor-vr/">
                            <Button margin={"mt-8"}>Découvrir</Button>
                        </a>
                    </div>
                </div>

                <div className='flex flex-col items-start justify-center lg:flex-row p-2'>
                    <div className='lg:ml-8 max-w-lg'>
                        <h2 className='pb-8'>Guide vidéo pour utiliser l'application Andelor avec Oculus Quest 2!</h2>
                        <p className='text-base'>Dans ce tutoriel, nous allons vous guider à travers les différentes étapes pour vous permettre de profiter au maximum de cette expérience immersive.</p>
                        <a href="https://andelor.fr/andelor-vr/">
                        </a>
                    </div>
                    <div className='lg:ml-8 max-w-lg pt-4'>
                        <p className='pb-8 text-center text-base'>Comment utiliser l'application interactive de l'exposition Andelor avec l'Oculus Quest 2 ?</p>
                        <ReactPlayer
                            width="300px"
                            height="300px"
                            url='https://www.youtube.com/watch?v=46_fel7mPRs&feature=youtu.be' />
                    </div>
                </div>
                <Button path={'/'} margin='mt-8 mx-auto'>Retour à l'accueil</Button>
            </div>
        </div>
    )
}

export default Visite;