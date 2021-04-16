import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCw_nFjxtWvJ_mv9BrYljIt-YSNwg6Wk7Q",
  authDomain: "react-app-9336c.firebaseapp.com",
  databaseURL: "https://react-app-9336c-default-rtdb.firebaseio.com",
  projectId: "react-app-9336c",
  storageBucket: "react-app-9336c.appspot.com",
  messagingSenderId: "782715162088",
  appId: "1:782715162088:web:2b24e1829504fa1dfba85d",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
