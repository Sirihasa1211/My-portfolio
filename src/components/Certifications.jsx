import React from "react";
import './Certifications.css';
export default function Projects(props) {
    return(        
        <div className="certificate">
            <img src={props.path} alt="certificate_image"/>
        </div>
    );
}