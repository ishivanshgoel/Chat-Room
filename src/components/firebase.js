import firebase from "firebase";
import firebase_cred from "./firebase_cred.json"

const firebaseConfig = JSON.parse(firebase_cred);

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;