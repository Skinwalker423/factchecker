import React from "react";
import { useState } from "react";
import { Card, Button, Container, Alert } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import { logOut } from "../../utils/firebase/firebase.utils";
import { Link } from "react-router-dom";

const DashBoard = () => {

    const [error, setError] = useState('');
    const {currentUser, setCurrentUser} = useAuth();
    console.log(currentUser);

    const handleLogOut = () => {
        logOut();
        setCurrentUser(null);
    }


    return (
        <Container>
            <Card>
                <Card.Body>
                    <h1 className="text-center mb-4">Profile</h1>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Card.Title>Email: {currentUser.email}</Card.Title>
                    <Link className="btn btn-primary w-100 mt-3" to={'/update-profile'}>Update</Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button onClick={handleLogOut} variant="link">Log out</Button>
            </div>
        </Container>
    )
}

export default DashBoard;