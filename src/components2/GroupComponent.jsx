import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./GroupComponent.module.css";

const GroupComponent = ({
  className = "",
  maskGroup,
  propWidth,
  tamaraClarke,
  propMinWidth,
}) => {
  const rectangleDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const tamaraClarkeStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={[styles.maskGroupParent, className].join(" ")}>
      <img className={styles.maskGroupIcon} alt="" src={maskGroup} />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} style={rectangleDivStyle} />
        <div className={styles.frameWrapper}>
          <div className={styles.clarkeRatingParent}>
            <div className={styles.clarkeRating} />
            <div className={styles.hollandRating} />
            <div className={styles.mendozaRating} />
          </div>
        </div>
        <div className={styles.tamaraClarke} style={tamaraClarkeStyle}>
          {tamaraClarke}
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  maskGroup: PropTypes.string,
  tamaraClarke: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default GroupComponent;
