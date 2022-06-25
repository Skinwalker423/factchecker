import './authorization-styles.scss';
import SignInForm from '../../components/sign-in-form/sign-in-component';
import SignUpForm from '../../components/sign-up-form/sign-up-component';

const Authorization = () => {
    return (
        <div className='auth-forms container'>
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authorization;