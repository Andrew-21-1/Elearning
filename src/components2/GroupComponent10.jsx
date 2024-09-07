import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./GroupComponent10.module.css";

const GroupComponent10 = ({ className = "", propFlex, propMinWidth }) => {
  const groupDiv8Style = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={groupDiv8Style}
    >
      <div className={styles.groupChild} />
      <div className={styles.awsCertifiedSolutionsArchitParent}>
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

GroupComponent10.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default GroupComponent10;
