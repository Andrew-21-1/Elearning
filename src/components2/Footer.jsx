import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div
        className={styles.classTechnologiesInc}
      >{`© 2021 Class Technologies Inc. `}</div>
      <div className={styles.subscribeToGet}>
        Subscribe to get our Newsletter
      </div>
      <img className={styles.footerChild} alt="" src="/polygon-2.svg" />
      <b className={styles.skilline}>Skilline</b>
      <div className={styles.footerItem} />
      <div className={styles.virtualClassFor}>Virtual Class for Zoom</div>
      <div className={styles.footerInner} />
      <div className={styles.footerInner} />
      <div className={styles.careers}>Careers</div>
      <div className={styles.privacyPolicy}>Privacy Policy</div>
      <div className={styles.privacyPolicy}>{`Terms & Conditions`}</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.footerBackground}>
        <img
          className={styles.footerTopBorder}
          loading="lazy"
          alt=""
          src="/rectangle-199@2x.png"
        />
      </div>
      <div className={styles.footerContentContainer}>
        <div className={styles.careers1}>Careers</div>
        <div className={styles.legalContainer}>
          <div className={styles.legalContent}>
            <div className={styles.legalLinks}>
              <div className={styles.legalLinksInner}>
                <div className={styles.frameChild} />
              </div>
              <div className={styles.privacyPolicy1}>Privacy Policy</div>
              <div className={styles.legalLinksInner}>
                <div className={styles.frameChild} />
              </div>
              <div
                className={styles.privacyPolicy1}
              >{`Terms & Conditions`}</div>
            </div>
          </div>
          <div
            className={styles.classTechnologiesInc1}
          >{`© 2021 Class Technologies Inc. `}</div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
