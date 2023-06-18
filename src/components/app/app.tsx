import { BrowserRouter } from "react-router-dom";
import { AnimatedRoutes } from "src/features/animated-routes";
import { ListsContextProvider } from "src/contexts/lists-context";
import { AuthContextProvider } from "src/contexts/auth-context";
import { ThemeContextProvider } from "src/contexts/theme-context";
import { SidebarContextProvider } from "src/contexts/sidebar-context";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <AuthContextProvider>
          <ListsContextProvider>
            <SidebarContextProvider>
              <AnimatedRoutes />
            </SidebarContextProvider>
          </ListsContextProvider>
        </AuthContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  );
};

export default App;
