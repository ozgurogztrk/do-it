import PageContainer from "src/components/page-container";
import FavoriteTodos from "src/features/todos/favorite-todos";

export default function Favorites() {
  return (
    <PageContainer>
      <h1>Favorites</h1>
      <FavoriteTodos />
    </PageContainer>
  );
}
