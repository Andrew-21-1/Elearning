import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./GroupComponent1.module.css";

const GroupComponent1 = ({
  className = "",
  propLeft,
  maskGroup,
  humbertHolland,
}) => {
  const groupDiv1Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className={[styles.maskGroupParent, className].join(" ")}
      style={groupDiv1Style}
    >
      <img className={styles.maskGroupIcon} alt="" src={maskGroup} />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameWrapper}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.frameInner} />
            <div className={styles.rectangleDiv} />
          </div>
        </div>
        <div className={styles.humbertHolland}>{humbertHolland}</div>
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
  maskGroup: PropTypes.string,
  humbertHolland: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
};

export default GroupComponent1;
