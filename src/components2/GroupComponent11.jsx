import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./GroupComponent11.module.css";

const GroupComponent11 = ({ className = "", propFlex, propMinWidth }) => {
  const groupDiv9Style = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={groupDiv9Style}
    >
      <div className={styles.groupChild} />
      <div className={styles.groupParent}>
        <img className={styles.groupItem} alt="" src="/rectangle-321@2x.png" />
        <div className={styles.awsCertifiedSolutions}>
          AWS Certified solutions Architect
        </div>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod
          tempor
        </div>
      </div>
    </div>
  );
};

GroupComponent11.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default GroupComponent11;
