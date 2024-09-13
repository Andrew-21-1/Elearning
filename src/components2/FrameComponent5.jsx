import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";
import styles from "./FrameComponent5.module.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={[styles.landingInner, className].join(" ")}>
      <div className={styles.deeplyNestedMaskParent}>
        <div className={styles.deeplyNestedMask}>
          <div className={styles.frameWrapper1}>
              <img
                loading="lazy"
                alt=""
                src="/Group 455.png"
              />
            </div>
          </div>
          <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.aUserInterfaceDesignedForWrapper}>
              <h2 className={styles.aUserInterfaceContainer}>
                <span>{`A `}</span>
                <span className={styles.userInterface}>user interface</span>
                <span> designed for the classroom</span>
              </h2>
            </div>
            <div className={styles.descriptionContainer}>
              <div className={styles.descriptionContent}>
                <div className={styles.descriptionElements}>
                  <div className={styles.elementContainer}>
                    <div className={styles.seventhImageParent}>
                      <div className={styles.seventhImage} />
                      <div className={styles.sixthImage} />
                      <div className={styles.sixthImage1} />
                      <div className={styles.sixthImage2} />
                      <div className={styles.sixthImage3} />
                    </div>
                  </div>
                </div>
                <div className={styles.teachersDontGet}>
                  Teachers don’t get lost in the grid view and have a dedicated
                  Podium space.
                </div>
              </div>
              <div className={styles.featureContainer}>
                <div className={styles.descriptionContent}>
                  <div className={styles.featureElements}>
                    <div className={styles.elementContainer}>
                      <div className={styles.seventhImageParent}>
                        <div className={styles.seventhImage} />
                        <div className={styles.rectangleParent2}>
                          <div className={styles.frameChild5} />
                          <div className={styles.frameChild6} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.teachersDontGet}>
                    TA’s and presenters can be moved to the front of the class.
                  </div>
                </div>
                <div className={styles.featureContainer1}>
                  <div className={styles.featureContent1}>
                    <div className={styles.elementContainer}>
                      <div className={styles.seventhImageParent}>
                        <div className={styles.seventhImage} />
                        <img
                          className={styles.users2Icon}
                          alt=""
                          src="/users-2.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.teachersCanEasily}>
                    Teachers can easily see all students and class data at one
                    time.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
