import { createContext, useState } from "react";

export const ListContext = createContext({} as any);

export default function ListContextProvider({ children }: any) {
  const [list, setList] = useState([
    { id: 0, title: "List 1", todos: ["Go to mall", "Dentist appointment"] },
    { id: 1, title: "List 2", todos: ["Make amogus memes", "Sleep well"] },
  ]);

  return (
    <ListContext.Provider value={{ list, setList }}>
      {children}
    </ListContext.Provider>
  );
}
