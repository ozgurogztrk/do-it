import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "src/utils/firebase-config";
import PageContainer from "src/components/page-container";
import Button from "src/components/button";
import InputEmail from "src/components/input-email";
import InputPassword from "src/components/input-password";
import styles from "./sign-in.module.scss";

export default function SignIn() {
  // Create reactive email and password variables to use them in the InputEmail and InputPassword components
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Create a navigate variable using useNavigate hook to navigate between pages
  const navigate = useNavigate();

  // The function of signing in
  const handleSignIn = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/");
      })
      .catch((error) => console.error(error.code, error.message));
  };

  return (
    <div className={styles["sign-in"]}>
      <PageContainer>
        <h1>Sign In</h1>

        <form onSubmit={handleSignIn}>
          <InputEmail
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          <InputPassword
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />

          <p>Don't have an account? Click here to Sign Up</p>

          <Button type="submit">Sign In</Button>
        </form>
      </PageContainer>
    </div>
  );
}
