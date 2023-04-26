import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "src/features/animated-routes";
import ListsContextProvider from "../../contexts/lists-context";
import DefaultLayout from "src/layouts/default-layout";
import Button from "../button/button";

export default function App() {
  return (
    <BrowserRouter>
      <ListsContextProvider>
        <DefaultLayout />
        <AnimatedRoutes />
      </ListsContextProvider>
    </BrowserRouter>
  );
}
