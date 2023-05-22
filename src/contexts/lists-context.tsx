import { createContext, useEffect, useState } from "react";
import { db } from "src/utils/firebase-config";
import { collection, getDocs } from "firebase/firestore";

export const ListsContext = createContext({} as any);

export default function ListsContextProvider({ children }: any) {
  const [lists, setLists] = useState<any>([]);

  const fetchListCollection = async () => {
    await getDocs(collection(db, "list-collection")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        lists: doc.get("lists"),
        id: doc.id,
      }));

      setLists(newData[0].lists);
    });
  };

  useEffect(() => {
    fetchListCollection();
  }, [lists]);

  return (
    <ListsContext.Provider value={{ lists, setLists }}>
      {children}
    </ListsContext.Provider>
  );
}
