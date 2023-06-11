import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"



const firebaseConfig = {
  apiKey: import.meta.env.VITE_BACKEND_URLCONFIG1,
  authDomain: import.meta.env.VITE_BACKEND_URLCONFIG2,
  projectId: import.meta.env.VITE_BACKEND_URLCONFIG3,
  storageBucket: import.meta.env.VITE_BACKEND_URLCONFIG4,
  messagingSenderId: import.meta.env.VITE_BACKEND_URLCONFIG5,
  appId: import.meta.env.VITE_BACKEND_URLCONFIG6,
  measurementId: import.meta.env.VITE_BACKEND_URLCONFIG7
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth(app); 
export const db=getFirestore(app); 
export const storage=getStorage(app) 

export const googleProvider=new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account"})