import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAva_UI9I960fQjNWBUoVpfDCI6P5xPuqw",
  authDomain: "microproyecto2-749ed.firebaseapp.com",
  projectId: "microproyecto2-749ed",
  storageBucket: "microproyecto2-749ed.appspot.com",
  messagingSenderId: "1062998619601",
  appId: "1:1062998619601:web:142478187a695b2e8adcf0",
  measurementId: "G-1ES54ECSVP"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth(app); 
export const db=getFirestore(app); 
export const storage=getStorage(app) 

export const googleProvider=new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account"})