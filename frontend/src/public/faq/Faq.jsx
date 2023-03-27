import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Back } from '../components/back/Back'
import Separator from '../components/separator/Separator';
import './Faq.css';
import { Helmet } from 'react-helmet';

export const Faq = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const onQuestionClick = (index) => {
        if (index === activeIndex) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };


    const renderQuestions = () => {
        const questions = [
            {
                question: "C'est quoi Andelor?",
                answer: "L'exposition Andelor est une exposition interactive sur l'histoire et la science de la couleur."
            },
            {
                question: "Où se déroule l'exposition ?",
                answer: "L'exposition se déroule au Musée du Multimédia et des Sciences de la ville de Champs-sur-Marne, situé au 2 Rue Albert Einstein, 77420 Champs-sur-Marne."
            },
            {
                question: "Quels sont les horaires d'ouverture de l'exposition ?",
                answer: "L'exposition est ouverte tous les jours de 9h à 18h."
            },
            {
                question: "Combien coûte l'entrée à l'exposition ?",
                answer: "La visite de l'éxposition Andelor est totalement gratuite. Il est possible de réserver sa visite de l'exposition en ligne sur notre site web."
            },
            {
                question: "Combien de temps dure la visite de l'exposition ?",
                answer: "La durée moyenne de la visite est d'environ 1h00"
            },
            {
                question: "Y a-t-il des activités pour les enfants ?",
                answer: "Oui, il y a des activités spéciales pour les enfants, comme des ateliers de peinture et de dessin."
            },
            {
                question: "Puis-je prendre des photos pendant la visite ?",
                answer: "Oui, vous pouvez prendre des photos pendant votre visite, mais attention sans le flash."
            },
            {
                question: "L'exposition est-elle accessible aux personnes à mobilité réduite ?",
                answer: "Oui, l'exposition est accessible aux personnes à mobilité réduite, il y a des accès prévus à cet effet."
            },
            {
                question: "Y a-t-il un vestiaire pour les bagages ?",
                answer: "Oui, il y a un vestiaire gratuit pour les sacs à dos et les valises à l'entrée de l'exposition."
            },
            {
                question: "Comment puis-je acheter des billets pour l'exposition ?",
                answer: "Vous pouvez acheter des billets sur place à la billetterie ou en ligne sur notre site web."
            }
        ];

        return questions.map((faq, index) => {
            const active = index === activeIndex ? 'active' : '';
            return (
                <div key={index} className={`faq ${active}`}>
                    <div className="question pt-6" onClick={() => onQuestionClick(index)}>
                        <h2>{faq.question}</h2>
                        <span>{activeIndex === index ? (<FontAwesomeIcon className="text-3xl p-4" icon={faChevronRight} />) : (<FontAwesomeIcon className="text-3xl p-4" icon={faChevronRight} />)}</span>
                    </div>
                    <div className="answer">
                        <p>{faq.answer}</p>
                    </div>
                    <Separator />
                </div>
            );
        });
    };

    return (
        <div className="faq-container m-auto h-full py-4 px-4">
            <Helmet>
                <meta name="description" content="FAQ | Andelor" />
            </Helmet>
            <Back path={"/"} />
            <h1 className="mb-12">Besoin d'aide ? Consultez notre foire aux questions !</h1>
            {renderQuestions()}
        </div>
    );
};

export default Faq;
