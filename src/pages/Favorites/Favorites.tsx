import { useContext } from "react";
import { ListContext } from "src/contexts/listContext";
import AnimatedPageContainer from "src/modules/common/components/AnimatedPageContainer";
import Todos from "src/modules/todos/components/Todos";

export default function List() {
  const { list } = useContext(ListContext);

  return (
    <AnimatedPageContainer>
      <h1>Favorites</h1>

      {/* <Todos listId={id} /> */}
    </AnimatedPageContainer>
  );
}
