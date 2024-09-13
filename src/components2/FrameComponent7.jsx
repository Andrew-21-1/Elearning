import PropTypes from 'prop-types';
import styles from './FrameComponent7.module.css';

const FrameComponent7 = ({ className = '' }) => {
  return (
    <section className={[styles.landingInner, className].join(' ')}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.classManagementToolsForEduParent}>
            <h2 className={styles.classManagementToolsContainer}>
              <span>Class Management</span>
              <span className={styles.span}>{` `}</span>
              <span className={styles.toolsForEducators}>Tools for Educators</span>
            </h2>
            <div className={styles.classProvidesTools}>
              Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.
            </div>
          </div>
        </div>
        <div className={styles.featuresImage}>
          <img className={styles.maskGroupIcon} alt="" src="/Group 124.png" />
        </div>
      </div>
    </section>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
