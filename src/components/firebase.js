import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

// firebase credentials
const firebaseConfig = require('./firebase_cred.json')

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;