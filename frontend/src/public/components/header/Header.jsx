import { useState } from "react";
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEquals, faXmark } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openNav = () => setIsOpen(true);
    const closeNav = () => setIsOpen(false);
    const isHomePage = window.location.pathname === '/';
    const headerClass = isHomePage ? 'home-header' : '';

    return (
        <div className="Navbar inset-x-0 top-0">
            <div id="mySidenav" className={`sidenav flex flex-col items-center m8 pt-6 p-4 text-center h-screen ${isOpen ? "active" : ""}`}>
                <button className="absolute top-0" id='closeNav' onClick={closeNav} alt="">
                <title>closeNavButton</title>
                    <FontAwesomeIcon className="iconHeader " icon={faXmark} aria-describedby="closeNav"/>
                </button>
                <ul>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/visite">Visite</a></li>
                    <li><a href="/exposition">Exposition</a></li>
                    <li><a href="/faq">FAQ ?</a></li>
                </ul>
            </div>
            <button id='openNav' onClick={openNav} className={`border-b backdrop-blur z-10 w-full ${headerClass}`} alt="">
                <title>openNavButton</title>
            <FontAwesomeIcon className="iconHeader" icon={faEquals} aria-describedby="openNav" role="img"/>
            </button>
        </div>
    );
};
