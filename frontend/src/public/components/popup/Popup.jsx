import React from 'react'
import './Popup.css';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export const Popup = ({ textPopup, text, icon }) => {

    const [isOpen, setIsOpen] = useState(false);

    const open = () => {
        document.body.style.overflow = "hidden";
        setIsOpen(true);
        window.scrollTo(0, 0);
    }

    const close = () => {
        document.body.style.overflowX = "hidden";
        document.body.style.overflowY = "auto";
        setIsOpen(false);
    }

    return (
        <div className="">
            <div className={`popup flex flex-col items-center w-full m8 pt-6 p-4 h-screen ${isOpen ? "active" : ""}`}>
                <button className="absolute top-0" id='close' onClick={close}>
                <title>closeNavButton</title>
                    <FontAwesomeIcon className="iconHeader " icon={faXmark} />
                </button>
                <div>
                    <h1>
                        {textPopup}
                    </h1>
                </div>
            </div>
            <button id='open' onClick={open} className="m-auto flex items-center justify-between w-full text-lg	">
                {text}
                <FontAwesomeIcon className="iconHeader" icon={icon} />
            </button>
        </div>
    )
}

export default Popup;