import { async } from "@firebase/util";
import { signInWithGooglePopupPractice } from "../../utils/firebase/practice";
import Button from "../button/button-component";

const SignUpForm = () => {

    const formHandler = (e) => {
        e.preventDefault();
    }

    const logIn = async() => {
        await signInWithGooglePopupPractice();
    }

    return (
        <form onSubmit={formHandler}>
            <h3>Sign UP</h3>
            <div>
                <label>username</label>
                <input type={'text'} />
            </div>
            <div>
                <label>email</label>
                <input type={'text'}  />
            </div>
            <Button title={'Sign up with Google'} onClick={logIn} />
        </form>
    )
}

export default SignUpForm;