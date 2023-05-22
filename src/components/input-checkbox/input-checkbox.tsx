import { Icon } from "@iconify/react";
import { useState } from "react";
import styles from "./input-checkbox.module.scss";

export default function InputCheckbox({
  checked,
  onChange,
  children,
}: InputCheckboxProps) {
  return (
    <label className={styles.wrapper}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      {checked ? <Icon icon={"lucide:check"} /> : null}
      <span className={styles.checkbox} />
      {children}
    </label>
  );
}
