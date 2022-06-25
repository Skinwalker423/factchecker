import Button from "../button/button-component";
import { auth, signInWithGooglePopup, addUserDocFromAuth } from "../../utils/firebase/firebase.utils";


const SignInForm = () => {

    const formHandler = async(e) => {
        e.preventDefault();
        
    }

    const logInGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await addUserDocFromAuth(user);
        console.log(userDocRef);

    }

    return(
        <form onSubmit={formHandler}>
            <h3>Sign In</h3>
            <div className="form-group">
                <label htmlFor="email">email</label>
                <input className="form-control" name="email" type={'text'} />
            </div>
            <Button onClick={logInGoogleUser} title={'Sign In With Google'} />
        </form>
    )
}

export default SignInForm;