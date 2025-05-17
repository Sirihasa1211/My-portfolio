
import React from "react";
import './Contactpage.css';
import img1 from '../assets/logos/email logo.jpeg';
import img2 from '../assets/logos/github.png';
import img3 from '../assets/logos/insta logo.jpeg';
import img4 from '../assets/logos/linkedin logo.png';
export default function Contact(){
    return(
        <div className="contact-info">
            <div className="title"><h1>Contact Me:</h1>
            </div>
            <div className="logos">
            <img src={img1} alt="email logo" className="logo"/>
            <img src={img2} alt="github logo" className="logo"/>
            <img src={img3} alt="instagram logo" className="logo"/>
            <img src={img4} alt="linkedin logo" className="logo"/>
            </div>
        </div>
    );
}