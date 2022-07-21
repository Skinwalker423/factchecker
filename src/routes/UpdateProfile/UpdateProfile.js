import React, {useRef} from "react";
import { useState } from "react";
import { Card, Button, Container, Alert, Form } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { updateProfileEmail, updateProfilePassword } from "../../utils/firebase/firebase.utils";

const UpdateProfile = () => {

    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const {currentUser, setGlobalMessage} = useAuth();
    const navigate = useNavigate();

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted');
        const promises = [];
        setLoading(true);
        setError('');
        setMessage('');
        setGlobalMessage('');

        if(passwordRef.current.value !== passwordConfirmationRef.current.value){
            setError('new password does not match');
            setLoading(false);
            return;
        }
        
        if(passwordRef.current.value){
            promises.push(updateProfilePassword(currentUser, passwordRef.current.value ));
            console.log('pw added to promises');
        }
        if(currentUser.email !== emailRef.current.value){
            promises.push(updateProfileEmail(currentUser, emailRef.current.value));
            console.log('email added to promises');
        }

        if(!promises.length){
            setError('nothing was updated');
            setLoading(false);
            return;
        }
        
        Promise.all(promises)
            .then(() => {
                setGlobalMessage('update succesfful!');
                navigate('/dashboard');
            })
            .catch((e) => {
                setError(e.message)
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <Container className="mt-5 w-100">
            <Card>
                {error && <Alert variant="danger">{error}</Alert>}
                {message && <Alert variant="success">{message}</Alert>}
                <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <h3 className="text-center">Update Form</h3>
                    <Form.Group id='email' className="form-group">
                        <Form.Label htmlFor="email">email</Form.Label>
                        <Form.Control defaultValue={currentUser.email} ref={emailRef} autoComplete="true" className="form-control" name="email" type={'text'}/>
                    </Form.Group>
                    <Form.Group id='password' className="form-group">
                        <Form.Label htmlFor="email">password</Form.Label>
                        <Form.Control placeholder="leave blank to keep password" ref={passwordRef} autoComplete="true" className="form-control" name="password" type={'password'} />
                    </Form.Group>
                    <Form.Group id='confirmPassword'>
                        <Form.Label>confirm password</Form.Label>
                        <Form.Control placeholder="leave blank to keep password" name='confirmPassword' ref={passwordConfirmationRef} autoComplete="true" type={'password'} />
                    </Form.Group>
                    <Button type="submit" disabled={loading} className="w-100 mt-3">Update</Button>
                </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Link className="mt-3" to={'/dashboard'}>Cancel</Link>
            </div>
        </Container>
    )
}

export default UpdateProfile;