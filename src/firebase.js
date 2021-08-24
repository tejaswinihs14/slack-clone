import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7JNH4PMxxYHRk5PHHLWgd-2NSeegjpbE",
  authDomain: "slack-clone-2d2a8.firebaseapp.com",
  projectId: "slack-clone-2d2a8",
  storageBucket: "slack-clone-2d2a8.appspot.com",
  messagingSenderId: "292978985297",
  appId: "1:292978985297:web:5d20eeea7ccaaec459ab70",
  measurementId: "G-G8SFB3RJSX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
