import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./GroupComponent6.module.css";

const GroupComponent6 = ({
  className = "",
  propBackgroundColor,
  propWidth,
  rectangle88,
  prop,
  propColor,
  propPadding,
  propAlignSelf,
  design,
  propMinWidth,
  propDisplay,
  groupDivTop,
  groupDivLeft,
  designLeft,
}) => {
  const divStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const designStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      display: propDisplay,
      left: designLeft,
    };
  }, [propMinWidth, propDisplay, designLeft]);

  const groupDiv10Style = useMemo(() => {
    return {
      top: groupDivTop,
      left: groupDivLeft,
    };
  }, [groupDivTop, groupDivLeft]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={groupDiv10Style}
    >
      <div className={styles.groupChild} />
      <img className={styles.groupItem} alt="" src={rectangle88} />
      <div className={styles.design} style={designStyle}>
        {design}
      </div>
      <div className={styles.loremIpsumDolor}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmodadipiscing elit, sed do eiusmod
      </div>
      <div className={styles.div} style={divStyle}>
        {prop}
      </div>
    </div>
  );
};

GroupComponent6.propTypes = {
  className: PropTypes.string,
  rectangle88: PropTypes.string,
  prop: PropTypes.string,
  design: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propWidth: PropTypes.any,
  propColor: PropTypes.any,
  propPadding: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propMinWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  groupDivTop: PropTypes.any,
  groupDivLeft: PropTypes.any,
  designLeft: PropTypes.any,
};

export default GroupComponent6;
