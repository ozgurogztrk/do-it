type AccordionProps = {
  title: string;
  children: ReactNode;
  isAccordionOpen: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};
