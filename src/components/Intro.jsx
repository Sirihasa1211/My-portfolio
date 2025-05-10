import React from "react";
import './Intro.css';
import './Certifications';
import img1 from './assets/TaskManager.png';
import img2 from './assets/weathernow.png';
import img3 from './assets/ExamSahayak.png' ;
import Projects from "./Projects";
import Certifications from "./Certifications";
import DelayedDisplay from "./DelayDisplay";
export default function Intro(){
    return(
        <div className="intro">
            <DelayedDisplay delay={2000}>
            <div className="intro-text">
            <p>About me:</p>
            <p>
            I'm Sirihasa, an enthusiastic engineer at Anurag University, hyderabad. Curretly interested in exploring the field of web development and Machine Learning.
            Have completed projects from frontend like Task Manager , WeatherNow, Exam Assistance for teachers and students.Currently working on Machine Learning model for Fake news detection.
            </p>
            </div>
            </DelayedDisplay>
            <DelayedDisplay delay={4000}>
            <div className="my-projects">
                <p>My Projects:</p>
            <Projects path={img1} name="Task Manager" description="A web application to manage tasks and daily activities through task descriptions, deadlines and reminders.It is a frontend project built using html, css and javascript."/>
            <Projects path={img2}name="WeatherNow" description="A web application to check the weather of any city in the world. It is a frontend project built using React.js and CSS."/>
            <Projects path={img3} name="Exam Sahayak" description="A web application to assist teachers and students in conducting exams. It is a frontend project built using html, CSS and js."/>
            </div>
            </DelayedDisplay>
            <div className="certifications">

            </div>
            </div>
    );
}