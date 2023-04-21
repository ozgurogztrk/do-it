import { Icon } from "@iconify/react";
import styles from "./Todo.module.scss";

type todoItemTypes = {
  todo: String;
};

export default function Todo({ todo }: todoItemTypes) {
  return (
    <div className={styles["todo"]}>
      <p> {todo}</p>

      <button type="button">
        <Icon icon={"lucide:heart"} />
      </button>
    </div>
  );
}
