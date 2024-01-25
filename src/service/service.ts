
import {  addDoc, collection, endAt, getDocs, orderBy, query, startAt, where } from "firebase/firestore";
import { db } from "./firebase.config";

export enum EFirebaseCollections {

    BLACKLIST = 'blacklist',
}

// export async function addDataToCollection(data: IInput) {
//     try {
//       const collectionRef = collection(db, EFirebaseCollections.TASKS);
//        await addDoc(collectionRef, data);
//     } catch (error) {
//       console.error("Error adding document:", error);
//     }
//   }

export async function fetchCollectionData() {
    try {
      const collectionRef = collection(db, EFirebaseCollections.BLACKLIST);
      const querySnapshot = await getDocs(collectionRef);
      const data = querySnapshot.docs.map((doc) => doc.data());
      console.log(JSON.stringify(data));
      return data;
    } catch (error) {
      console.error("Error fetching collection data:", error);
      return [];
    }
  }

export async function queryCollectionData(column: string, columnValue: string) {
  try {
    const collectionRef = collection(db, EFirebaseCollections.BLACKLIST);

    const q = query(collectionRef, where(column, "==", columnValue));

    const querySnapshot = await getDocs(q);

    const data = querySnapshot.docs.map((doc) => doc.data());
      console.log(JSON.stringify(data));
    return data;
  } catch (error) {
    console.error("Error querying collection data:", error);
    return [];
  }
}

export async function getBlacklistData( name?: string, address?: string) {
  try {
    const collectionRef = collection(db, EFirebaseCollections.BLACKLIST);
    if(name){
      let q = undefined
      if (/\s/.test(name)) {
        q = query(collectionRef, where('name', "==", name));
      } else {
         q = query(
          collectionRef,
          where('name', '>=', name),
          where('name', '<=', name + '\uf8ff'),
          orderBy('name'),
          startAt(name),
          endAt(name + '\uf8ff')
        );
      }

      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => doc.data());
      return data;
    }

    if(address) {
      let q = query(collectionRef, where('address', "==", address));
      const querySnapshot = await getDocs(q);
      if(querySnapshot.empty) {
        q = query(collectionRef, 
          where('name', '>=', name),
          where('name', '<=', name + '\uf8ff')
        );
      }

      if(querySnapshot.empty) return undefined
      const data = querySnapshot.docs.map((doc) => doc.data());
      return data;
    }


    return undefined
  } catch (error) {
    console.error("Error querying collection data:", error);
    return [];
  }
}

