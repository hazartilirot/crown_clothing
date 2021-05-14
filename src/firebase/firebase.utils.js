import firebase from 'firebase/app'

import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAIIYCdyuY5xzghW6TOQOv0UR3aOtj-wIA",
  authDomain: "crown-clothing-86068.firebaseapp.com",
  projectId: "crown-clothing-86068",
  storageBucket: "crown-clothing-86068.appspot.com",
  messagingSenderId: "995764106191",
  appId: "1:995764106191:web:5ecc0b749dbfda050d98ba",
  measurementId: "G-7CD10CNMYW"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;