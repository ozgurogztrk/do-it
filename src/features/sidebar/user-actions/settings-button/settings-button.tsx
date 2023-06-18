import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { SidebarContext } from "src/contexts/sidebar-context";
import { IconButton } from "src/components/icon-button";

const SettingsButton = () => {
  // Get toggleSidebar variable from sidebar context
  const { toggleSidebar } = useContext(SidebarContext);

  // Create a navigate variable using useNavigate hook to navigate between pages
  const navigate = useNavigate();

  // Check if the user is on mobile screen
  const isMobileScreen = useMediaQuery({ query: "(max-width: 481px)" });

  // Function to navigate the user to the settings page
  const navigateToSettings = () => {
    navigate("/settings");

    {
      isMobileScreen
        ? setTimeout(() => {
            toggleSidebar();
          }, 150)
        : null;
    }
  };

  return <IconButton icon="lucide:settings" onClick={navigateToSettings} />;
};

export default SettingsButton;
