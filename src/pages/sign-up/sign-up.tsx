import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "src/utils/firebase-config";
import Button from "src/components/button";
import InputEmail from "src/components/input-email";
import InputPassword from "src/components/input-password";
import styles from "./sign-up.module.scss";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        navigate("/sign-in");
      })
      .catch((error) => {
        console.error(error.code, error.message);
      });
  };

  return (
    <main className={styles["sign-up"]}>
      <h1>Sign Up</h1>

      <form onSubmit={handleSignUp}>
        <InputEmail onChange={(event) => setEmail(event.target.value)} />
        <InputPassword onChange={(event) => setPassword(event.target.value)} />

        <p>Have an account? Click here to Sign In</p>

        <Button type="submit">Sign Up</Button>
      </form>
    </main>
  );
}
