import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./GroupComponent2.module.css";

const GroupComponent2 = ({
  className = "",
  propLeft,
  maskGroup,
  propWidth,
  adamLevin,
  propMinWidth,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const adamLevinStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={[styles.maskGroupParent, className].join(" ")}
      style={groupDivStyle}
    >
      <img className={styles.maskGroupIcon} alt="" src={maskGroup} />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} style={rectangleDiv1Style} />
        <div className={styles.namesParent}>
          <div className={styles.names}>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.frameInner} />
              <div className={styles.rectangleDiv} />
            </div>
          </div>
          <div className={styles.adamLevin} style={adamLevinStyle}>
            {adamLevin}
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent2.propTypes = {
  className: PropTypes.string,
  maskGroup: PropTypes.string,
  adamLevin: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default GroupComponent2;
