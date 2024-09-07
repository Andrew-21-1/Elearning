import PropTypes from "prop-types";
import styles from "./GroupComponent3.module.css";

const GroupComponent3 = ({ className = "" }) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <img className={styles.frameChild} alt="" src="/rectangle-19@2x.png" />
      <img
        className={styles.frameItem}
        loading="lazy"
        alt=""
        src="/rectangle-22.svg"
      />
      <h3 className={styles.forInstructors}>FOR INSTRUCTORS</h3>
      <div className={styles.frameWrapper}>
        <button className={styles.rectangleGroup}>
          <div className={styles.frameInner} />
          <div className={styles.startAClass}>Start a class today</div>
        </button>
      </div>
    </div>
  );
};

GroupComponent3.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent3;
