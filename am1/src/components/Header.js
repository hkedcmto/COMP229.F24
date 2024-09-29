/*
File name:      Header.js
Student's Name: Cheuk Man Edmond To
Student ID:     301378748
Date:           Sep 28, 2024
*/
import {NavLink} from "react-router-dom";
import logo from "../images/logo.png"

const Header = () => {
    return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/"><img src={logo} id="logo" /></NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/project">Project</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/service">Service</NavLink>
                </li>  
                <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>  
            </ul>
            </div>
        </div>
    </nav>
      
    );
};

export default Header;