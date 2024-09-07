import React from "react";
import styles from "../css/UserInterfaceSection.module.css";

function FeatureCard({ icon, description }) {
  return (
    <div className={styles.featureCard}>
      {icon === "custom" ? (
        <div className={styles.customIcon}>
          <div className={styles.orangeSquare}></div>
          <div className={styles.redSquare}></div>
        </div>
      ) : (
        <img src={icon} alt="" className={styles.featureIcon} />
      )}
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}

export default FeatureCard;
