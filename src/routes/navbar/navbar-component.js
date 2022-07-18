import React from "react";
import './navbar-style.css';
import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { logOut } from "../../utils/firebase/firebase.utils";

const Navbar = () => {

    const {currentUser, setCurrentUser} = useAuth();

    return(
        <div>
        <nav className="navbar navbar-expand-sm bg-light d-flex justify-content-between align-items-center justify-content-center">
            <div className="d-flex">
                <div className="brand-container">
                    <a className="navbar-brand" href="/">FACTCHECKER</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/">HOME</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">ABOUT US</a>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to='/donations'>DONATE</Link>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        MORE
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="/">FAQ</a></li>
                        <li><a className="dropdown-item" href="/">SOURCES</a></li>
                        <li><a className="dropdown-item" href="/">FUNDING</a></li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
            <div>
                {currentUser ? <Link onClick={() => {
                    logOut();
                    setCurrentUser(null);
                }} className="nav-link" to={'/'}>Log Out</Link> : <Link className="nav-link" to={'/authorization'}>Sign In</Link> }
            </div>
        </nav>
        <Outlet />
        </div>
    )
}

export default Navbar;