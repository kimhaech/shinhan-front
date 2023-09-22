import styles from "./AccordionListItem.module.css";
import ArrowIcon from "../../assets/images/ic_arrow.svg";

const AccordionListItem = ({ title, onClick, isOpen }) => {
  return (
    <div className={styles.accordionContainer} onClick={onClick}>
      <div className={styles.accordionTitle}>{title}</div>
      <img
        src={ArrowIcon}
        className={`${styles.arrowIcon} ${
          isOpen ? styles.arrowOpen : ""
        }`}
      />
    </div>
  );
};

export default AccordionListItem;