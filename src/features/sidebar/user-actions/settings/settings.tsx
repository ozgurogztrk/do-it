import { useNavigate } from "react-router-dom";
import ButtonIcon from "src/components/button-icon/button-icon";

export default function Settings() {
  const navigate = useNavigate();

  const toSettings = () => {
    navigate("/settings");
  };

  return <ButtonIcon icon="lucide:settings" onClick={toSettings} />;
}
