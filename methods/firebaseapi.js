// database/firebaseDb.js
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
const firebaseConfig = {
	apiKey: "AIzaSyCUu5phV2xu9G2vpEvX5jt-bS1fnfd2QP8",
	authDomain: "cruz-214918.firebaseapp.com",
	databaseURL: "https://cruz-214918.firebaseio.com",
	projectId: "cruz-214918",
	storageBucket: "cruz-214918.appspot.com",
	messagingSenderId: "796844613532",
	appId: "1:796844613532:web:88b93fcbbff5a7ac5ab259"
  };
firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;





