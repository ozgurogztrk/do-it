import { useContext } from "react";
import { ListsContext } from "src/contexts/listsContext";
import AnimatedPageContainer from "src/modules/common/components/AnimatedPageContainer";
import FavoriteTodos from "src/modules/todos/components/FavoriteTodos";

export default function List() {
  const { lists } = useContext(ListsContext);

  return (
    <AnimatedPageContainer>
      <h1>Favorites</h1>

      <FavoriteTodos />
    </AnimatedPageContainer>
  );
}
