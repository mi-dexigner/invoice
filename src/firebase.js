import firebase from "firebase/app";
import "firebase/storage";
import "firebase/auth";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDRUOPWUmgXh_nSNoYpPIG9Q1SoWe540LU",
    authDomain: "invoice-7a911.firebaseapp.com",
    projectId: "invoice-7a911",
    storageBucket: "invoice-7a911.appspot.com",
    messagingSenderId: "652141239058",
    appId: "1:652141239058:web:28593562d55b9b1f3b71cb"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); 
const storage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { auth, provider,storage,timestamp };
export default db;