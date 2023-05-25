type TodoDetailsProps = {
  id?: number;
  activeState?: boolean;
  setIsDetailsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTodo: Array;
};
