import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
        apiKey: "AIzaSyDknmmuuvKvvaRK9zD9rE-Nimgs13derHw",
        authDomain: "book-santa-app-7fbb1.firebaseapp.com",
        databaseURL: "https://book-santa-app-7fbb1.firebaseio.com",
        projectId: "book-santa-app-7fbb1",
        storageBucket: "book-santa-app-7fbb1.appspot.com",
        messagingSenderId: "158070434662",
        appId: "1:158070434662:web:7b39d982b61c35e79f36a7"
        
      };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
