import { BrowserRouter } from "react-router-dom";
import { AnimatedRoutes } from "src/features/animated-routes";
import { ListsContextProvider } from "src/contexts/lists-context";
import { AuthContextProvider } from "src/contexts/auth-context";
import { ThemeContextProvider } from "src/contexts/theme-context";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <AuthContextProvider>
          <ListsContextProvider>
            <AnimatedRoutes />
          </ListsContextProvider>
        </AuthContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  );
};

export default App;
