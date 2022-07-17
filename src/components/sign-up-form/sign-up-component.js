import { useRef, useState} from "react";
import './sign-up-styles.scss';
import { Card, Button, Form, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";


const SignUpForm = () => {

    const emailRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();

    const {signUp } = useAuth();
    const [error, setError] = useState('');

    // useEffect(() => {
    //     const redirectResponse = async() => {
    //         const response = await getRedirectResult(auth);
    //         if(response){
    //             const userDocRef = await createUserDocFromAuthPrac(response.user);
    //             console.log(userDocRef);
    //         }
    //     }
    //     redirectResponse();

    // }, [])

    const formHandler = async(e) => {
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmationRef.current.value){
            return setError('passwords do not match');
        }
        try{
            setError('');
            await signUp(emailRef.current.value, passwordRef.current.value);
        }catch(e){
            setError(`failed to create an account: ${e.message}`);
            console.log(error);
        }
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
                    <Form className="" onSubmit={formHandler}>
                        <Form.Group id='username'>
                            <Form.Label>username</Form.Label>
                            <Form.Control type={'text'} ref={usernameRef} required />
                        </Form.Group>
                        <Form.Group id='email'>
                            <Form.Label>email</Form.Label>
                            <Form.Control type={'text'} ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id='passord'>
                            <Form.Label>password</Form.Label>
                            <Form.Control type={'password'} ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label id='confirmPassord' ref={passwordConfirmationRef}>confirm password</Form.Label>
                            <Form.Control type={'password'} required />
                        </Form.Group>
                        <Button className="w-100 mt-3"  type='submit'>Submit</Button>
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