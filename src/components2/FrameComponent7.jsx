import PropTypes from "prop-types";
import styles from "./FrameComponent7.module.css";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <section className={[styles.landingInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.classManagementToolsForEduParent}>
            <h2 className={styles.classManagementToolsContainer}>
              <span>Class Management</span>
              <span className={styles.span}>{` `}</span>
              <span className={styles.toolsForEducators}>
                Tools for Educators
              </span>
            </h2>
            <div className={styles.classProvidesTools}>
              Class provides tools to help run and manage the class such as
              Class Roster, Attendance, and more. With the Gradebook, teachers
              can review and grade tests and quizzes in real-time.
            </div>
          </div>
        </div>
        <div className={styles.featuresImage}>
          <div className={styles.gradebookHeaderParent}>
            <div className={styles.gradebookHeader}>
              <div className={styles.gradebookIcon} />
            </div>
            <div className={styles.gradebookTitle}>
              <div className={styles.gradebookTitleChild} />
              <button className={styles.title}>
                <div className={styles.titleChild} />
                <div className={styles.gradebook}>GradeBook</div>
              </button>
              <div className={styles.students}>
                <div className={styles.studentList}>
                  <div className={styles.list}>
                    <div className={styles.student}>
                      <div className={styles.studentChild} />
                      <div className={styles.name}>100</div>
                    </div>
                    <div className={styles.grades}>
                      <div className={styles.gradesChild} />
                      <img
                        className={styles.maskGroupIcon}
                        alt=""
                        src="/mask-group-8@2x.png"
                      />
                      <img
                        className={styles.starredIcon}
                        loading="lazy"
                        alt=""
                        src="/star-6.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.studentEntry}>
                  <div className={styles.studentName}>
                    <div className={styles.rectangleParent}>
                      <input className={styles.frameChild} type="text" />
                      <img
                        className={styles.maskGroupIcon1}
                        alt=""
                        src="/mask-group-9@2x.png"
                      />
                    </div>
                    <div className={styles.studentNameChild} />
                    <div className={styles.name1}>
                      <div className={styles.rectangleGroup}>
                        <input className={styles.frameItem} type="text" />
                        <img
                          className={styles.maskGroupIcon1}
                          alt=""
                          src="/mask-group-10@2x.png"
                        />
                      </div>
                      <div className={styles.name2}>98</div>
                    </div>
                  </div>
                  <div className={styles.studentScores}>
                    <div className={styles.scoreList}>
                      <div className={styles.score}>
                        <div className={styles.scoreEntry}>
                          <div className={styles.scoreEntryChild} />
                          <div className={styles.name3}>75</div>
                        </div>
                      </div>
                      <div className={styles.scoreDetails}>
                        <div className={styles.details}>
                          <div className={styles.scoreProgress}>
                            <input
                              className={styles.scoreProgressChild}
                              type="text"
                            />
                            <img
                              className={styles.maskGroupIcon3}
                              alt=""
                              src="/mask-group-11@2x.png"
                            />
                          </div>
                          <div className={styles.percentage}>
                            <div className={styles.percentageChild} />
                            <div className={styles.name4}>85</div>
                          </div>
                        </div>
                        <div className={styles.scoreDetailsInner}>
                          <button className={styles.rectangleContainer}>
                            <div className={styles.frameInner} />
                            <div className={styles.rectangleDiv} />
                            <div className={styles.export}>Export</div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className={styles.gradebookTitleItem}
                loading="lazy"
                alt=""
                src="/group-94@2x.png"
              />
              <img
                className={styles.gradebookTitleInner}
                loading="lazy"
                alt=""
                src="/group-95@2x.png"
              />
              <div className={styles.background}>
                <div className={styles.backgroundChild} />
                <img
                  className={styles.backgroundItem}
                  loading="lazy"
                  alt=""
                  src="/group-96.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.gradebookImage}>
            <div className={styles.gradebookImageChild} />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
