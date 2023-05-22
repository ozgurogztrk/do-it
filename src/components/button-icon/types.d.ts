type ButtonIconProps = {
  type?: "button" | "submit" | "reset";
  icon?: string;
  isAbsolute?: boolean;
  onClick?: React.MouseEventHandler<HTMLOrSVGElement>;
};
