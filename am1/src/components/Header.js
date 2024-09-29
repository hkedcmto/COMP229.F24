/*
File name:      Header.js
Student's Name: Cheuk Man Edmond To
Student ID:     301378748
Date:           Sep 28, 2024
*/

const Header = () => {
    return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="./"><img src="logo.png" id="logo" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link" href="about">About</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="project">Project</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="service">Service</a>
                </li>  
                <li className="nav-item">
                <a className="nav-link" href="contact">Contact</a>
                </li>  
            </ul>
            </div>
        </div>
    </nav>
      
    );
};

export default Header;