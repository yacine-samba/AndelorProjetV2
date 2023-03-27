import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faChartLine, faHome, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';
import { profilservices } from '../../../services/profilservices';
import axios from '../../../api/axios';

export const Sidebar = () => {


    const [show, setShow] = useState(false);
    let navigate = useNavigate();
    const [userName, setUserName] = useState(null);
    const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/user-info`)
      .then(response => {
        setUserName(response.data.prenom)
        setUserEmail(response.data.email)
      });
  }, []);

    const logout = () => {
        profilservices.logout();
        navigate("/");
      }
      


    return (
        <div>
            <div className=" rounded-r shadow flex justify-between w-full p-6 items-center border-b  sm:border-gray-200 ">
                <p className="text-2xl leading-6 ">Andelor</p>
                <div aria-label="toggler" className="flex justify-center items-center">
                    <button id="open" aria-label="open" onClick={() => setShow(!show)} className={`${show ? "hidden" : ""} `}>
                        <svg className="text-indigo-200" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button id="close" aria-label="close" onClick={() => setShow(!show)} className={`${show ? "" : "hidden"}`}>
                        <svg className="text-indigo-200" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>

            <div id="Main" className={`${show ? "translate-x-0" : "-translate-x-full"}  transform fixed top-0 h-full sm:z-20 bg-main-color ease-in-out transition duration-500 flex justify-between items-start w-full sm:w-64 flex-col`}>
                <div className="mt-4 flex flex-col px-6 justify-start items-center w-full   ">
                <p className="text-2xl w-full py-2">Andelor</p>
                    <a href="/admin/dashboard" className="linkSidebar focus:outline-none flex jusitfy-start text-indigo-200  rounded py-6  items-center space-x-6 w-full ">
                    <FontAwesomeIcon className="text-lg " icon={faHome} />
                        <p>Tableau de bord</p>
                    </a>
                    <a href="/admin/statistiques" className="linkSidebar focus:outline-none focus:text-white  flex jusitfy-start    text-indigo-200 rounded py-6   items-center w-full  space-x-6">
                    <FontAwesomeIcon className="text-lg " icon={faChartLine} />
                        <p>Statistiques</p>
                    </a >
                    <a href="/admin/users" className="linkSidebar focus:outline-none focus:text-white  flex justify-start items-center space-x-6    text-indigo-200 rounded  py-6    w-full ">
                    <FontAwesomeIcon className="text-lg " icon={faUsers} />
                        <p>Comptes Admin</p>
                    </a >
                </div>
                <div className='border-t w-full'>
                <div className=" flex flex-col px-6 justify-start items-center w-full ">
                    <button onClick={logout} className="linkSidebar focus:outline-none focus:text-white  flex justify-start items-center space-x-6    text-indigo-200 rounded  py-4    w-full ">
                        <FontAwesomeIcon className="text-lg " icon={faArrowRightFromBracket} />
                        <p>Déconnexion</p>
                    </button >
                </div>
                <div className="pb-8 mx-6 pt-6 flex justify-start items-center space-x-2 ">
                    <FontAwesomeIcon className="text-3xl " icon={faUser} />
                    <div className="flex flex-col jusitfy-start items-start space-y-1">
                        <p className="text-base leading-4">{userName} </p>
                        <p className="text-xs leading-3">{userEmail}</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );

}
