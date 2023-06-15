import styles from "./button.module.scss";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  variant?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};

const Button = ({
  type = "button",
  variant = "primary",
  onClick,
  children,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
