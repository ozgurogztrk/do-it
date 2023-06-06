import { BrowserRouter } from "react-router-dom";
import { AnimatedRoutes } from "src/features/animated-routes";
import { ListsContextProvider } from "src/contexts/lists-context";
import { AuthContextProvider } from "src/contexts/auth-context";

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ListsContextProvider>
          <AnimatedRoutes />
        </ListsContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
