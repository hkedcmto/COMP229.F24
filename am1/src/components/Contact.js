/*
File name:      Contact.js
Student's Name: Cheuk Man Edmond To
Student ID:     301378748
Date:           Sep 28, 2024
*/

import Header from "./Header";
import Footer from "./Footer";

const Contact = () => {
    return (
        <>
            <Header />
            <main>
            <img src="contact.png" alt="Contact" className="topTitle" />
            Please feel free to contact me via e-mail: <a href="mailto:cto20@my.centennialcollege.ca">cto20@my.centennialcollege.ca</a><br />
            Or use the below form to contact me.<br /><br />
            <form action="mailto:cto20@my.centennialcollege.ca" method="post">
                <label for="fname">Name:</label><br />
                <input type="text" id="fname" placeholder="Enter your name" required /><br />
                <label for="tel">Tel:</label><br />
                <input type="tel" id="tel" placeholder="Enter your phone no." /><br />
                <label for="email">E-mail:</label><br />
                <input type="email" id="email" placeholder="Enter your e-mail" /><br />
                <label for="message">Message:</label><br />
                <textarea id="message" placeholder="Enter your message"></textarea><br /><br />
                <input type="submit" value="Send" />
            </form>
            </main>
            <Footer />
        </>
    );
};

export default Contact;