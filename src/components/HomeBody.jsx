import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/HomeBody.css";
import header_img from "../assets/images/header_img.png"; // Replace with your asset path
import styles from "../css/YouCanDoWithTotc.module.css";
import Footer from "../components/FeatureCard";
import UserInterfaceSection from "../components/UserInterfaceSection";

const HomeBody = () => {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".animated-section").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          el.classList.add("animate");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <section className="home-banner">
        <Container>
          <Row>
            <Col
              style={{
                textAlign: "left",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <h1>
                <strong style={{ color: "#F48C06" }}>Studying</strong> Online is
                now much easier
              </h1>
              <p className="text">
                My Dynamic Academics is an interesting platform that will teach
                you in more an interactive way
              </p>
            </Col>
            <Col className="header-img-container" style={{ height: "100vh" }}>
              <img
                style={{ height: "-webkit-fill-available" }}
                src={header_img}
                alt="Register Asset"
              />{" "}
            </Col>
          </Row>
        </Container>
      </section>

      <section id="about" className="animated-section">
        <Container style={{ marginTop: "50px" }}>
          <Row>
            <Col>
              <section className="animated-section">
                <div className={styles.content}>
                  <div className={styles.textColumn}>
                    <h2 className={styles.title}>
                      <span>
                        Everything you can do in a physical classroom,{" "}
                      </span>
                      <span className={styles.highlight}>
                        you can do with MDA
                      </span>
                    </h2>
                    <p className={styles.description}>
                      TOTC's school management software helps traditional and
                      online schools manage scheduling, attendance, payments and
                      virtual classrooms all in one secure cloud-based system.
                    </p>
                    <button
                      type="link"
                      className={styles.learnMore}
                      tabIndex="0"
                    >
                      Learn more
                    </button>
                  </div>
                  <div className={styles.imageColumn}>
                    <img
                      style={{ height: "-webkit-fill-available" }}
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbf36c15-15a3-43d6-b2c3-95f67142be07?apiKey=628cc20a31df41c7938f9c545fbd4bf9&"
                      alt="Illustration of TOTC's school management software features"
                      className={styles.image}
                      loading="lazy"
                    />
                  </div>
                </div>
              </section>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="services" className="animated-section">
        <UserInterfaceSection />
      </section>

      <section id="contact" className="animated-section">
        <Container>
          <Row>
            <Col>
              <h2>Contact Us</h2>
              <p>Feel free to reach out to us for any inquiries.</p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HomeBody;
