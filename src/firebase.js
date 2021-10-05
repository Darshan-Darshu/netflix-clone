import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmdJf9udvVOa0TnFL03ceoNPQNUYJePBY",
  authDomain: "netflix-clone-df5d9.firebaseapp.com",
  projectId: "netflix-clone-df5d9",
  storageBucket: "netflix-clone-df5d9.appspot.com",
  messagingSenderId: "901964187870",
  appId: "1:901964187870:web:6bd1eff96a4ce084d6da4f",
  measurementId: "G-K06S722EGP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
