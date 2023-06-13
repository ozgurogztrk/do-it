import { createContext, useEffect, useState } from "react";
import { db, auth } from "src/utils/firebase-config";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";

// Create a lists context
const ListsContext = createContext({} as any);

// Create a provider component for lists context
type ListsContextProviderProps = {
  children: React.ReactNode;
};

const ListsContextProvider = ({ children }: ListsContextProviderProps) => {
  // Create reactive lists, userDocRef and initialDataFetched variables
  const [lists, setLists] = useState<any>([]);
  const [userDocRef, setUserDocRef] = useState<any>(null);
  const [initialDataFetched, setInitialDataFetched] = useState(false);

  // Fetch lists from Cloud Firestore and update the lists variable using setLists
  const fetchListCollection = async () => {
    const userId = auth.currentUser?.uid;

    if (userId) {
      const collectionRef = collection(db, "list-collection");
      const docRef = doc(collectionRef, userId);
      const docSnapshot = await getDoc(docRef);
      setUserDocRef(docRef);

      if (docSnapshot.exists()) {
        const unsubscribe = onSnapshot(docRef, (docSnapshot: any) => {
          setLists(docSnapshot.data().lists);
          setInitialDataFetched(true);
        });
        return unsubscribe;
      } else {
        setLists([]);
        createNewDocument(userId);
        setInitialDataFetched(true);
      }
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
            todos: [
              {
                id: 0,
                title: "Click this to edit!",
                isFavorite: false,
                isCompleted: false,
              },
            ],
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
  }, [initialDataFetched]);

  return (
    <ListsContext.Provider
      value={{ lists, userDocRef, setInitialDataFetched, fetchListCollection }}
    >
      {children}
    </ListsContext.Provider>
  );
};

export { ListsContextProvider, ListsContext };
