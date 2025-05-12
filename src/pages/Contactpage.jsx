
import React from "react";
import Layout from "../pages/Layout";
import './Contactpage.css';
import img1 from '../components/assets/email logo.jpeg';
import img2 from '../components/assets/github.png';
import img3 from '../components/assets/insta logo.jpeg';
import img4 from '../components/assets/linkedin logo.png';
import Navbar from "../components/Navbar";
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