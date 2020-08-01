import firebase from 'firebase';
const firebaseConfig = {
    //Enter firebase details
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;