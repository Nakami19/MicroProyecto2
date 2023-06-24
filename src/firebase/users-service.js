import {
  doc,
  addDoc,
  collection,
  updateDoc,
  getDoc,
  setDoc,
  getDocs,
  query,
  where,
  arrayUnion,
} from "firebase/firestore";
import { db } from "./config";

export const USERS_COLLECTION = "users";

export async function createUser(data) {
  const { uid, ...restData } = data;

  if (uid) {

    return setDoc(doc(db, USERS_COLLECTION, uid), restData);
    
  }
  return addDoc(collection(db, USERS_COLLECTION), restData);
}

export async function updateUser(userId, data) {
  const userRef = doc(db, USERS_COLLECTION, userId);
  return updateDoc(userRef, data);
}

export async function getUserById(userId) {
  const userRef = doc(db, USERS_COLLECTION, userId);
  return getDoc(userRef);
}

export async function getUserProfile(email) {
  const userQuery = query(
    collection(db, USERS_COLLECTION),
    where("email", "==", email)
  );

  const results = await getDocs(userQuery);
  if (results.size > 0) {
    const users = results.docs.map((item) => ({
      ...item.data(),
      id: item.id,
    }));

    return users[0];
  } else{

  return null;}
}

export async function UpdateFavorites(Id, movie) {
  const update= doc(db,'users', Id)
  return await updateDoc(update, {
    favorites: arrayUnion(movie)
  })

}


export async function UpdateReserva(Id, movie) {
  const update= doc(db,'users', Id)

  return await updateDoc(update, {
    reservas: arrayUnion(movie)
  })

}
