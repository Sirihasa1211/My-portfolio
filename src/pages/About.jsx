import React from "react";
import './About.css';
import img1 from '../components/assets/TaskManager.png';
import img2 from '../components/assets/weathernow.png';
import img3 from '../components/assets/ExamSahayak.png' ;
import Projects from "../components/Project";
import Certifications from "../components/Certificate";
import DelayedDisplay from "../components/DelayDisplay";
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
            <Projects path={img3} name="Exam Sahayak" description="A web application to assist teachers and students in conducting exams. It is a frontend project built using html, CSS and js."/>
            <Projects name="Fake news detection" description="A machine learning model made using Logistic regression and TF ID vectoriser"/>
            </div>
            </DelayedDisplay>
            <div className="certifications">

            </div>
            </div>
    );
}