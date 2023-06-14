import { useContext } from "react";
import { ThemeContext } from "src/contexts/theme-context";
import styles from "./input-password.module.scss";

type InputPasswordProps = {
  inputTitle?: string;
  value?: string;
  placeholder?: string;
  title?: string;
  minLength?: number;
  hasIcon?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const InputPassword = ({
  inputTitle = "",
  value,
  title = "Enter a password with a minimum length of 6 characters",
  placeholder = "Enter Your Password...",
  minLength = 6,
  hasIcon = false,
  onChange,
}: InputPasswordProps) => {
  // Get theme variable from theme context
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles["input-wrapper"]} ${styles[theme]}`}>
      {inputTitle.length > 0 ? <h3>{inputTitle}</h3> : null}

      <input
        type="password"
        className={`${styles["input-password"]} ${
          hasIcon ? styles["with-icon"] : ""
        } ${styles[theme]}`}
        value={value}
        placeholder={placeholder}
        title={title}
        minLength={minLength}
        pattern="[^' ']+"
        onChange={onChange}
        required
      />
    </div>
  );
};

export default InputPassword;
