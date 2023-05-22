import { useNavigate } from "react-router-dom";
import ButtonIcon from "src/components/button-icon/button-icon";
import styles from "./switch-theme.module.scss";

export default function Settings() {
  const navigate = useNavigate();

  const switchTheme = () => {
    navigate("/");
  };

  return <ButtonIcon icon="lucide:moon-star" onClick={switchTheme} />;
}
