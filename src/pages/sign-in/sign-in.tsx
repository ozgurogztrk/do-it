import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "src/utils/firebase-config";
import { ListsContext } from "src/contexts/lists-context";
import PageContainer from "src/components/page-container";
import Button from "src/components/button";
import InputEmail from "src/components/input-email";
import InputPassword from "src/components/input-password";
import styles from "./sign-in.module.scss";

export default function SignIn() {
  // Get lists and userDocRef variable from lists context
  const { fetchListCollection } = useContext(ListsContext);

  // Create reactive email and password variables to use them in the InputEmail and InputPassword components
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Create a navigate variable using useNavigate hook to navigate between pages
  const navigate = useNavigate();

  // The function of signing in
  const handleSignIn = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.error(error.code, error.message));

    await fetchListCollection();
  };

  return (
    <div className={styles["sign-in"]}>
      <PageContainer>
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

          <NavLink to="/sign-up">
            <p>Don't have an account? Click here to Sign Up</p>
          </NavLink>

          <Button type="submit">Sign In</Button>
        </form>
      </PageContainer>
    </div>
  );
}
