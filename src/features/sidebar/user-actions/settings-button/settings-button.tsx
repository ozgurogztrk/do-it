import { useNavigate } from "react-router-dom";
import { IconButton } from "src/components/icon-button";

const SettingsButton = () => {
  // Create a navigate variable using useNavigate hook to navigate between pages
  const navigate = useNavigate();

  // Function to navigate the user to the settings page
  const navigateToSettings = () => {
    navigate("/settings");
  };

  return <IconButton icon="lucide:settings" onClick={navigateToSettings} />;
};

export default SettingsButton;
