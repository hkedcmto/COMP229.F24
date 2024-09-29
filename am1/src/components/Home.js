/*
File name:      Home.js
Student's Name: Cheuk Man Edmond To
Student ID:     301378748
Date:           Sep 28, 2024
*/

import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
    return (
        <>
        <Header />
        <main>
        <h1>Welcome to my homepage</h1>

        <img src="self.png" alt="Edmond" className="selfImg" />
        <h2>I am a softare engineer create ...</h2>
        <ul className="homeList">
            <li>innovative</li>
            <li>efficiently</li>
            <li>user experiences</li>
        </ul>
        <a href="about">More ...</a>
        </main>
        <Footer />
        </>
    );
};

export default Home;