import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
    return (
        <>
        <Header />
        <h1>Welcome to my homepage</h1>

        <img src="self.png" alt="Edmond" className="selfImg" />
        <h2>I am a softare engineering creates ...</h2>
        <ul className="homeList">
            <li>innovative</li>
            <li>efficiently</li>
            <li>user experiences</li>
        </ul>
        <a href="about">More ...</a>
        <Footer />
        </>
    );
};

export default Home;