import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./GroupComponent7.module.css";

const GroupComponent7 = ({ className = "", groupDivTop }) => {
  const groupDiv11Style = useMemo(() => {
    return {
      top: groupDivTop,
    };
  }, [groupDivTop]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={groupDiv11Style}
    >
      <div className={styles.groupChild} />
      <img className={styles.groupItem} alt="" src="/rectangle-883.svg" />
      <div className={styles.business}>Business</div>
      <div className={styles.loremIpsumDolor}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmodadipiscing elit, sed do eiusmod
      </div>
      <div className={styles.div}></div>
    </div>
  );
};

GroupComponent7.propTypes = {
  className: PropTypes.string,

  /** Style props */
  groupDivTop: PropTypes.any,
};

export default GroupComponent7;
