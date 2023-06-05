import { Icon } from "@iconify/react";
import styles from "./input-checkbox.module.scss";

export default function InputCheckbox({
  inputTitle = "",
  checked,
  onChange,
}: InputCheckboxProps) {
  return (
    <label className={styles.wrapper}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      {checked ? <Icon icon={"lucide:check"} /> : null}
      <span className={styles.checkbox} />
      <span>
        <h3>{inputTitle}</h3>
      </span>
    </label>
  );
}
