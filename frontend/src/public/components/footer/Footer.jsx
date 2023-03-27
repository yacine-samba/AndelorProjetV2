import React from 'react'
import './Footer.css';

export const Footer = () => {
    return (
        <div className="">
            <footer className="footer flex flex-col justify-between h-full px-8 pt-12 pb-4">
                <div className=" AndelorFooter flex flex-col sm:flex-row justify-between items-center my-12">
                    <h1 className="sm:text-[3rem] text-[2rem] lg:text-[8rem] md:text-7xl mt-4">Andel<span>o</span>r</h1>
                    <div className="footerButton">
                        <a href="/tickets">Tickets</a>
                    </div>
                </div>
                <div className="menu flex flex-col items-center justify-between uppercase">

                    <div >
                        <ul className="flex flex-col lg:flex-row  items-center mb-4 text-xl">
                        
                            <li className="hover:underline hover:text-color-primary mx-4 my-1"><a href="#top" >En haut</a></li>
                            <li className="hover:underline hover:text-color-primary mx-4 my-1"><a href="/" >Visite</a></li>
                            <li className="hover:underline hover:text-color-primary mx-4 my-1"><a href="/exposition" >Exposition</a></li>
                            <li className="hover:underline hover:text-color-primary mx-4 my-1"><a href="/faq" >FAQ</a></li>
                            <li className="hover:underline hover:text-color-primary mx-4 my-1"><a href="/mentions-legales" >Mentions Légales</a></li>
                        </ul>
                    </div>

                    <div className="social">
                        <ul className="flex items-center mt-3 text-xl mb-4">
                            <li className="hover:underline hover:text-color-primary mx-4"><a href="/">Facebook</a></li>
                            <li className="hover:underline hover:text-color-primary mx-4"><a href="/">Instagram</a></li>
                            <li className="hover:underline hover:text-color-primary mx-4"><a href="/">Twitter</a></li>
                        </ul>
                    </div>

                </div>
                <p className="text-base text-light-color-grey">
                    © 2023 Andelor. Tous droits réservés.
                </p>
            </footer>
        </div>
    )
}

export default Footer;