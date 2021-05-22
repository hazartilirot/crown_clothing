import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIIYCdyuY5xzghW6TOQOv0UR3aOtj-wIA",
  authDomain: "crown-clothing-86068.firebaseapp.com",
  projectId: "crown-clothing-86068",
  storageBucket: "crown-clothing-86068.appspot.com",
  messagingSenderId: "995764106191",
  appId: "1:995764106191:web:5ecc0b749dbfda050d98ba",
  measurementId: "G-7CD10CNMYW",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (snapShot.exists) return userRef;

  const { displayName, email } = userAuth;
  const createAt = new Date();

  try {
    await userRef.set({displayName, email, createAt, ...additionalData});
  } catch (e) {
    console.log('Error while creating a user', e.message);
  }
  
  return userRef;
};

/*export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey)
  
  const batch = firestore.batch();
  
  objectToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })
  return await batch.commit();
}*/


export const convertCollectionsSnapshotToMap = (collection) => {
  const transformedCollection = collection.docs.map(docSnapshot => {
    const {title, items} = docSnapshot.data();
    
    return {
      id: docSnapshot.id,
      title,
      routeName: encodeURI(title.toLowerCase()),
      items
    }
  })
  
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection 
    return accumulator;
  }, {})
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
