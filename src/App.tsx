import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "src/modules/common/components/AnimatedRoutes";
import ListContextProvider from "./contexts/listContext";
import DefaultLayout from "src/layouts/DefaultLayout";

export default function App() {
  return (
    <BrowserRouter>
      <ListContextProvider>
        <DefaultLayout />
        <AnimatedRoutes />
      </ListContextProvider>
    </BrowserRouter>
  );
}
