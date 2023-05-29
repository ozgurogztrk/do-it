import { createContext, useEffect, useState } from "react";
import { db, auth } from "src/utils/firebase-config";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";

// Create a lists context
export const ListsContext = createContext({} as any);

// Create a provider component for lists context
export default function ListsContextProvider({ children }: any) {
  // Create a reactive variable for lists
  const [lists, setLists] = useState<any>([]);
  const [userDocRef, setUserDocRef] = useState<any>(null);

  // Fetch lists from Cloud Firestore and update the lists variable using setLists
  const fetchListCollection = async () => {
    const userId = auth.currentUser?.uid;

    if (userId) {
      const collectionRef = collection(db, "list-collection");
      const docRef = doc(collectionRef, userId);
      setUserDocRef(docRef);

      const unsubscribe = onSnapshot(docRef, (docSnapshot: any) => {
        if (docSnapshot.exists()) {
          setLists(docSnapshot.data().lists);
        } else {
          setLists([]);
          createNewDocument(userId);
        }
      });

      return unsubscribe;
    }
  };

  // Create a new document for the user
  const createNewDocument = async (userId: string) => {
    try {
      const collectionRef = collection(db, "list-collection");
      const docRef = doc(collectionRef, userId);
      setUserDocRef(docRef);

      await setDoc(docRef, {
        lists: [
          {
            id: 0,
            title: "My List",
            todos: [{ id: 0, title: "Click This To Edit!", isFavorite: false }],
          },
        ],
      });
    } catch (error) {
      console.error("Error creating new document: ", error);
    }
  };

  // Fetch the initial lists on component mount
  useEffect(() => {
    let unsubscribe: any = null;

    const fetchData = async () => {
      unsubscribe = await fetchListCollection();
    };

    fetchData();

    // Clean up the listener when the component is unmounted
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  return (
    <ListsContext.Provider value={{ lists, userDocRef, fetchListCollection }}>
      {children}
    </ListsContext.Provider>
  );
}
