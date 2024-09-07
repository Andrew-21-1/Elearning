import React from "react";
import styles from "./LearningStyleSelector.module.css";
import image2 from "../assets/images/reader.png";
import image3 from "../assets/images/pen.png";
const images = {
  option1: image2,
  option2: image3,
};
function OptionCard({
  title,
  imageSrc,
  buttonText,
  handleNextStep,
  className,
}) {
  let image = null;
  const selectedImage = images[imageSrc];
  if (!selectedImage) {
    image = imageSrc;
  } else {
    image = selectedImage;
  }
  return (
    <article className={`${styles.optionCard} ${className}`}>
      <div className={styles.cardContent}>
        <img
          src={image}
          alt=""
          style={{ width: "200px" }}
          className={styles.cardImage}
        />
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
      <button onClick={handleNextStep} className={styles.selectButton}>
        {buttonText}
      </button>
    </article>
  );
}

export default OptionCard;
