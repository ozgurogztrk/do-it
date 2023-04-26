type ItemTodoDetailsProps = {
  id?: number;
  activeState?: boolean;
  setActiveState: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTodoState: Array;
};
