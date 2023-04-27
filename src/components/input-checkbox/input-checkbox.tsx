import { useState } from "react";
import styles from "./input-checkbox.module.scss";

export default function InputCheckbox({
  name = "inputCheckbox",
  defaultChecked = false,
  children,
}: InputCheckboxProps) {
  return (
    <label className={styles.wrapper}>
      <input type="checkbox" name={name} defaultChecked={defaultChecked} />
      <span className={styles.checkbox} />
      {children}
    </label>
  );
}
