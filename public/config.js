const firebase = require('firebase');
const firebaseConfig = {
    apiKey: "AIzaSyAXNzUOqvU-M4sXmX7qosruCah12hgJj3I",
    authDomain: "tda-kentuckybros.firebaseapp.com",
    projectId: "tda-kentuckybros",
    storageBucket: "tda-kentuckybros.appspot.com",
    messagingSenderId: "326107644322",
    appId: "1:326107644322:web:67d01b0966f5c295fd72fb"
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const User = db.collection("Users");
  module.exports = User;