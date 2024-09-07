import GroupComponent12 from "./GroupComponent12";
import PropTypes from "prop-types";
import styles from "./GroupComponent16.module.css";

const GroupComponent16 = ({ className = "" }) => {
  return (
    <div className={[styles.groupParent, className].join(" ")}>
      <div className={styles.groupContainer}>
        <button className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.login}>Login</div>
          <img className={styles.groupItem} alt="" src="/rectangle-79.svg" />
          <div className={styles.register}>Register</div>
        </button>
        <div className={styles.welcomeToMda}>Welcome to MDA...</div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupInner} />
        <div className={styles.userName}>User name</div>
        <div className={styles.enterYourUser}>Enter your User name</div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupInner} />
        <div className={styles.userName}>Email Address</div>
        <div className={styles.enterYourUser}>Enter your Email Address</div>
      </div>
      <GroupComponent12 propTop="480px" />
      <button className={styles.groupButton}>
        <div className={styles.groupChild1} />
        <div className={styles.register1}>Register</div>
      </button>
    </div>
  );
};

GroupComponent16.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent16;
