
import React from "react";
import './Contactpage.css';
import img1 from './assets/email logo.jpeg';
import img2 from './assets/github.png';
import img3 from './assets/insta logo.jpeg';
import img4 from './assets/linkedin logo.png';
export default function Contact(){
    return(
        <div className="contact-logos">
            <h1>Contact Me</h1>
            <img src={img1} alt="email logo" className="logo"/>
            <img src={img2} alt="github logo" className="logo"/>
            <img src={img3} alt="instagram logo" className="logo"/>
            <img src={img4} alt="linkedin logo" className="logo"/>
        </div>
    );
}