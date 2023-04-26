import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ListsContext } from "src/contexts/lists-context";
import AnimatedPageContainer from "src/components/page-container";
import Todos from "src/features/todos";

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
