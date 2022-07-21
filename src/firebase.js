import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA_48c1syeOagQSeCU0lrqVzzXW7SWPLjo",
  authDomain: "tinder-firebase-d0ea8.firebaseapp.com",
  projectId: "tinder-firebase-d0ea8",
  storageBucket: "tinder-firebase-d0ea8.appspot.com",
  messagingSenderId: "702960015963",
  appId: "1:702960015963:web:55a215d21f427844f2fd7e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db