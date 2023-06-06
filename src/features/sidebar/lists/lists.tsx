import { useContext, useState } from "react";
import { ListsContext } from "src/contexts/lists-context";
import { Accordion } from "src/components/accordion";
import { List } from "./list";
import { AddList } from "./add-list";
import styles from "./lists.module.scss";

type ListsProps = {
  sidebarState?: boolean;
};

const lists = ({ sidebarState = false }: ListsProps) => {
  // Get lists variable from lists context
  const { lists } = useContext(ListsContext);

  // Create reactive isAccordionOpen variable for accordion
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);

  // Function to toggle accordion
  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };
  return (
    <section className={sidebarState ? styles.lists : styles.hidden}>
      <Accordion
        isAccordionOpen={isAccordionOpen}
        title="Lists"
        onClick={toggleAccordion}
      >
        <div className={styles.lists__content}>
          {lists.map(({ id, title }: { id: string; title: string }) => (
            <List key={id} id={id} title={title} />
          ))}
        </div>

        <AddList />
      </Accordion>
    </section>
  );
};

export default lists;
