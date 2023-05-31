import { useNavigate } from "react-router-dom";
import ButtonIcon from "src/components/button-icon/button-icon";

export default function SettingsButton() {
  const navigate = useNavigate();

  const navigateToSettings = () => {
    navigate("/settings");
  };

  return <ButtonIcon icon="lucide:settings" onClick={navigateToSettings} />;
}
