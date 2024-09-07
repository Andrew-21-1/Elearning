import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./GroupComponent5.module.css";

const GroupComponent5 = ({
  className = "",
  propFlex,
  propMinWidth,
  propAlignSelf,
  group40,
}) => {
  const groupDiv3Style = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propMinWidth, propAlignSelf]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={groupDiv3Style}
    >
      <div className={styles.groupChild} />
      <div className={styles.groupParent}>
        <img className={styles.groupItem} alt="" src={group40} />
        <div className={styles.awsCertifiedSolutions}>
          AWS Certified Solutions Architect
        </div>
      </div>
    </div>
  );
};

GroupComponent5.propTypes = {
  className: PropTypes.string,
  group40: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default GroupComponent5;
