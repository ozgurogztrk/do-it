import { createContext, useState } from "react";

export const ListsContext = createContext({} as any);

export default function ListsContextProvider({ children }: any) {
  const [lists, setLists] = useState([
    {
      id: 0,
      title: "List 1",
      todos: [
        { title: "Go to mall", isFavorite: true },
        { title: "Dentist appointment", isFavorite: false },
      ],
    },
    {
      id: 1,
      title: "List 2",
      todos: [
        { title: "Make amogus memes", isFavorite: false },
        { title: "Sleep well", isFavorite: true },
      ],
    },
  ]);

  return (
    <ListsContext.Provider value={{ lists, setLists }}>
      {children}
    </ListsContext.Provider>
  );
}
