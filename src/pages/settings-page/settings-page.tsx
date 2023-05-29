import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteDoc } from "firebase/firestore";
import { auth } from "src/utils/firebase-config";
import { signOut, updateEmail, updatePassword } from "firebase/auth";
import { ListsContext } from "src/contexts/lists-context";
import PageContainer from "src/components/page-container";
import InputEmail from "src/components/input-email";
import InputPassword from "src/components/input-password";
import Button from "src/components/button";
import Modal from "src/components/modal";
import styles from "./settings-page.module.scss";

export default function SettingsPage() {
  const { userDocRef } = useContext(ListsContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [email, setEmail] = useState(auth.currentUser!.email);
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

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
            alert("You Must Sign In Again Before Changing Your E-Mail!");
            navigate("/sign-in");
          }
        });
    }
  };

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
          alert("You Must Sign In Again Before Changing Your Password!");
          navigate("/sign-in");
        }
      });
  };

  const toggleDeleteAccountModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const deleteAccount = async () => {
    toggleDeleteAccountModal();

    await deleteUserDocument();

    await auth.currentUser
      ?.delete()
      .then(() => {
        navigate("/sign-up");
      })
      .catch((error) => {
        if (error.code == "auth/requires-recent-login") {
          alert("You Must Sign In Again Before Deleting Your Account!");
          navigate("/sign-in");
        }
      });
  };

  // Function to delete the user's document
  const deleteUserDocument = async () => {
    try {
      if (userDocRef) {
        await deleteDoc(userDocRef);
        console.log(
          "User document deleted successfully",
          userDocRef,
          auth.currentUser?.uid
        );
      }
    } catch (error) {
      console.error("Error deleting user document for user", error);
    }
  };
  return (
    <PageContainer>
      <section className={styles["settings-page"]}>
        <div className={styles["settings-page__header"]}>
          <div id="sidebar-toggle"></div>
          <h1>Settings</h1>
        </div>

        <form className={styles["settings-page__panel"]} onSubmit={changeEmail}>
          <p className={styles["settings-page__panel-title"]}>Change E-Mail</p>

          <InputEmail
            placeholder="Enter A New E-Mail..."
            onChange={(event) => setEmail(event.target.value)}
            value={email!}
          />
          <div className={styles["settings-page__panel-button"]}>
            <Button type="submit">Save</Button>
          </div>
        </form>

        <form
          className={styles["settings-page__panel"]}
          onSubmit={changePassword}
        >
          <p className={styles["settings-page__panel-title"]}>
            Change Password
          </p>

          <InputPassword
            placeholder="Enter A New Password..."
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
          <div className={styles["settings-page__panel-button"]}>
            <Button type="submit">Save</Button>
          </div>
        </form>

        <div className={styles["settings-page__panel"]}>
          <p className={styles["settings-page__panel-title"]}>Delete Account</p>

          <div>
            <Button role="danger" onClick={toggleDeleteAccountModal}>
              Delete
            </Button>

            <Modal isModalOpen={isModalOpen}>
              <h1>Confirm Your Action!</h1>
              <p>Are you sure you want to delete your account?</p>

              <div className={styles.modal__buttons}>
                <Button onClick={deleteAccount}>Yes</Button>
                <Button role="secondary" onClick={toggleDeleteAccountModal}>
                  Cancel
                </Button>
              </div>
            </Modal>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
