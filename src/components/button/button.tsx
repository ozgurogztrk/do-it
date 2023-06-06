import styles from "./button.module.scss";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  role?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};

const Button = ({
  type = "button",
  role = "primary",
  onClick,
  children,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[role]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
