import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ListContext } from "src/contexts/listContext";
import AnimatedPageContainer from "src/modules/common/components/AnimatedPageContainer";
import Todos from "src/modules/todos/components/Todos";

export default function List() {
  const { id }: any = useParams();
  const { list } = useContext(ListContext);

  return (
    <AnimatedPageContainer>
      <h1>{list[id]?.title}</h1>

      <Todos listId={id} />
    </AnimatedPageContainer>
  );
}
