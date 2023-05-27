import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "src/utils/firebase-config";
import PageContainer from "src/components/page-container";
import Button from "src/components/button";
import InputEmail from "src/components/input-email";
import InputPassword from "src/components/input-password";
import styles from "./sign-up.module.scss";

export default function SignUp() {
  // Create reactive email and password variables to use them in the InputEmail and InputPassword components
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Create a navigate variable using useNavigate hook to navigate between pages
  const navigate = useNavigate();

  // The function of signing up
  const handleSignUp = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/sign-in");
      })
      .catch((error) => {
        console.error(error.code, error.message);
      });
  };

  return (
    <div className={styles["sign-up"]}>
      <PageContainer>
        <h1>Sign Up</h1>

        <form onSubmit={handleSignUp}>
          <InputEmail
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          <InputPassword
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />

          <p>Have an account? Click here to Sign In</p>

          <Button type="submit">Sign Up</Button>
        </form>
      </PageContainer>
    </div>
  );
}
