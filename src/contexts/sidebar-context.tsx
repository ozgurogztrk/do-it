import { createContext, useState } from "react";
import { useMediaQuery } from "react-responsive";

const SidebarContext = createContext({} as any);

type SidebarContextProviderProps = {
  children: React.ReactNode;
};

const SidebarContextProvider = ({ children }: SidebarContextProviderProps) => {
  // Check if the user is on mobile screen
  const isMobileScreen = useMediaQuery({ query: "(max-width: 481px)" });

  // Create reactive isSidebarOpen variable
  const [isSidebarOpen, setIsSidebarOpen] = useState(
    isMobileScreen ? false : true
  );

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContextProvider, SidebarContext };
