import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDQwCBgFV92n2I5zQn_XqEgodihmPjCpQo",
  authDomain: "microproyecto2-63461.firebaseapp.com",
  projectId: "microproyecto2-63461",
  storageBucket: "microproyecto2-63461.appspot.com",
  messagingSenderId: "437505444884",
  appId: "1:437505444884:web:ecfc75da69a77d05156b01",
  measurementId: "G-WJZDG5D6SF"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth(app); 
export const db=getFirestore(app); 
export const storage=getStorage(app) 

export const googleProvider=new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account"})