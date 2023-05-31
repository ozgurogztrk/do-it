import { useNavigate } from "react-router-dom";
import ButtonIcon from "src/components/button-icon/button-icon";

export default function SwitchThemeButton() {
  const navigate = useNavigate();

  const switchTheme = () => {
    navigate("/");
  };

  return <ButtonIcon icon="lucide:moon-star" onClick={switchTheme} />;
}
