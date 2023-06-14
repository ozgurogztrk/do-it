import { useContext } from "react";
import { Icon } from "@iconify/react";
import { ThemeContext } from "src/contexts/theme-context";
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
  // Get theme variable from theme context
  const { theme } = useContext(ThemeContext);
  return (
    <label className={`${styles.wrapper} ${styles[theme]}`}>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      {isChecked ? <Icon icon={"lucide:check"} /> : null}
      <span className={`${styles["input-checkbox"]} ${styles[theme]}`} />
      <span>
        <h3>{inputTitle}</h3>
      </span>
    </label>
  );
};

export default InputCheckbox;
