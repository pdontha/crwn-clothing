import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';

const config = {
        apiKey: "AIzaSyBaLwLBJA6uGmQi46kb5YVRP1rCwrtXbvI",
        authDomain: "crwn-db-7d4b5.firebaseapp.com",
        databaseURL: "https://crwn-db-7d4b5.firebaseio.com",
        projectId: "crwn-db-7d4b5",
        storageBucket: "crwn-db-7d4b5.appspot.com",
        messagingSenderId: "903563676966",
        appId: "1:903563676966:web:e2f5c461cd98387cdb05e7",
        measurementId: "G-KV74MQ4NGL"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.storage();


const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;




