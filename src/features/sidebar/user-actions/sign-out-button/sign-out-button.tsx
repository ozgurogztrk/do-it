import { signOut } from "firebase/auth";
import { auth } from "src/utils/firebase-config";
import { IconButton } from "src/components/icon-button";

const SignOutButton = () => {
  // Function to signing out the user
  const handleSignOut = () => {
    signOut(auth).catch((error) => {
      console.error(error.code, error.message);
    });
  };

  return <IconButton icon="lucide:log-out" onClick={handleSignOut} />;
};

export default SignOutButton;
