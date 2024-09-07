import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./GroupComponent8.module.css";

const GroupComponent8 = ({
  className = "",
  propWidth,
  propBackgroundImage,
}) => {
  const groupDiv4Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const groupDiv5Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={groupDiv4Style}
    >
      <div className={styles.groupChild} />
      <div className={styles.groupParent}>
        <div className={styles.rectangleGroup} style={groupDiv5Style}>
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

GroupComponent8.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propBackgroundImage: PropTypes.any,
};

export default GroupComponent8;
