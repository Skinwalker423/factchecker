import { useNavigate } from "react-router";
import FormButton from "../button/button-component";
import {signInWithGooglePopup, addUserDocFromAuth } from "../../utils/firebase/firebase.utils";
import { Card, Button, Form, Container } from "react-bootstrap";




const SignInForm = () => {

    const navigate = useNavigate();

    const formHandler = async(e) => {
        e.preventDefault();
        
    }

    const logInGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const authDocRef = await addUserDocFromAuth(user);
        if(authDocRef){
            navigate('/');
        }
        console.log(authDocRef);
    }

    return(
        <Container>
            <Card>
                <Card.Body>
                    <Form onSubmit={formHandler}>
                        <h3 className="text-center">Sign In</h3>
                        <Form.Group id='email' className="form-group">
                            <Form.Label htmlFor="email">email</Form.Label>
                            <Form.Control className="form-control" name="email" type={'text'}/>
                        </Form.Group>
                        <Form.Group id='password' className="form-group">
                            <Form.Label htmlFor="email">password</Form.Label>
                            <Form.Control className="form-control" name="password" type={'password'}/>
                        </Form.Group>
                        <Button className="w-100 mt-3">Sign In</Button>
                        <FormButton title='Sign In With Google' theme={'outline-primary'} onGoogleClick={logInGoogleUser}  />
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default SignInForm;