import Favorites from "src/pages/Favorites";
import Home from "../pages";
import List from "../pages/Id";

export const routes = [
  { id: 0, path: "/", element: <Home /> },
  { id: 1, path: "/favorites", element: <Favorites /> },
  { id: 2, path: "/:id", element: <List /> },
];
