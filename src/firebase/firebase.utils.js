import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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


export const createUserProfileDocument = async(userAuth, additionalData) => {
        if(!userAuth) return;
        
        const userRef = firestore.doc(`users/${userAuth.uid}`);
        
        const snapShot = await userRef.get();

        if(!snapShot.exists){

                const {displayName, email} = userAuth;
                const createdAt = new Date();

                try{
                        await userRef.set({
                                displayName,
                                email,
                                createdAt,
                                ...additionalData
                        })


                } catch(error){

                        console.log('error creating user', error.message);

                }

        }

        return userRef;
     }
     


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();



const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;




