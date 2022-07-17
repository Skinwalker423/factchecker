import './authorization-styles.scss';
import SignInForm from '../../components/sign-in-form/sign-in-component';
import SignUpForm from '../../components/sign-up-form/sign-up-component';
import Container from 'react-bootstrap/esm/Container';

const Authorization = () => {
    return (
        <Container className='d-flex flex-column-md  justify-content-evenly mt-5 align-items-start auth-forms'>
            <SignInForm />
            <SignUpForm />
        </Container>
    )
}

export default Authorization;