import PropTypes from "prop-types";
import styles from "./ClassroomSoftware.module.css";

const ClassroomSoftware = ({ className = "" }) => {
  return (
    <section className={[styles.classroomSoftware, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.classroomIconParent}>
              <div className={styles.classroomIcon} />
              <h2 className={styles.everythingYouCanContainer}>
                <span>{`Everything you can do in a physical classroom, `}</span>
                <span className={styles.youCanDo}>you can do with TOTC</span>
              </h2>
            </div>
            <div className={styles.traditionalSoftware}>
              <div className={styles.totcsSchoolManagement}>
                TOTC’s school management software helps traditional and online
                schools manage scheduling, attendance, payments and virtual
                classrooms all in one secure cloud-based system.
              </div>
              <img
                className={styles.traditionalSoftwareChild}
                loading="lazy"
                alt=""
                src="/ellipse-13.svg"
              />
            </div>
            <div className={styles.learnMore}>Learn more</div>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
          <img
            className={styles.frameInner}
            loading="lazy"
            alt=""
            src="/group-17.svg"
          />
        </div>
      </div>
    </section>
  );
};

ClassroomSoftware.propTypes = {
  className: PropTypes.string,
};

export default ClassroomSoftware;
