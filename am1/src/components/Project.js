/*
File name:      Project.js
Student's Name: Cheuk Man Edmond To
Student ID:     301378748
Date:           Sep 28, 2024
*/

import Header from "./Header";
import Footer from "./Footer";

const Project = () => {
    return (
        <>
        <Header />
        <main>

        <img src="project.png" alt="Project" className="topTitle" />
        Belows are three of my projects that I have completed. 

        <div className="mainBox">
            <img src="project_matrix.png" alt="Dynamic Matrix" className="project_img" />
            <h2>Dynamic Matrix</h2>
            This is an indivual project that use HTML, JavaScript and CSS to create a 15x15 HTML table and displays in each cell the row number and the column number. Also, allow the user to enter the number of rows and columns to redraw a new table. 
        </div>

        <div className="mainBox">
            <img src="project_dom.png" alt="Interactive Slideshow" className="project_img" />
            <h2>Interactive Slideshow</h2>
            This is an indivual project that use HTML, DOM with nodes, JavaScript and CSS to create an interactive slideshow. 
            When the users click on a picture and it opens an overlay containing a zoomed version of the image, a button allows users to insert that picture to a favorites list area at the bottom of the first page.
            A maximum of 5 pics can be added to the favorites. After that, a message is displayed to remove at least one favorite image, before adding a new picture.
            If the user clicks on a favorite picture, a Remove button shows up next to that picture. If the user clicks it, the pic is removed from the favorite list.
        </div>

        <div className="mainBox">
            <img src="project_bug.png" alt="Projct Matrix" className="project_img" />
            <h2>Catch Strawberries</h2>
            This is an indivual project that use HTML, DOM with nodes, JavaScript and CSS to create an score counted game. 
            The strawberry hops randomly around the game area at a given interval. 
            The player tries to catch the strawberry by clicking on it. If player succeeds, the score is incremented and the hopping interval is decremented by a number of milliseconds, so it gets harder to catch the strawberry.
            If the game becomes too challenging, the payer can reset the speed to the initial hopping interval by clicking the Reset Speed button.
            If the player wants, player can start again by resetting the score by clicking the Reset Score button.
        </div>

        </main>
        <Footer />
        </>
    );
};

export default Project;