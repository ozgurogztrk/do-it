import { useContext } from "react";
import { ListsContext } from "src/contexts/lists-context";
import PageContainer from "src/components/page-container";
import FavoriteTodos from "src/features/todos/favorite-todos";

export default function Favorites() {
  const { lists } = useContext(ListsContext);

  return (
    <PageContainer>
      <h1>Favorites</h1>
      <FavoriteTodos />
    </PageContainer>
  );
}
