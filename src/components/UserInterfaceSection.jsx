import React from "react";
import FeatureCard from "./FeatureCard";
import styles from "../css/UserInterfaceSection.module.css";
import featured from "../assets/images/featured.png"; // Replace with your asset path

const features = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/adb3735e-1190-44c7-9955-ac2ac68a2d13?placeholderIfAbsent=true&apiKey=628cc20a31df41c7938f9c545fbd4bf9",
    description:
      "Teachers don't get lost in the grid view and have a dedicated Podium space.",
  },
  {
    icon: "custom",
    description: "TA's and presenters can be moved to the front of the class.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/501355a6-05bb-490f-8b9c-2ffac9c5a9f3?placeholderIfAbsent=true&apiKey=628cc20a31df41c7938f9c545fbd4bf9",
    description:
      "Teachers can easily see all students and class data at one time.",
  },
];

function UserInterfaceSection() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper2}>
        <h1>adfsaf</h1>
        <div className={styles.container}>
          <div className={styles.imageWrapper}>
            <img
              src={featured}
              alt="Classroom user interface visualization"
              className={styles.mainImage}
            />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>
              A <span className={styles.highlight}>user interface</span>{" "}
              designed for the classroom
            </h2>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserInterfaceSection;
