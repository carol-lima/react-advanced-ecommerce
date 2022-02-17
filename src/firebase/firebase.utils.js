import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCh34-pvphcAnij87wQtDx9DTtrMH_BKaQ",
  authDomain: "crwn-db-1a863.firebaseapp.com",
  projectId: "crwn-db-1a863",
  storageBucket: "crwn-db-1a863.appspot.com",
  messagingSenderId: "1064313636170",
  appId: "1:1064313636170:web:0fa2d2b2bdaf89f468edb3"
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);