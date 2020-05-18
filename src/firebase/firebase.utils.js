import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAXoeuWjQzp-06XHHQI5oiZdEDS6rZ6qBQ",
    authDomain: "dmstore-db.firebaseapp.com",
    databaseURL: "https://dmstore-db.firebaseio.com",
    projectId: "dmstore-db",
    storageBucket: "dmstore-db.appspot.com",
    messagingSenderId: "508035056839",
    appId: "1:508035056839:web:54497d034170ae113eeae2",
    measurementId: "G-FC7YEW98Q3"
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore =firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase
