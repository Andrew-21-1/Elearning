import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";
import styles from "./FrameComponent5.module.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={[styles.landingInner, className].join(" ")}>
      <div className={styles.deeplyNestedMaskParent}>
        <div className={styles.deeplyNestedMask}>
          <div className={styles.testimonialImageTwoParent}>
            <div className={styles.testimonialImageTwo} />
            <img className={styles.frameChild} alt="" src="/group-67.svg" />
            <div className={styles.deeplyNestedMaskGroup}>
              <div className={styles.deeplyNestedMask1}>
                <div className={styles.doubleMask}>
                  <img
                    className={styles.maskGroupIcon}
                    loading="lazy"
                    alt=""
                    src="/mask-group@2x.png"
                  />
                  <img
                    className={styles.maskGroupIcon1}
                    alt=""
                    src="/mask-group-1@2x.png"
                  />
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameItem} />
                    <div className={styles.instructorDetails}>
                      <div className={styles.namePlaceholderParent}>
                        <div className={styles.namePlaceholder} />
                        <div className={styles.namePlaceholder1} />
                        <div className={styles.namePlaceholder2} />
                      </div>
                    </div>
                    <div className={styles.instructorTitle}>
                      <div className={styles.instructorTitleChild} />
                      <div className={styles.instructor}>Instructor</div>
                    </div>
                    <div className={styles.evenyHoward}>Eveny Howard</div>
                  </div>
                </div>
              </div>
              <div className={styles.presentCall}>
                <div className={styles.presentCallInner}>
                  <button className={styles.rectangleGroup}>
                    <div className={styles.frameInner} />
                    <b className={styles.present}>Present</b>
                  </button>
                </div>
                <div className={styles.rectangleContainer}>
                  <div className={styles.rectangleDiv} />
                  <button className={styles.frameButton}>
                    <div className={styles.frameChild1} />
                    <div className={styles.phone1Wrapper}>
                      <img
                        className={styles.phone1Icon}
                        alt=""
                        src="/phone-1.svg"
                      />
                    </div>
                    <b className={styles.call}>Call</b>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.tamaraHumbert}>
              <GroupComponent
                maskGroup="/mask-group-2@2x.png"
                tamaraClarke="Tamara Clarke"
              />
              <GroupComponent
                maskGroup="/mask-group-3@2x.png"
                propWidth="113.1px"
                tamaraClarke="Humbert Holland"
                propMinWidth="89.3px"
              />
            </div>
            <div className={styles.frameParent}>
              <div className={styles.ellipseParent}>
                <div className={styles.ellipseDiv} />
                <div className={styles.frameChild2} />
              </div>
              <img
                className={styles.maskGroupIcon2}
                alt=""
                src="/mask-group-4@2x.png"
              />
              <div className={styles.groupDiv}>
                <div className={styles.frameChild3} />
                <div className={styles.avatarContainer}>
                  <div className={styles.firstRatingParent}>
                    <div className={styles.firstRating} />
                    <div className={styles.firstRating1} />
                    <div className={styles.firstRating2} />
                  </div>
                </div>
                <div className={styles.patriciaMendoza}>Patricia Mendoza</div>
              </div>
            </div>
            <img className={styles.groupIcon} alt="" src="/group-70.svg" />
          </div>
          <div className={styles.deeplyNestedMaskInner}>
            <div className={styles.maskGroupParent}>
              <img
                className={styles.maskGroupIcon2}
                alt=""
                src="/mask-group-5@2x.png"
              />
              <div className={styles.rectangleParent1}>
                <div className={styles.frameChild4} />
                <div className={styles.singleAvatarContainer}>
                  <div className={styles.fourthRatingParent}>
                    <div className={styles.fourthRating} />
                    <div className={styles.fourthRating1} />
                  </div>
                </div>
                <div className={styles.nameContainer}>
                  <div className={styles.fifthImageWrapper}>
                    <div className={styles.fifthImage} />
                  </div>
                  <div className={styles.adamLevin}>Adam Levin</div>
                </div>
              </div>
            </div>
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
