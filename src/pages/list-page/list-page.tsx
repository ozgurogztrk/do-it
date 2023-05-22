import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ListsContext } from "src/contexts/lists-context";
import AnimatedPageContainer from "src/components/page-container";
import Todos from "src/features/todos";
import styles from "./list-page.module.scss";

export default function ListPage() {
  // Get the value of id parameter from '/list-page/:id' URL
  const { id }: any = useParams();

  // Get lists variable from lists context
  const { lists } = useContext(ListsContext);

  return (
    <AnimatedPageContainer>
      <div className={styles["list-page__header"]}>
        <div id="sidebar-toggle"></div>
        <h1>{lists[id]?.title}</h1>
      </div>

      <Todos />
    </AnimatedPageContainer>
  );
}
