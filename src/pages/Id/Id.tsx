import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ListsContext } from "src/contexts/listsContext";
import AnimatedPageContainer from "src/modules/common/components/AnimatedPageContainer";
import Todos from "src/modules/todos/components/Todos";

export default function List() {
  const { id }: any = useParams();
  const { lists } = useContext(ListsContext);

  return (
    <AnimatedPageContainer>
      <h1>{lists[id]?.title}</h1>

      <Todos />
    </AnimatedPageContainer>
  );
}
