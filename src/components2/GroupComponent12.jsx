import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./GroupComponent12.module.css";

const GroupComponent12 = ({ className = "", propTop }) => {
  const groupDiv2Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className={[styles.groupParent, className].join(" ")}
      style={groupDiv2Style}
    >
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.password}>Password</div>
        <div className={styles.enterYourPassword}>Enter your Password</div>
      </div>
      <img className={styles.invisible1Icon} alt="" src="/invisible-1.svg" />
    </div>
  );
};

GroupComponent12.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
};

export default GroupComponent12;
