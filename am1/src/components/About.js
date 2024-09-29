/*
File name:      About.js
Student's Name: Cheuk Man Edmond To
Student ID:     301378748
Date:           Sep 28, 2024
*/

import Header from "./Header";
import Footer from "./Footer";
import {NavLink} from "react-router-dom";
import aboutImg from "../images/about.png";
import selfImg from "../images/self.png"

const About = () => {
    return (
        <>
            <Header />
            <main>
            <img src={aboutImg} alt="About" className="topTitle" />
            
            <img src={selfImg} className="selfImg" alt="Self Photo" />

            <div>
                <h2>Software Engineer</h2>
            <p>Hi, my legal name is Cheuk Man Edmond To. I am a Software Engineer with proficient in C, C++, C#, Java, JavaScript, React, Linux, SQL, Oracle, PHP, JSP, ASP, and HTML. 
                I am currently studying Software Engineering Technician at Centennial College. 
                I hold a Bachelor's degree in Computer Science, and completed an Associate degree in Information Technology.</p>
            <p>My detail resume can be downloaded <a href="resume.pdf">here</a></p>
            </div>
            </main>
            <Footer />
        </>
    );
};

export default About;