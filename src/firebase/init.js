import firebase from 'firebase'
import 'firebase/firestore'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBw-ZPue6TihTZrMortVKKvdjkQJE09xjI",
    authDomain: "decision-together.firebaseapp.com",
    databaseURL: "https://decision-together.firebaseio.com",
    projectId: "decision-together",
    storageBucket: "decision-together.appspot.com",
    messagingSenderId: "1068234888210"
  };
  const firebaseApp = firebase.initializeApp(config);

  // export firestore database
  export default firebaseApp.firestore()
