import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateDoc } from "firebase/firestore";
import { ListsContext } from "src/contexts/lists-context";
import PageContainer from "src/components/page-container";
import ButtonIcon from "src/components/button-icon";
import Button from "src/components/button";
import Todos from "src/features/todos";
import Modal from "src/components/modal";
import styles from "./list-page.module.scss";

export default function ListPage() {
  // Get lists variable from lists context
  const { lists, userDocRef } = useContext(ListsContext);

  // Create a reactive variable to check if the modal is open or not
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isDeleteFunctionStarted, setIsDeleteFunctionStarted] = useState(false);

  // Get the value of id parameter from '/list-page/:id' URL
  const { id }: any = useParams();

  // Create a navigate variable using useNavigate hook to navigate between pages
  const navigate = useNavigate();

  // The function of toggling a confirmation modal to list the current todo
  const toggleListModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Function to delete list
  const deleteList = async () => {
    setIsDeleteFunctionStarted(true);
    const updatedLists = [...lists];

    if (id !== -1) {
      updatedLists.splice(id, 1);
      updatedLists.map((list: any) => (list.id = updatedLists.indexOf(list)));
    }
    await updateDoc(userDocRef, {
      lists: updatedLists,
    })
      .then(() => navigate("/overview"))
      .catch((error) => console.error(error.code, error.message));

    toggleListModal();
  };

  // Check if the id exists in the lists array and if it's not, navigate the user to the error page
  useEffect(() => {
    if (!isDeleteFunctionStarted && id && lists.length > 0) {
      const listExists = lists.some((list: any) => list.id === parseInt(id));
      if (!listExists) {
        navigate("*");
      }
    }
  }, [id, lists, navigate]);
  return (
    <PageContainer>
      <div className={styles["list-page-header"]}>
        <div id="sidebar-toggle"></div>

        <h1>{lists[id]?.title}</h1>

        <ButtonIcon icon="lucide:trash-2" onClick={toggleListModal} />

        <Modal isModalOpen={isModalOpen}>
          <h1>Confirm Your Action!</h1>
          <p>Are you sure you want to delete this list?</p>

          <div className={styles.modal__buttons}>
            <Button onClick={deleteList}>Yes</Button>
            <Button role="secondary" onClick={toggleListModal}>
              Cancel
            </Button>
          </div>
        </Modal>
      </div>

      <Todos />
    </PageContainer>
  );
}
