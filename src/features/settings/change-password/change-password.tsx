import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut, updatePassword } from "firebase/auth";
import { auth } from "src/utils/firebase-config";
import BaseCard from "src/components/base-card";
import InputPassword from "src/components/input-password";
import Button from "src/components/button";
import styles from "./change-password.module.scss";

export default function ChangePassword() {
  // Create a reactive password variable to use it in the InputPassword component
  const [password, setPassword] = useState("");

  // Create a navigate variable using useNavigate hook to navigate between pages
  const navigate = useNavigate();

  // Function to change user's password
  const changePassword = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    updatePassword(auth.currentUser!, password)
      .then(() => {
        signOut(auth)
          .then(() => {
            navigate("/sign-in");
          })
          .catch((error) => {
            console.error(error.code, error.message);
          });
      })
      .catch((error) => {
        if (error.code == "auth/requires-recent-login") {
          alert("You must sign in again before changing your password!");
          navigate("/sign-in");
        }
      });
  };
  return (
    <BaseCard>
      <form className={styles["change-password"]} onSubmit={changePassword}>
        <p className={styles["change-password__title"]}>Change Password</p>

        <InputPassword
          placeholder="Enter A New Password..."
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
        <div className={styles["change-password__button"]}>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </BaseCard>
  );
}
