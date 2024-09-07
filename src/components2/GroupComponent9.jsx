import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./GroupComponent9.module.css";

const GroupComponent9 = ({
  className = "",
  propWidth,
  propMinWidth,
  propBackgroundImage,
}) => {
  const groupDiv6Style = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  const groupDiv7Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={groupDiv6Style}
    >
      <div className={styles.groupChild} />
      <div className={styles.groupParent}>
        <div className={styles.rectangleGroup} style={groupDiv7Style}>
          <img
            className={styles.groupItem}
            alt=""
            src="/rectangle-321@2x.png"
          />
          <div className={styles.groupInner} />
        </div>
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

GroupComponent9.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
  propBackgroundImage: PropTypes.any,
};

export default GroupComponent9;
