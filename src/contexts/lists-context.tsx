import { createContext, useEffect, useState } from "react";
import { db } from "src/utils/firebase-config";
import { collection, getDocs } from "firebase/firestore";

// Create a lists context
export const ListsContext = createContext({} as any);

// Create a provider component for lists context
export default function ListsContextProvider({ children }: any) {
  // Create a reactive variable for lists
  const [lists, setLists] = useState<any>([]);

  // Fetch lists from cloud firestore and add that data to lists variable using setLists
  const fetchListCollection = async () => {
    await getDocs(collection(db, "list-collection")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        lists: doc.get("lists"),
        id: doc.id,
      }));

      setLists(newData[0].lists);
    });
  };

  // Check if there are any changes to the lists
  useEffect(() => {
    fetchListCollection();
  }, [lists]);

  return (
    <ListsContext.Provider value={{ lists, setLists }}>
      {children}
    </ListsContext.Provider>
  );
}
