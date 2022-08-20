// import firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBGAwPxo17qQcpq4PwYTPdLTcZVeyrn400",
    authDomain: "credits-7c0c5.firebaseapp.com",
    projectId: "credits-7c0c5",
    storageBucket: "credits-7c0c5.appspot.com",
    messagingSenderId: "389158992334",
    appId: "1:389158992334:web:01d394cca65801db95139f"
})

const db = firebaseApp.firestore()

const storage=getStorage(firebaseApp);
export { db,storage};