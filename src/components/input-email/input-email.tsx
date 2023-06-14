import { useContext } from "react";
import { ThemeContext } from "src/contexts/theme-context";
import styles from "./input-email.module.scss";

type InputEmailProps = {
  inputTitle?: string;
  value?: string;
  placeholder?: string;
  title?: string;
  hasIcon?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const InputEmail = ({
  inputTitle = "",
  title,
  value,
  placeholder = "Enter Your E-Mail....",
  hasIcon = false,
  onChange,
}: InputEmailProps) => {
  // Get theme variable from theme context
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles["input-wrapper"]} ${styles[theme]}`}>
      {inputTitle.length > 0 ? <h3>{inputTitle}</h3> : null}

      <input
        type="email"
        className={`${styles["input-email"]} ${
          hasIcon ? styles["with-icon"] : ""
        } ${styles[theme]}`}
        value={value}
        placeholder={placeholder}
        title={title}
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        onChange={onChange}
        required
      />
    </div>
  );
};

export default InputEmail;
