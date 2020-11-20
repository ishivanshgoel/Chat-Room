import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDVoktrnJaXbaEPColKuHmOV4utzyfm4So",
    authDomain: "slack-clone-42e95.firebaseapp.com",
    databaseURL: "https://slack-clone-42e95.firebaseio.com",
    projectId: "slack-clone-42e95",
    storageBucket: "slack-clone-42e95.appspot.com",
    messagingSenderId: "205281536003",
    appId: "1:205281536003:web:8a5629686c1e74c99c0636",
    measurementId: "G-3N8ZBRC9C4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;