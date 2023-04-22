import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "src/modules/common/components/AnimatedRoutes";
import ListsContextProvider from "./contexts/listsContext";
import DefaultLayout from "src/layouts/DefaultLayout";

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
