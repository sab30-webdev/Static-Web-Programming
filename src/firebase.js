import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var conf = {
  apiKey: "AIzaSyCwAhSlTUebAbDbz-4unaaJieTnD1BFMtU",
  authDomain: "pro1-3b1bf.firebaseapp.com",
  projectId: "pro1-3b1bf",
  storageBucket: "pro1-3b1bf.appspot.com",
  messagingSenderId: "676472910396",
  appId: "1:676472910396:web:68c409ff9dd932dd438939",
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(conf)
  : firebase.app();

export const db = firebaseApp.firestore();

export default firebaseApp;
