import Favorites from "src/pages/favorites";
import Index from "src/pages";
import List from "src/pages/id";

export const routes = [
  { id: 0, path: "/", element: <Index /> },
  { id: 1, path: "/favorites", element: <Favorites /> },
  { id: 2, path: "/:id", element: <List /> },
];
