import GroupComponent2 from './GroupComponent2';
import GroupComponent1 from './GroupComponent1';
import PropTypes from 'prop-types';
import styles from './FrameComponent8.module.css';

const FrameComponent8 = ({ className = '' }) => {
  return (
    <section className={[styles.discussionsWrapper, className].join(' ')}>
      <div className={styles.discussions}>
        <div className={styles.discussionsHeader}>
          <div style={{ width: '100%' }}>
            <img className={styles.discussionsHeaderChild} loading="lazy" alt="" src="/Group 106.png" />
          </div>
          <div className={styles.discussionPanel}>
            <div className={styles.discussionTitle}>
              <div className={styles.oneOnOneDiscussionsParent}>
                <h2 className={styles.oneOnOneDiscussions}>
                  <span>{`One-on-One `}</span>
                  <span className={styles.discussions1}>Discussions</span>
                </h2>
                <div className={styles.teachersAndTeacher}>Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
