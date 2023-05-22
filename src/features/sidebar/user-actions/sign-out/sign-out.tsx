import { useNavigate } from "react-router-dom";
import ButtonIcon from "src/components/button-icon/button-icon";
import styles from "./sign-out.module.scss";

export default function SignOut() {
  const navigate = useNavigate();

  const signOut = () => {
    navigate("/sign-in");
  };

  return <ButtonIcon icon="lucide:log-out" onClick={signOut} />;
}
