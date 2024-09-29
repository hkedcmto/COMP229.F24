/*
File name:      Home.js
Student's Name: Cheuk Man Edmond To
Student ID:     301378748
Date:           Sep 28, 2024
*/

import Header from "./Header";
import Footer from "./Footer";
import {NavLink} from "react-router-dom";
import selfImg from "../images/self.png";

const Home = () => {
    return (
        <>
        <Header />
        <main>
        <h1>Welcome to my homepage</h1>

        <img src={selfImg} alt="Edmond" className="selfImg" />
        <h2>I am a software engineer focused on</h2>
        <ul className="homeList">
            <li>creating innovative </li>
            <li>efficient solutions</li>
            <li>enhance user experiences</li>
        </ul>
        <NavLink to="/about">More ...</NavLink>
        </main>
        <Footer />
        </>
    );
};

export default Home;