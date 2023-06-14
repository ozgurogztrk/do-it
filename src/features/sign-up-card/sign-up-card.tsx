import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "src/utils/firebase-config";
import { ThemeContext } from "src/contexts/theme-context";
import { BaseCard } from "src/components/base-card";
import { PageContainer } from "src/components/page-container";
import { Button } from "src/components/button";
import { InputEmail } from "src/components/input-email";
import { InputPassword } from "src/components/input-password";
import styles from "./sign-up-card.module.scss";

const SignUpCard = () => {
  // Get theme variable from theme context
  const { theme } = useContext(ThemeContext);

  // Create reactive email and password variables to use them in the InputEmail and InputPassword components
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Create reactive errorDecription variable to use it for displaying authorization errors
  const [errorDecription, setErrorDecription] = useState("");

  // Create a navigate variable using useNavigate hook to navigate between pages
  const navigate = useNavigate();

  // The function of signing up
  const handleSignUp = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/sign-in");
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
            setErrorDecription("Account already exists!");
            break;
        }
      });
  };
  return (
    <PageContainer className={styles.wrapper}>
      <BaseCard className={`${styles["sign-up-card"]} ${styles[theme]}`}>
        <h1>Sign Up</h1>

        <form onSubmit={handleSignUp}>
          <InputEmail
            inputTitle="E-Mail"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />

          <InputPassword
            inputTitle="Password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />

          <div>
            <NavLink to="/sign-in">
              <p>Have an account? Click here to Sign In</p>
            </NavLink>

            {errorDecription.length > 0 ? (
              <p className={styles["sign-up-card__error-description"]}>
                {errorDecription}
              </p>
            ) : null}
          </div>
          <Button type="submit">Sign Up</Button>
        </form>
      </BaseCard>
    </PageContainer>
  );
};

export default SignUpCard;
