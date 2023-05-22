import { useNavigate } from "react-router-dom";
import ButtonIcon from "src/components/button-icon/button-icon";
import styles from "./settings.module.scss";

export default function Settings() {
  const navigate = useNavigate();

  const toSettings = () => {
    navigate("/");
  };

  return <ButtonIcon icon="lucide:settings" onClick={toSettings} />;
}
