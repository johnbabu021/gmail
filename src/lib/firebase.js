import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCVVNL3CbPSt3vUNJ5GoZdPm2I7H27pzhY",
    authDomain: "fir-122f6.firebaseapp.com",
    projectId: "fir-122f6",
    storageBucket: "fir-122f6.appspot.com",
    messagingSenderId: "1056507368816",
    appId: "1:1056507368816:web:fd76bc973d86d3e286abb5",
    measurementId: "G-3RXGTSG99Y"
};

const Firebase = firebase.initializeApp(firebaseConfig)
const db = Firebase.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
export { db, auth, provider }