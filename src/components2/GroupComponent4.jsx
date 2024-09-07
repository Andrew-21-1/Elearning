import PropTypes from "prop-types";
import styles from "./GroupComponent4.module.css";

const GroupComponent4 = ({ className = "" }) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.imagePlaceholderParent}>
        <img
          className={styles.imagePlaceholderIcon}
          loading="lazy"
          alt=""
          src="/rectangle-21@2x.png"
        />
        <div className={styles.imagePlaceholder} />
      </div>
      <div className={styles.studentLabel}>
        <h3 className={styles.forStudents}>FOR STUDENTS</h3>
      </div>
      <button className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <div className={styles.enterAccessCode}>Enter access code</div>
      </button>
    </div>
  );
};

GroupComponent4.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent4;
