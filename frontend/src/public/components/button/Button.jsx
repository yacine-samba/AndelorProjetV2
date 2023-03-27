import React from 'react'
import './Button.css';
import { useNavigate } from "react-router-dom";

export const Button = ({path, children, margin}) => {


  let navigate = useNavigate();

  //ontop in click
  const clickButton = () => {
    navigate(path);
    window.scrollTo(0, 0);
  }


  return (
    
    <button onClick={clickButton} className={`Button ${margin}`}>
      
      {children}
    </button>
  );
};