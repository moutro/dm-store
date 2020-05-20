import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAXoeuWjQzp-06XHHQI5oiZdEDS6rZ6qBQ",
  authDomain: "dmstore-db.firebaseapp.com",
  databaseURL: "https://dmstore-db.firebaseio.com",
  projectId: "dmstore-db",
  storageBucket: "dmstore-db.appspot.com",
  messagingSenderId: "508035056839",
  appId: "1:508035056839:web:54497d034170ae113eeae2",
  measurementId: "G-FC7YEW98Q3",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  console.log(snapShot)
  console.log(userRef)

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
