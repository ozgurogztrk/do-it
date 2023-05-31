import { signOut } from "firebase/auth";
import { auth } from "src/utils/firebase-config";
import ButtonIcon from "src/components/button-icon/button-icon";

export default function SignOutButton() {
  const handleSignOut = () => {
    signOut(auth).catch((error) => {
      console.error(error.code, error.message);
    });
  };

  return <ButtonIcon icon="lucide:log-out" onClick={handleSignOut} />;
}
