import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={[styles.clipPathGroupParent, className].join(" ")}>
      <img
        className={styles.clipPathGroup}
        alt=""
        src="/clip-path-group2@2x.png"
      />
      <img className={styles.groupIcon} alt="" src="/group3.svg" />
      <img
        className={styles.groupIcon1}
        loading="lazy"
        alt=""
        src="/group-110.svg"
      />
      <img className={styles.groupIcon2} alt="" src="/group-210.svg" />
      <img className={styles.groupIcon3} alt="" src="/group-310.svg" />
      <img className={styles.groupIcon4} alt="" src="/group-410.svg" />
      <img className={styles.groupIcon5} alt="" src="/group-510.svg" />
      <img className={styles.groupIcon6} alt="" src="/group-610.svg" />
      <img className={styles.groupIcon7} alt="" src="/group-77.svg" />
      <img className={styles.groupIcon8} alt="" src="/group-81.svg" />
      <img className={styles.groupIcon9} alt="" src="/group-91.svg" />
      <img className={styles.groupIcon10} alt="" src="/group-101.svg" />
      <img className={styles.groupIcon11} alt="" src="/group-1111.svg" />
      <img
        className={styles.groupIcon12}
        loading="lazy"
        alt=""
        src="/group-121.svg"
      />
      <img className={styles.groupIcon13} alt="" src="/group-131.svg" />
      <img className={styles.groupIcon14} alt="" src="/group-141.svg" />
      <img className={styles.groupIcon15} alt="" src="/group-151.svg" />
      <img className={styles.groupIcon16} alt="" src="/group-161.svg" />
      <img className={styles.groupIcon17} alt="" src="/group-171.svg" />
      <img className={styles.groupIcon18} alt="" src="/group-181.svg" />
      <img className={styles.groupIcon19} alt="" src="/group-191.svg" />
      <img className={styles.groupIcon20} alt="" src="/group-201.svg" />
      <img className={styles.groupIcon21} alt="" src="/group-211.svg" />
      <img className={styles.groupIcon22} alt="" src="/group-221.svg" />
      <img className={styles.groupIcon23} alt="" src="/group-231.svg" />
      <img className={styles.groupIcon24} alt="" src="/group-241.svg" />
      <img className={styles.groupIcon25} alt="" src="/group-251.svg" />
      <img className={styles.groupIcon26} alt="" src="/group-261.svg" />
      <img className={styles.groupIcon27} alt="" src="/group-271.svg" />
      <img className={styles.groupIcon28} alt="" src="/group-281.svg" />
      <img className={styles.groupIcon29} alt="" src="/group-291.svg" />
      <img className={styles.groupIcon30} alt="" src="/group-301.svg" />
      <img className={styles.groupIcon31} alt="" src="/group-311.svg" />
      <img className={styles.groupIcon32} alt="" src="/group-321.svg" />
      <img className={styles.groupIcon33} alt="" src="/group-331.svg" />
      <img className={styles.groupIcon34} alt="" src="/group-341.svg" />
      <img
        className={styles.groupIcon35}
        loading="lazy"
        alt=""
        src="/group-351.svg"
      />
      <img className={styles.groupIcon36} alt="" src="/group-361.svg" />
      <img className={styles.groupIcon37} alt="" src="/group-371.svg" />
      <img className={styles.groupIcon38} alt="" src="/group-381.svg" />
      <img className={styles.groupIcon39} alt="" src="/group-391.svg" />
      <img className={styles.groupIcon40} alt="" src="/group-401.svg" />
      <img className={styles.groupIcon41} alt="" src="/group-411.svg" />
      <img className={styles.groupIcon42} alt="" src="/group-421.svg" />
      <img className={styles.groupIcon43} alt="" src="/group-431.svg" />
      <img className={styles.groupIcon44} alt="" src="/group-441.svg" />
      <img className={styles.groupIcon45} alt="" src="/group-451.svg" />
      <img className={styles.groupIcon46} alt="" src="/group-461.svg" />
      <img className={styles.groupIcon47} alt="" src="/group-471.svg" />
      <img className={styles.groupIcon48} alt="" src="/group-481.svg" />
      <img className={styles.groupIcon49} alt="" src="/group-491.svg" />
      <img className={styles.groupIcon50} alt="" src="/group-501.svg" />
      <img className={styles.groupIcon51} alt="" src="/group-511.svg" />
      <img className={styles.groupIcon52} alt="" src="/group-521.svg" />
      <img className={styles.groupIcon53} alt="" src="/group-531.svg" />
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
