type ItemTodoProps = {
  id?: number;
  todo: { id: number; title: string; isFavorite: boolean };
  setDetailsState: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedTodoState: React.Dispatch<React.SetStateAction<undefined>>;
};
