import GroupComponent2 from "./GroupComponent2";
import GroupComponent1 from "./GroupComponent1";
import PropTypes from "prop-types";
import styles from "./FrameComponent8.module.css";

const FrameComponent8 = ({ className = "" }) => {
  return (
    <section className={[styles.discussionsWrapper, className].join(" ")}>
      <div className={styles.discussions}>
        <div className={styles.discussionsHeader}>
          <img
            className={styles.discussionsHeaderChild}
            loading="lazy"
            alt=""
            src="/polygon-3.svg"
          />
          <div className={styles.discussionsHeaderItem} />
          <div className={styles.discussionPanel}>
            <div className={styles.ellipseParent}>
              <div className={styles.frameChild} />
              <img className={styles.frameItem} alt="" src="/group-67-1.svg" />
              <div className={styles.rectangleParent}>
                <div className={styles.frameInner} />
                <b className={styles.present}>Present</b>
              </div>
              <button className={styles.rectangleGroup}>
                <div className={styles.rectangleDiv} />
                <div className={styles.phone1Wrapper}>
                  <img
                    className={styles.phone1Icon}
                    alt=""
                    src="/phone-1-1.svg"
                  />
                </div>
                <b className={styles.call}>Call</b>
              </button>
              <GroupComponent2
                maskGroup="/mask-group-12@2x.png"
                adamLevin="Adam Levin"
              />
              <GroupComponent2
                propLeft="347.5px"
                maskGroup="/mask-group-13@2x.png"
                propWidth="73.5px"
                adamLevin="Tamara Clarke"
                propMinWidth="56px"
              />
              <GroupComponent1
                maskGroup="/mask-group-14@2x.png"
                humbertHolland="Humbert Holland"
              />
              <GroupComponent1
                propLeft="499.9px"
                maskGroup="/mask-group-15@2x.png"
                humbertHolland="Patricia Mendoza"
              />
              <div className={styles.frameChild1} />
              <div className={styles.controls}>
                <img
                  className={styles.controlsChild}
                  alt=""
                  src="/group-1011@2x.png"
                />
                <img
                  className={styles.controlsItem}
                  loading="lazy"
                  alt=""
                  src="/group-105@2x.png"
                />
              </div>
            </div>
            <div className={styles.discussionTitle}>
              <div className={styles.oneOnOneDiscussionsParent}>
                <h2 className={styles.oneOnOneDiscussions}>
                  <span>{`One-on-One `}</span>
                  <span className={styles.discussions1}>Discussions</span>
                </h2>
                <div className={styles.teachersAndTeacher}>
                  Teachers and teacher assistants can talk with students
                  privately without leaving the Zoom environment.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameChild2} />
            <div className={styles.preview}>
              <div className={styles.previewChild} />
              <img
                className={styles.previewItem}
                loading="lazy"
                alt=""
                src="/group-102.svg"
              />
            </div>
            <div className={styles.content}>
              <div className={styles.dialog}>
                <div className={styles.message}>
                  <div className={styles.frameParent}>
                    <img
                      className={styles.groupIcon}
                      alt=""
                      src="/group-57@2x.png"
                    />
                    <div className={styles.lineDiv} />
                    <div className={styles.maskGroupParent}>
                      <img
                        className={styles.maskGroupIcon}
                        alt=""
                        src="/mask-group-16@2x.png"
                      />
                      <div className={styles.groupDiv}>
                        <div className={styles.frameChild3} />
                        <div className={styles.imageContainer}>
                          <div className={styles.imageParent}>
                            <div className={styles.image} />
                            <div className={styles.image1} />
                          </div>
                        </div>
                        <div className={styles.nameContainerParent}>
                          <div className={styles.nameContainer}>
                            <div className={styles.name} />
                          </div>
                          <div className={styles.patriciaMendoza}>
                            Patricia Mendoza
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.privateDiscussionContainerParent}>
                  <div className={styles.privateDiscussionContainer}>
                    <div className={styles.privateDiscussionContent}>
                      <b className={styles.privateDiscussion}>
                        Private Discussion
                      </b>
                    </div>
                    <div className={styles.yourVideoCant}>
                      Your video can’t be seen by others
                    </div>
                  </div>
                  <button className={styles.groupButton}>
                    <div className={styles.frameChild4} />
                    <div className={styles.frameChild5} />
                    <div className={styles.endDiscussion}>End Discussion</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.featuresButtonContainer}>
          <button className={styles.rectangleParent1}>
            <div className={styles.frameChild6} />
            <div className={styles.seeMoreFeatures}>See more features</div>
          </button>
        </div>
      </div>
    </section>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
