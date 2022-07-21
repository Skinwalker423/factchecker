import React, {useState} from "react";
import './navbar-style.css';
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { logOut } from "../../utils/firebase/firebase.utils";
import { Alert } from "react-bootstrap";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";

const NavbarTwo = () => {

    const {currentUser, setCurrentUser} = useAuth();
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const handleLogOut = () => {
        try{
            logOut();
            setCurrentUser(null);
            navigate('/');
        }catch(e){
            setError(e.message);
        }
    }

    return(
        <div>
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand>FACTCHECKER</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link className="nav-link" to={'/'}>Home</Link>
                    <Link className="nav-link" to={'/'}>Link</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            <Container className="d-flex nav justify-content-end">
                <Nav>
                    {currentUser && <Link className="nav-link" to={'/dashboard'}>Profile</Link>}
                </Nav>
                <Nav>
                    {currentUser ? <Link onClick={handleLogOut} className="nav-link" to={'/'}>Log Out</Link> : <Link className="nav-link" to={'/authorization'}>Sign In</Link> }
                </Nav>
            </Container>
        </Navbar>
        {error && <Alert variant="danger">{error}</Alert>}
        <Outlet />
        </div>
    )
}

export default NavbarTwo;