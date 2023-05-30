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
  setFavoriteTodosId?: React.Dispatch<React.SetStateAction<number>>;
};
