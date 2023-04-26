import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ListsContext } from "src/contexts/lists-context";
import AddTodo from "./add-todo";
import ItemTodo from "src/features/todos/item-todo";
import ItemTodoDetails from "src/features/todos/item-todo-details";
import styles from "./todos.module.scss";

export default function Todos() {
  const { id }: any = useParams();

  const { lists } = useContext(ListsContext);

  const [detailsState, setDetailsState] = useState(false);
  const [selectedTodoState, setSelectedTodoState] = useState();

  return (
    <div className={styles.todos}>
      <AddTodo id={id} />

      {lists[id]?.todos?.map((todo: any, index: number) => (
        <ItemTodo
          key={index}
          todo={todo}
          id={id}
          setDetailsState={setDetailsState}
          setSelectedTodoState={setSelectedTodoState}
        />
      ))}

      {detailsState ? (
        <ItemTodoDetails
          activeState={detailsState}
          setActiveState={setDetailsState}
          selectedTodoState={selectedTodoState}
          id={id}
        />
      ) : null}
    </div>
  );
}
