import GroupComponent12 from "./GroupComponent12";
import PropTypes from "prop-types";
import styles from "./GroupComponent15.module.css";

const GroupComponent15 = ({ className = "" }) => {
  return (
    <div className={[styles.groupParent, className].join(" ")}>
      <div className={styles.groupContainer}>
        <div className={styles.rectangleParent}>
          <button className={styles.groupChild} />
          <img className={styles.groupItem} alt="" src="/rectangle-79.svg" />
          <div className={styles.login}>Login</div>
          <div className={styles.register}>Register</div>
        </div>
        <div className={styles.welcomeToMda}>Welcome to MDA..</div>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupInner} />
          <div className={styles.userName}>User name</div>
          <div className={styles.enterYourUser}>Enter your User name</div>
        </div>
        <GroupComponent12 />
        <div className={styles.welcomeToMy}>
          Welcome to my dynamic academics, sign in and learn online like you’ve
          never learnt before.
        </div>
      </div>
      <div className={styles.rectangleContainer}>
        <input className={styles.rectangleInput} type="checkbox" />
        <div className={styles.rememebrMe}>Rememebr me</div>
        <div className={styles.forgotPassword}>Forgot Password ?</div>
      </div>
      <button className={styles.groupButton}>
        <div className={styles.rectangleDiv} />
        <div className={styles.login1}>Login</div>
      </button>
    </div>
  );
};

GroupComponent15.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent15;
