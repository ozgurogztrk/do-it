type ButtonProps = {
  type?: "button" | "submit" | "reset";
  role?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
};
