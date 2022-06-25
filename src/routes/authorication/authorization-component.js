import './authorization-styles.scss';
import SignInForm from '../../components/sign-in-form/sign-in-component';

const Authorization = () => {
    return (
        <div className='auth-forms container'>
            <SignInForm />
            <div>Sign Up Form</div>
        </div>
    )
}

export default Authorization;