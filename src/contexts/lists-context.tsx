import { createContext, useEffect, useState } from "react";
import { db } from "src/utils/firebase-config";
import { collection, getDocs, onSnapshot, query } from "firebase/firestore";

// Create a lists context
export const ListsContext = createContext({} as any);

// Create a provider component for lists context
export default function ListsContextProvider({ children }: any) {
  // Create a reactive variable for lists
  const [lists, setLists] = useState<any>([]);

  // Fetch lists from cloud firestore and add that data to lists variable using setLists
  const fetchListCollection = () => {
    const collectionRef = collection(db, "list-collection");
    const queryRef: any = query(collectionRef);

    const unsubscribe = onSnapshot(queryRef, (querySnapshot: any) => {
      const newData = querySnapshot.docs.map((doc: any) => ({
        lists: doc.get("lists"),
        id: doc.id,
      }));
      setLists(newData[0].lists);
    });

    return unsubscribe;
  };

  // Check if there are any changes to the lists
  useEffect(() => {
    const unsubscribe = fetchListCollection();

    // Clean up the listener when the component is unmounted
    return () => unsubscribe();
  }, []);

  return (
    <ListsContext.Provider value={{ lists, setLists }}>
      {children}
    </ListsContext.Provider>
  );
}
