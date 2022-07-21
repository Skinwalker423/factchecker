import { useRef, useState } from "react";
import { Card, Button, Form, Container, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { resetPassword } from "../../utils/firebase/firebase.utils";




const ForgotPassword = () => {

    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const emailRef = useRef();

    const formHandler = async (e) => {
        e.preventDefault();
        try{
            setMessage('');
            resetPassword(emailRef.current.value);
            setMessage('Check your inbox for further instructions')
        }catch(e){
            setError(e.message)
        }

    }


    return (
        <Container className="d-flex flex-column align-items-center justify-content-center mt-5">
            <Card className="d-flex flex-column align-items-center justify-content-center mt-5 w-75">
                <Card.Body className="w-100">
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={formHandler}>
                        <h3 className="text-center">Reset Form</h3>
                        <Form.Group id='email' className="form-group">
                            <Form.Label htmlFor="email">email</Form.Label>
                            <Form.Control ref={emailRef} autoComplete="true" className="form-control" name="email" type={'text'} />
                        </Form.Group>
                        <Button type='submit' className="w-100 mt-3">Reset Password</Button>
                    </Form>
                </Card.Body>
                <Link className="mb-3" to={'/authorization'}>Log in</Link>
            </Card>
        </Container>
    )
}

export default ForgotPassword;