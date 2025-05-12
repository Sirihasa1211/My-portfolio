import React from "react";
import './Certifications.css';
export default function Certificate(props) {
    const myStyle = {
        color: 'blue',
        fontSize: '16px',
        padding: '10px'
      };
    return(        
        <div className="certificate" style={myStyle}>
            <img src={props.path} alt="certificate_image"/>
        </div>
    );
}