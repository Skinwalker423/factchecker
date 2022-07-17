// import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult } from "firebase/auth";
// import { initializeApp } from "firebase/app";
// import { getDoc, doc, setDoc, getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBtIs3ZbxfSTQu_AujnQ52b_9E_YQJXxac",
//   authDomain: "factchecker-fab95.firebaseapp.com",
//   projectId: "factchecker-fab95",
//   storageBucket: "factchecker-fab95.appspot.com",
//   messagingSenderId: "31477439022",
//   appId: "1:31477439022:web:92f640c1ae643acf309dbf",
//   measurementId: "G-3J17QGP71E"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// const googleProvider = new GoogleAuthProvider();

// export const auth = getAuth();

// googleProvider.setCustomParameters({
//   prompt: 'select_account'
// })

// export const signInWithGooglePopupPractice = async() => {
//   try{
//     const response = await signInWithPopup(auth, googleProvider);
//     return response;
//   }catch(e){
//     console.log('problem with signing in with popup', e);
//   }

// }

// export const signInWithGoogleRedirectPractice = () => {
//     try{
//       const response = signInWithRedirect(auth, googleProvider);
//       return response;
//     }catch(e){
//       console.log(e)
//     }
// }


// export const createUserDocFromAuthPrac = async(userAuth) => {

//     const docRef = doc(db, "users", userAuth.uid);

//     const docSnapshop = await getDoc(docRef);

//     if(!docSnapshop.exists()){
//       const {email, displayName} = userAuth;
//       const createdAt = new Date();

//       try{
//         await setDoc(docRef, {
//             displayName,
//             email,
//             createdAt
//         })
//       }catch(e){
//         console.log('problem with setting doc', e)
//       }
//     }

//     return docRef;

// }



