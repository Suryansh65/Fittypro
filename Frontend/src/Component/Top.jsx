import React from 'react';
import Main_image from "./Assets/Main_image.jpg";
import "./Assets/CSS/Top.css";

const Top = () => {
  return (
    <div className='image_box'>
        <img src={Main_image} alt='main_image'/>
    </div>
  )
}

export default Top