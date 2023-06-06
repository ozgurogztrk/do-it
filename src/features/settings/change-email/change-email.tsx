import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut, updateEmail } from "firebase/auth";
import { auth } from "src/utils/firebase-config";
import { BaseCard } from "src/components/base-card";
import { InputEmail } from "src/components/input-email";
import { Button } from "src/components/button";
import styles from "./change-email.module.scss";

const ChangeEmail = () => {
  // Create a reactive email variable to use it in the InputEmail component
  const [email, setEmail] = useState(auth.currentUser!.email);

  // Create a navigate variable using useNavigate hook to navigate between pages
  const navigate = useNavigate();

  // Function to change user's e-mail account
  const changeEmail = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (email != auth.currentUser?.email) {
      updateEmail(auth.currentUser!, email!)
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
            alert("You must sign in again before changing your E-Mail!");
            navigate("/sign-in");
          }
        });
    }
  };
  return (
    <BaseCard>
      <form className={styles["change-email"]} onSubmit={changeEmail}>
        <InputEmail
          inputTitle="Change E-Mail"
          placeholder="Enter A New E-Mail..."
          onChange={(event) => setEmail(event.target.value)}
          value={email!}
        />
        <div className={styles["change-email__button"]}>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </BaseCard>
  );
};

export default ChangeEmail;
