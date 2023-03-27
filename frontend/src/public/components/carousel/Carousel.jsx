import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import art from './assets/art.png'
import science from './assets/science.png'
import family from './assets/family.png'
import './Carousel.css'

export const Carousel = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className='overflow-x-hidden mb-8'>
      <Slider {...settings}>
      <div className="">
        <img className='mx-auto' src={science} alt="Illustration sur la théorie des couleurs de Newton" />
        <div>
          <h3>La théorie des couleurs de Newton : comment la couleur blanche est-elle créée ?</h3>
          <p className="text-lg">Explorez la science derrière les couleurs et découvrez comment les couleurs sont créées dans le monde réel et sur les écrans. Découvrez les principes des couleurs additives et soustractives et comment Isaac Newton a expliqué que le blanc est la somme de toutes les couleurs.</p>
        </div>
      </div>
      <div className="px-8">
        <img className='mx-auto' src={art} alt="Illustration famille qui s'amuse avec des couleurs" />
        <div>
          <h3>Jouer avec les couleurs : une exposition ludique pour toute la famille</h3>
          <p className="text-lg">Apprenez aux enfants l'importance de la couleur et comment elles peuvent influencer nos émotions et notre perception du monde. Avec des activités ludiques et éducatives, les enfants pourront explorer les couleurs de manière amusante et créative.</p>
        </div>
      </div>
      <div className="px-8">
        <img className='mx-auto' src={family} alt="Illustration pour présenter la couleur dans l'art" />
        <div>
          <h3>L'art de la couleur : explorez l'utilisation des couleurs dans l'art</h3>
          <p className="text-lg">Découvrez comment les artistes ont utilisé la couleur pour exprimer des émotions et des idées à travers l'histoire de l'art. Admirez les œuvres d'art colorées de célèbres artistes modernes et contemporains.</p>
        </div>
      </div>
    </Slider>
    </div>
  );
};

export default Carousel;