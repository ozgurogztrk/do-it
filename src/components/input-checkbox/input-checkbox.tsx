import { Icon } from "@iconify/react";
import styles from "./input-checkbox.module.scss";

type InputCheckboxProps = {
  inputTitle?: string;
  isChecked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const InputCheckbox = ({
  inputTitle = "",
  isChecked,
  onChange,
}: InputCheckboxProps) => {
  return (
    <label className={styles.wrapper}>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      {isChecked ? <Icon icon={"lucide:check"} /> : null}
      <span className={styles.checkbox} />
      <span>
        <h3>{inputTitle}</h3>
      </span>
    </label>
  );
};

export default InputCheckbox;
