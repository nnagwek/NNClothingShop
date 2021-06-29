import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCDE4Ikv6AVLp2iXf8cG7ErO40u8k56tOE",
  authDomain: "nnclothingstore-db.firebaseapp.com",
  projectId: "nnclothingstore-db",
  storageBucket: "nnclothingstore-db.appspot.com",
  messagingSenderId: "476411655347",
  appId: "1:476411655347:web:d448e8b64022aedcf9ecc6",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
