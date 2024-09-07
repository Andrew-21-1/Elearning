import PropTypes from "prop-types";
import styles from "./FrameComponent6.module.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section className={[styles.landingInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.toolsForTeachersAndLearnerParent}>
                <h2 className={styles.toolsForTeachersContainer}>
                  <span>Tools</span>
                  <span className={styles.forTeachersAnd}>
                    {" "}
                    For Teachers And Learners
                  </span>
                </h2>
                <div className={styles.classHasA}>
                  Class has a dynamic set of teaching tools built to be deployed
                  and used during class. Teachers can handout assignments in
                  real-time for students to complete and submit.
                </div>
              </div>
            </div>
            <div className={styles.contentContainer}>
              <div className={styles.contentElements}>
                <div className={styles.contentElementsChild} />
              </div>
              <div className={styles.exampleContainer}>
                <div className={styles.exampleContent}>
                  <div className={styles.exampleElements}>
                    <div className={styles.questionContainer}>
                      <div className={styles.questionContainerChild} />
                      <div className={styles.questionContent}>
                        <div className={styles.questionContentChild} />
                        <button className={styles.rectangleParent}>
                          <div className={styles.frameChild} />
                          <div className={styles.question1}>Question 1</div>
                        </button>
                        <h3 className={styles.trueOrFalse}>
                          True or false? This play takes place in Italy
                        </h3>
                      </div>
                      <div className={styles.frameDiv}>
                        <img
                          className={styles.frameItem}
                          alt=""
                          src="/group-90@2x.png"
                        />
                        <img
                          className={styles.frameInner}
                          loading="lazy"
                          alt=""
                          src="/group-88@2x.png"
                        />
                      </div>
                      <div className={styles.maskGroupParent}>
                        <img
                          className={styles.maskGroupIcon}
                          alt=""
                          src="/mask-group-6@2x.png"
                        />
                        <img
                          className={styles.maskGroupIcon1}
                          alt=""
                          src="/mask-group-7@2x.png"
                        />
                      </div>
                      <div className={styles.rectangleGroup}>
                        <div className={styles.rectangleDiv} />
                        <div className={styles.responseContent}>
                          <div className={styles.responseContentChild} />
                        </div>
                        <div className={styles.messageContainer}>
                          <div className={styles.fourteenthImage} />
                          <div className={styles.yourAnswerWas}>
                            Your answer was sent successfully
                          </div>
                        </div>
                        <img
                          className={styles.groupIcon}
                          loading="lazy"
                          alt=""
                          src="/group-86@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.responseIcon}>
                      <div className={styles.responseIconChild} />
                    </div>
                  </div>
                </div>
                <div className={styles.exampleContainerChild} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.frameWrapper1}>
            <img
              className={styles.frameChild1}
              loading="lazy"
              alt=""
              src="/group-122.svg"
            />
          </div>
          <div className={styles.assessmentsQuizzesTestsParent}>
            <h2 className={styles.assessmentsQuizzesTestsContainer}>
              <span>{`Assessments, `}</span>
              <span className={styles.quizzes}>Quizzes</span>
              <span>, Tests</span>
            </h2>
            <div className={styles.classHasA}>
              Easily launch live assignments, quizzes, and tests. Student
              results are automatically entered in the online gradebook.
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
