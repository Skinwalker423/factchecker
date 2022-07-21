import { useNavigate } from "react-router";
import { useRef, useState } from "react";
import FormButton from "../button/button-component";
import {signInWithGooglePopup, addUserDocFromAuth, auth } from "../../utils/firebase/firebase.utils";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Card, Button, Form, Container, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";




const SignInForm = () => {

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const emailRef = useRef();
    const passwordRef = useRef();

    const navigate = useNavigate();

    const formHandler = async(e) => {
        e.preventDefault();

        
    }

    const signIn = (email, password) => {
        setLoading(true);
         signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("signed in", user);
            setLoading(false);
            navigate('/dashboard');
        })
        .catch((e) => {
            setError('wrong email/password')
            console.log(e.message);
            setLoading(false);
        })
        }

    const signInHandler = () => {
        signIn(emailRef.current.value, passwordRef.current.value);
    }

    const logInGoogleUser = async () => {
        setLoading(true);
        const {user} = await signInWithGooglePopup();
        const authDocRef = await addUserDocFromAuth(user);
        if(!authDocRef){
            setError('something went wrong with Google sign in');
            setLoading(false);
        }
        console.log(authDocRef);
        navigate('/dashboard');
    }

    return(
        <Container>
            <Card>
                <Card.Body>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={formHandler}>
                        <h3 className="text-center">Sign In</h3>
                        <Form.Group id='email' className="form-group">
                            <Form.Label htmlFor="email">email</Form.Label>
                            <Form.Control ref={emailRef} autoComplete="true" className="form-control" name="email" type={'text'} required/>
                        </Form.Group>
                        <Form.Group id='password' className="form-group">
                            <Form.Label htmlFor="email">password</Form.Label>
                            <Form.Control ref={passwordRef} autoComplete="true" className="form-control" name="password" type={'password'} required/>
                        </Form.Group>
                        <Button disabled={loading} onClick={signInHandler} className="w-100 mt-3">Sign In</Button>
                    </Form>
                    <FormButton disabled={loading} title='Sign In With Google' theme={'outline-primary'} onGoogleClick={logInGoogleUser}  />
                    <div className="w-100 text-center mt-2">
                        <Link to={'/forgotpassword'}>Forgot Password?</Link>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default SignInForm;