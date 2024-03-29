import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "src/utils/firebase-config";
import { ListsContext } from "src/contexts/lists-context";
import { ThemeContext } from "src/contexts/theme-context";
import { BaseCard } from "src/components/base-card";
import { PageContainer } from "src/components/page-container";
import { Button } from "src/components/button";
import { InputEmail } from "src/components/input-email";
import { InputPassword } from "src/components/input-password";
import styles from "./sign-in-card.module.scss";

const SignInCard = () => {
  // Get lists and userDocRef variable from lists context
  const { fetchListCollection } = useContext(ListsContext);

  // Get theme variable from theme context
  const { theme } = useContext(ThemeContext);

  // Create reactive email and password variables to use them in the InputEmail and InputPassword components
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Create reactive errorDecription variable to use it for displaying authorization errors
  const [errorDecription, setErrorDecription] = useState("");

  // Create a navigate variable using useNavigate hook to navigate between pages
  const navigate = useNavigate();

  // The function of signing in
  const handleSignIn = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/user-not-found":
            setErrorDecription("User not found!");
            break;
        }
        switch (error.code) {
          case "auth/wrong-password":
            setErrorDecription("Wrong password!");
            break;
        }
      });

    await fetchListCollection();
  };
  return (
    <PageContainer className={styles.wrapper}>
      <BaseCard className={`${styles["sign-in-card"]} ${styles[theme]}`}>
        <h1>Sign In</h1>

        <form onSubmit={handleSignIn}>
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
            <NavLink to="/sign-up">
              <p>Don't have an account? Click here to Sign Up</p>
            </NavLink>

            {errorDecription.length > 0 ? (
              <p className={styles["sign-in-card__error-description"]}>
                {errorDecription}
              </p>
            ) : null}
          </div>

          <Button type="submit">Sign In</Button>
        </form>
      </BaseCard>
    </PageContainer>
  );
};

export default SignInCard;
