import React from "react";
import './Project.css';
export default function Projects(props) {
    return(        
        <div className="project">
            <nav className="content">
            <p><strong>{props.name}:</strong></p>
            <p>{props.description}</p>
            </nav>
            <img src={props.path}/>
        </div>
    );
}