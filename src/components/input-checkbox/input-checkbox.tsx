import { useState } from "react";
import styles from "./input-checkbox.module.scss";

export default function InputCheckbox({
  name = "inputCheckbox",
  defaultChecked = false,
  children,
}: InputCheckboxProps) {
  const [checkedState, setCheckedState] = useState(defaultChecked);

  const handleChange = (event: any) => {
    setCheckedState(event.target.checked);
  };

  return (
    <label
      className={
        checkedState
          ? `${styles["wrapper"]} ${styles["active"]}`
          : styles["wrapper"]
      }
    >
      <input
        type="checkbox"
        name={name}
        defaultChecked={defaultChecked}
        onChange={handleChange}
      />
      <span className={styles.checkbox} />
      {children}
    </label>
  );
}
