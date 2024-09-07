import PropTypes from "prop-types";
import styles from "./Footer1.module.css";

const Footer1 = ({ className = "" }) => {
  return (
    <div className={[styles.footer, className].join(" ")}>
      <div className={styles.footerChild} />
      <div
        className={styles.classTechnologiesInc}
      >{`© 2021 Class Technologies Inc. `}</div>
      <div className={styles.lineParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.careers}>Careers</div>
        <div className={styles.privacyPolicy}>Privacy Policy</div>
        <div className={styles.termsConditions}>{`Terms & Conditions`}</div>
      </div>
    </div>
  );
};

Footer1.propTypes = {
  className: PropTypes.string,
};

export default Footer1;
