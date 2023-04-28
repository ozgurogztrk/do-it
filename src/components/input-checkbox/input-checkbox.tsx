import { Icon } from "@iconify/react";
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
    <label className={styles.wrapper}>
      <input
        type="checkbox"
        name={name}
        defaultChecked={defaultChecked}
        onChange={handleChange}
      />
      {checkedState ? <Icon icon={"lucide:check"} /> : null}
      <span className={styles.checkbox} />
      {children}
    </label>
  );
}
