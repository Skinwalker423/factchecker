import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import { logOut } from "../../utils/firebase/firebase.utils";

const DashBoard = () => {

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
                    <h1 className="text-center">Profile</h1>
                    <Card.Title>{currentUser.email}</Card.Title>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button onClick={handleLogOut} variant="link">Log out</Button>
            </div>
        </Container>
    )
}

export default DashBoard;