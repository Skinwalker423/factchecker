import { useEffect, useRef, useState} from "react";
import './sign-up-styles.scss';
import { Card, Button, Form, Container, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import { addUserDocFromAuth, auth } from "../../utils/firebase/firebase.utils";


const SignUpForm = () => {

    const emailRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();

    const navigate = useNavigate();

    const {signUp, currentUser, setUserName, addAuthToFirebase, userName } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);



    const formHandler = async(e) => {
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmationRef.current.value){
            console.log(passwordRef.current.value, passwordConfirmationRef)
            return setError('passwords do not match');
        }

        try{
            setError('');
            setLoading(true);
            setUserName(usernameRef.current.value);
            await signUp(emailRef.current.value, passwordRef.current.value);
            // await addAuthToFirebase(auth.currentUser, usernameRef);
            console.log('successfully signed up');
            navigate('/');
    
        }catch(e){
            setError(`failed to create an account: ${e.message}`);
            console.log(error);
        }
        setLoading(false);
    }

    // const logIn = async() => {
    //     const {user} = await signInWithGooglePopupPractice();
    //     const userDocRef = await createUserDocFromAuthPrac(user);
    //     console.log('userDocRef:', userDocRef);
    // }

    // const logInwithRedirect = async() => {
    //     signInWithGoogleRedirectPractice();
    // }

    // const signUpWithEmailAndPasswordHandle = () => {
    //     signUp()
    //     console.log('submitted')
    // }

    return (
        <Container className="w-100" style={{style: 'minHeight: 40vh'}}>
            <Card style={{style: 'maxWidth: 400px'}}>
                <Card.Body>
                    <h3 className="text-center">Sign UP</h3>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form className="" onSubmit={formHandler}>
                        <Form.Group id='displayName'>
                            <Form.Label>username</Form.Label>
                            <Form.Control name='displayName' autoComplete="true" type={'text'} ref={usernameRef} required />
                        </Form.Group>
                        <Form.Group id='email'>
                            <Form.Label>email</Form.Label>
                            <Form.Control name="email" autoComplete="true" type={'text'} ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>password</Form.Label>
                            <Form.Control name='password' autoComplete="true" type={'password'} ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id='confirmPassword'>
                            <Form.Label>confirm password</Form.Label>
                            <Form.Control name='confirmPassword' ref={passwordConfirmationRef} autoComplete="true" type={'password'} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100 mt-3"  type='submit'>Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div>
                Already have an account? <Link to={'/'}>Log in</Link>
            </div>
        </Container>
    )
}

export default SignUpForm;