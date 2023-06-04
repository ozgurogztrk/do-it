type TodoProps = {
  id?: number;
  todo: {
    id: number;
    title: string;
    isFavorite: boolean;
    isCompleted: boolean;
  };
  setIsDetailsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedTodo: React.Dispatch<React.SetStateAction<undefined>>;
  setTodoId?: React.Dispatch<React.SetStateAction<number>>;
};
