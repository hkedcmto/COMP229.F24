import Header from "./Header";
import Footer from "./Footer";

const About = () => {
    return (
        <>
            <Header />
            <h1>About Me</h1>

            <img src="self.png" className="selfImg" alt="Self PHoto"/>

            <h2>Software Engineer</h2>
            <p>Hi, I am a Software Engineer with proficient in C, C++, C#, Java, JavaScript, React, Linux, SQL, Oracle, PHP, JSP, ASP, and HTML. I am currently studying Software Engineering Technician at Centennial College. I hold a Bachelor's degree in Computer Science, and completed an Associate degree in Information Technology.</p>
            <p>My detail resume can be downloaded <a href="resume.pdf">here</a></p>
            <Footer />
        </>
    );
};

export default About;