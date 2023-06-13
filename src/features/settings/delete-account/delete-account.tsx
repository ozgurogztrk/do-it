import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteDoc } from "firebase/firestore";
import { auth } from "src/utils/firebase-config";
import { ListsContext } from "src/contexts/lists-context";
import { BaseCard } from "src/components/base-card";
import { Button } from "src/components/button";
import { Modal } from "src/components/modal";
import styles from "./delete-account.module.scss";

const DeleteAccount = () => {
  // Get userDocRef and setInitialDataFetched variables from lists context
  const { userDocRef, setInitialDataFetched } = useContext(ListsContext);

  // Create a reactive variable to check if the modal is open or not
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Create a navigate variable using useNavigate hook to navigate between pages
  const navigate = useNavigate();

  // Function to toggling a confirmation modal before deleting the account
  const toggleDeleteAccountModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Function to delete the user's data
  const deleteUserDocument = async () => {
    if (userDocRef) {
      await deleteDoc(userDocRef);
    }
  };

  // Function to deleting the account if the user confirms it
  const deleteAccount = async () => {
    toggleDeleteAccountModal();

    try {
      deleteUserDocument();
      await auth.currentUser?.delete();
      navigate("/sign-up");
      setInitialDataFetched(false);
    } catch (error: any) {
      if (error.code === "auth/requires-recent-login") {
        alert(
          "Your data has been deleted, but you must re-sign again to delete your account as well!"
        );
        navigate("/sign-in");
      }
    }
  };

  return (
    <BaseCard>
      <div className={styles["delete-account"]}>
        <h3 className={styles["delete-account__title"]}>Delete Account</h3>

        <div>
          <Button role="danger" onClick={toggleDeleteAccountModal}>
            Delete
          </Button>
        </div>

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
    </BaseCard>
  );
};

export default DeleteAccount;
