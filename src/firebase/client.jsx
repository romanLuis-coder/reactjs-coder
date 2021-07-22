import firebase from "firebase/app"; 
import "@firebase/firestore";

const firebaseConfig = firebase.initializeApp( {
    apiKey: "AIzaSyCPWUOUrUOr9LdQ1LqrimS6GHvkwd0r50M",
    authDomain: "heavy-drinking.firebaseapp.com",
    projectId: "heavy-drinking",
    storageBucket: "heavy-drinking.appspot.com",
    messagingSenderId: "237502377764",
    appId: "1:237502377764:web:ace09044b789f653704db1"
  });



export const getFirebase = () => {
 return  firebaseConfig 
};

export const getFirestore = () => {
  return firebase.firestore(firebaseConfig);
}; 



