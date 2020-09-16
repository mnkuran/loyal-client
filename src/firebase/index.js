import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDyQfcwJW6I06tif06sEsrq-TAUxW8--9c",
  authDomain: "kuran-loyal.firebaseapp.com",
  databaseURL: "https://kuran-loyal.firebaseio.com",
  projectId: "kuran-loyal",
  storageBucket: "kuran-loyal.appspot.com",
  messagingSenderId: "1076892292545",
  appId: "1:1076892292545:web:645ffd66f4902154914b40",
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export {
    auth,
    db
};
