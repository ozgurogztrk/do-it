import { useContext } from "react";
import { ThemeContext } from "src/contexts/theme-context";
import styles from "./input-text.module.scss";

type InputTextProps = {
  inputTitle?: string;
  title?: string;
  value?: string;
  placeholder?: string;
  hasIcon?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const InputText = ({
  inputTitle = "",
  title,
  value,
  placeholder = "Placeholder...",
  hasIcon = false,
  onChange,
}: InputTextProps) => {
  // Get theme variable from theme context
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles["input-wrapper"]} ${styles[theme]}`}>
      {inputTitle.length > 0 ? <h3>{inputTitle}</h3> : null}

      <input
        type="text"
        className={`${styles["input-text"]} ${
          hasIcon ? styles["with-icon"] : ""
        } ${styles[theme]}`}
        value={value}
        placeholder={placeholder}
        title={title}
        pattern="^[^\s]+(\s[^\s]+)*$"
        onChange={onChange}
        required
      />
    </div>
  );
};

export default InputText;
