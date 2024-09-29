/*
File name:      Service.js
Student's Name: Cheuk Man Edmond To
Student ID:     301378748
Date:           Sep 28, 2024
*/

import Header from "./Header";
import Footer from "./Footer";

const Service = () => {
    return (
        <>
        <Header />
        <main>
        <img src="service.png" alt="service" className="topTitle" /><br /><br />
        <ul>
            <li>create high-quality software solutions that are scalable using languages like C, C++, C#, Java, and JavaScript</li>
            <li>design responsive web applications with React, HTML, PHP, and ASP</li>
            <li>design and manage databases to make sure those are tuned for peak performance with SQL and Oracle</li>
            <li>implement software solutions on the Linux environment to ensure correct deployment of software</li>
            <li>work with cross-functional teams in ensuring that the software being developed meets the needs of the business</li>
            <li>give technical support to troubleshoot system-related issues and optimize functionality</li>
            <li>Undertake continuous learning and implement emerging technologies to improve the practice of engineering.</li>
        </ul>
        </main>
        <Footer />
        </>
    );
};

export default Service;