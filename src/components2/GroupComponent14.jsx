import GroupComponent8 from "./GroupComponent8";
import GroupComponent9 from "./GroupComponent9";
import GroupComponent10 from "./GroupComponent10";
import GroupComponent11 from "./GroupComponent11";
import PropTypes from "prop-types";
import styles from "./GroupComponent14.module.css";

const GroupComponent14 = ({ className = "" }) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <img className={styles.rectangleIcon} alt="" src="/rectangle-1.svg" />
      <div className={styles.groupParent}>
        <div className={styles.recommendedForYouParent}>
          <div className={styles.recommendedForYou}>Recommended for you</div>
          <b className={styles.seeAll}>See all</b>
        </div>
        <div className={styles.groupContainer}>
          <div className={styles.groupDiv}>
            <div className={styles.groupWrapper}>
              <div className={styles.groupDiv}>
                <GroupComponent8 />
              </div>
            </div>
            <div className={styles.designParent}>
              <div className={styles.design}>Design</div>
              <div className={styles.rectangleGroup}>
                <div className={styles.groupChild} />
                <div className={styles.groupItem} />
                <div className={styles.groupInner} />
                <div className={styles.rectangleDiv} />
              </div>
            </div>
            <div className={styles.monthParent}>
              <div className={styles.month}>3 Month</div>
              <div className={styles.div}></div>
            </div>
          </div>
          <div className={styles.groupParent1}>
            <div className={styles.groupWrapper}>
              <div className={styles.groupDiv}>
                <GroupComponent9 />
              </div>
            </div>
            <div className={styles.designParent}>
              <div className={styles.design}>Design</div>
              <div className={styles.rectangleGroup}>
                <div className={styles.groupChild} />
                <div className={styles.groupItem} />
                <div className={styles.groupInner} />
                <div className={styles.rectangleDiv} />
              </div>
            </div>
            <div className={styles.monthParent}>
              <div className={styles.month}>3 Month</div>
              <div className={styles.div}></div>
            </div>
          </div>
          <div className={styles.groupParent2}>
            <div className={styles.groupWrapper}>
              <div className={styles.groupDiv}>
                <GroupComponent10 />
              </div>
            </div>
            <div className={styles.designParent}>
              <div className={styles.design}>Design</div>
              <div className={styles.rectangleGroup}>
                <div className={styles.groupChild} />
                <div className={styles.groupItem} />
                <div className={styles.groupInner} />
                <div className={styles.rectangleDiv} />
              </div>
            </div>
            <div className={styles.monthParent}>
              <div className={styles.month}>3 Month</div>
              <div className={styles.div}></div>
            </div>
          </div>
          <div className={styles.groupParent3}>
            <div className={styles.groupWrapper}>
              <div className={styles.groupDiv}>
                <GroupComponent11 />
              </div>
            </div>
            <div className={styles.designParent}>
              <div className={styles.design}>Design</div>
              <div className={styles.rectangleGroup}>
                <div className={styles.groupChild} />
                <div className={styles.groupItem} />
                <div className={styles.groupInner} />
                <div className={styles.rectangleDiv} />
              </div>
            </div>
            <div className={styles.monthParent}>
              <div className={styles.month}>3 Month</div>
              <div className={styles.div}></div>
            </div>
          </div>
        </div>
        <img
          className={styles.groupChild13}
          alt=""
          src="/rectangle-33@2x.png"
        />
        <img
          className={styles.groupChild14}
          alt=""
          src="/rectangle-33@2x.png"
        />
      </div>
    </div>
  );
};

GroupComponent14.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent14;
