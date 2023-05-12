import { Icon } from "@iconify/react";
import { useState } from "react";
import styles from "./input-checkbox.module.scss";

export default function InputCheckbox({
  defaultChecked = false,
  onChange,
  isChecked,
  children,
}: InputCheckboxProps) {
  return (
    <label className={styles.wrapper}>
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
      {isChecked ? <Icon icon={"lucide:check"} /> : null}
      <span className={styles.checkbox} />
      {children}
    </label>
  );
}
