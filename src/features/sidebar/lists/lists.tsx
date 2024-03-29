import { useContext, useState } from "react";
import { ListsContext } from "src/contexts/lists-context";
import { ThemeContext } from "src/contexts/theme-context";
import { SidebarContext } from "src/contexts/sidebar-context";
import { Accordion } from "src/components/accordion";
import { ListButton } from "./list-button";
import { AddList } from "./add-list";
import styles from "./lists.module.scss";

const Lists = () => {
  // Get lists variable from lists context
  const { lists } = useContext(ListsContext);

  // Get theme variable from theme context
  const { theme } = useContext(ThemeContext);

  // Get isSidebarOpen variable from sidebar context
  const { isSidebarOpen } = useContext(SidebarContext);

  // Create reactive isAccordionOpen variable for accordion
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);

  // Function to toggle accordion
  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };
  return (
    <section
      className={
        isSidebarOpen ? `${styles.lists} ${styles[theme]}` : styles.hidden
      }
    >
      <Accordion
        isAccordionOpen={isAccordionOpen}
        title="Lists"
        onClick={toggleAccordion}
      >
        <div className={styles.lists__content}>
          {lists.map(({ id, title }: { id: string; title: string }) => (
            <ListButton key={id} id={id} title={title} />
          ))}
        </div>

        <AddList />
      </Accordion>
    </section>
  );
};

export default Lists;
