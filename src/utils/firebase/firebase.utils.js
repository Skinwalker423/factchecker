import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword

} from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration

// production mode credentials
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyC4RLeUSrPEJ8UiGRoeS4DNNDvq6FzLOXY",
  authDomain: "factchecker-development.firebaseapp.com",
  projectId: "factchecker-development",
  storageBucket: "factchecker-development.appspot.com",
  messagingSenderId: "61402223921",
  appId: "1:61402223921:web:05a610e34925b3bc3b0c10"
};

// Initialize Firebase

const factCheckApp = initializeApp(firebaseConfig);

// const factCheckApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(factCheckApp);


export const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth(factCheckApp);

export const signInWithGooglePopup = async () => {
  const result = await signInWithPopup(auth, provider);
  return result;

}
export const signInWithGoogleRedirect = async () => {
  const result = await signInWithRedirect(auth, provider);
  const res = await getRedirectResult(auth);
  console.log(res);
  return result;

}



export const logOut = () => {
    signOut(auth);
}



export const addUserDocFromAuth = async (authUser, userName ) => {

  try {
    const userDocRef = doc(db, "users", authUser.uid);
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
      const { displayName = userName, email } = authUser;
      const createdAt = new Date();
      try {
        await setDoc(userDocRef, {
          displayName: displayName,
          email: email,
          createdAt
        })
      } catch (e) {
        console.log('error setting doc', e)
      }
    }
    return userDocRef;

  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export const signUpWithEmailAndPassword = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((e) => {
      console.log(e.message);
    })
}
export const logInWithEmailAndPassword = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("signed in", user);
      return user;
    })
    .catch((e) => {
      console.log(e.message);
    })
}