import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyBtIs3ZbxfSTQu_AujnQ52b_9E_YQJXxac",
  authDomain: "factchecker-fab95.firebaseapp.com",
  projectId: "factchecker-fab95",
  storageBucket: "factchecker-fab95.appspot.com",
  messagingSenderId: "31477439022",
  appId: "1:31477439022:web:92f640c1ae643acf309dbf",
  measurementId: "G-3J17QGP71E"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
})

const auth = getAuth();


export const signInWithGooglePopupPractice = async() => {
    const { user } = await signInWithPopup(auth, provider);
    console.log(user);
}



