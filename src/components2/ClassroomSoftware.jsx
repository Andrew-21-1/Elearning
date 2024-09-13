import PropTypes from 'prop-types';
import styles from './ClassroomSoftware.module.css';

const ClassroomSoftware = ({ className = '' }) => {
  return (
    <section className={[styles.discussionsWrapper, className].join(' ')}>
      <div className={styles.discussions}>
        <div className={styles.discussionsHeader}>
          <div className={styles.discussionPanel}>
            <div className={styles.discussionTitle}>
              <div className={styles.oneOnOneDiscussionsParent}>
                <h2 className={styles.oneOnOneDiscussions}>
                  <span>Everything you can do in a physical classroom,</span>
                  <span className={styles.discussions1}>{` you can do with MDA `}</span>
                </h2>
                <div className={styles.teachersAndTeacher}>
                  TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.imgBody}>
            <img className={styles.discussionsHeaderChild} loading="lazy" alt="" src="/group-17.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

ClassroomSoftware.propTypes = {
  className: PropTypes.string,
};

export default ClassroomSoftware;
