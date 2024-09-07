import GroupComponent5 from "./GroupComponent5";
import PropTypes from "prop-types";
import styles from "./GroupComponent13.module.css";

const GroupComponent13 = ({ className = "" }) => {
  return (
    <div className={[styles.courseInner, className].join(" ")}>
      <div className={styles.welcomeBackReadyForYourNParent}>
        <div className={styles.welcomeBackReady}>
          Welcome back, ready for your next lesson?
        </div>
        <div className={styles.choiceFavouriteCourse}>
          Choice favourite course from top category
        </div>
        <div className={styles.groupParent}>
          <div className={styles.groupContainer}>
            <div className={styles.groupContainer}>
              <div className={styles.groupChild} />
              <div className={styles.groupDiv}>
                <div className={styles.rectangleGroup}>
                  <img
                    className={styles.groupItem}
                    alt=""
                    src="/rectangle-32@2x.png"
                  />
                  <div className={styles.groupInner} />
                </div>
                <div className={styles.awsCertifiedSolutions}>
                  AWS Certified Solutions Architect
                </div>
              </div>
            </div>
            <div className={styles.lesson5Of}>Lesson 5 of 7</div>
          </div>
          <div className={styles.groupParent1}>
            <GroupComponent5 group40="/group-40@2x.png" />
            <div className={styles.lesson5Of}>Lesson 5 of 7</div>
          </div>
          <div className={styles.groupParent2}>
            <GroupComponent5
              propFlex="unset"
              propMinWidth="unset"
              propAlignSelf="unset"
              group40="/group-40-1@2x.png"
            />
            <div className={styles.lesson5Of2}>Lesson 5 of 7</div>
          </div>
        </div>
        <b className={styles.viewHisotry}>View hisotry</b>
      </div>
    </div>
  );
};

GroupComponent13.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent13;
