import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration

const firebaseConfig = {
  apiKey: "AIzaSyBtIs3ZbxfSTQu_AujnQ52b_9E_YQJXxac",
  authDomain: "factchecker-fab95.firebaseapp.com",
  projectId: "factchecker-fab95",
  storageBucket: "factchecker-fab95.appspot.com",
  messagingSenderId: "31477439022",
  appId: "1:31477439022:web:92f640c1ae643acf309dbf",
  measurementId: "G-3J17QGP71E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth(app);

export const signInWithGooglePopup = async () => {
  const result = await signInWithPopup(auth, provider);
  return result;

}

export const addUserDocFromAuth = async (authUser) => {

  try {

    const userDocRef = doc(db, "users", authUser.uid);

    const userSnapshot = await getDoc(userDocRef);


    if (!userSnapshot.exists()) {
      const { displayName, email } = authUser;
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



    //   const docRef = await addDoc(collection(db, "users"), {
    //   displayName: authUser.displayName,
    //   email: authUser.email,
    //   id: authUser.uid

    // });
    console.log("Document written with ID: ");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}