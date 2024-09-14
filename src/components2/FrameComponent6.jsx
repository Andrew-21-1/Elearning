import PropTypes from 'prop-types';
import styles from './FrameComponent6.module.css';

const FrameComponent6 = ({ className = '' }) => {
  return (
    <section className={[styles.landingInner, className].join(' ')}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <div className={styles.toolsForTeachersAndLearnerParent}>
              <h2 className={styles.toolsForTeachersContainer}>
                <span>Tools</span>
                <span className={styles.forTeachersAnd}> For Teachers And Learners</span>
              </h2>
              <div className={styles.classHasA}>
                Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit.
              </div>
            </div>
            <div className={styles.contentContainer}>
              <div className={styles.exampleContainer}>
                <div className={styles.exampleContent}>
                  <div style={{ width: '100%' }}>
                    <img className={styles.frameChild1} loading="lazy" alt="" src="/group-122.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameContainer1}>
            <div className={styles.exampleElements}>
              <img className={styles.frameChild1} loading="lazy" alt="" src="/Group 92.png" />
            </div>
            <div className={styles.toolsForTeachersAndLearnerParent}>
              <div style={{ justifyContent: 'left' }}>
                <h2 className={styles.assessmentsQuizzesTestsContainer}>
                  <span>{`Assessments, `}</span>
                  <span className={styles.quizzes}>Quizzes</span>
                  <span>, Tests</span>
                </h2>
                <div className={styles.classHasA}>Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
