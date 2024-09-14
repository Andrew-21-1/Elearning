import FrameComponent4 from '../components2/FrameComponent4';
import GroupComponent3 from '../components2/GroupComponent3';
import GroupComponent4 from '../components2/GroupComponent4';
import ClassroomSoftware from '../components2/ClassroomSoftware';
import FrameComponent5 from '../components2/FrameComponent5';
import FrameComponent6 from '../components2/FrameComponent6';
import FrameComponent7 from '../components2/FrameComponent7';
import FrameComponent8 from '../components2/FrameComponent8';
import Footer from '../components2/Footer';
import styles from './Landing.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/HomeBody.css';
import header_img from '../assets/images/header_img.png'; // Replace with your asset path

const Landing = () => {
  return (
    <div style={{ alignItems: 'center' }}>
      <section className="home-banner">
        <Container>
          <Row style={{ padding: '0px' }}>
            <Col
              style={{
                textAlign: 'left',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '0px',
              }}
            >
              <h1>
                <strong style={{ color: '#F48C06' }}>Studying</strong> Online is now much easier
              </h1>
              <p className="text">My Dynamic Academics is an interesting platform that will teach you in more an interactive way</p>
            </Col>
            <Col className="header-img-container">
              <img style={{ height: '-webkit-fill-available' }} src={header_img} alt="Register Asset" />{' '}
            </Col>
          </Row>
        </Container>
      </section>
      <Container>
        <ClassroomSoftware style={{ marginTop: '10px', display: 'flex' }} />
      </Container>
      <FrameComponent4 />

      <div className={styles.mdaTitle}>
        <h1 className={styles.whatIsMdaContainer}>
          <span>{`What is `}</span>
          <span className={styles.cloudSoftware}>MDA</span>
          <span className={styles.span1}></span>
        </h1>
      </div>
      <section className={styles.myDynamicAcademics}>
        <div className={styles.myDynamicAcademics1}>
          MY DYNAMIC ACADEMICS is a platform that allows students to learn online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates;
          grade results and provide students with feedback all in one place.
        </div>
      </section>
      <section className={styles.instructorsStudents}>
        <div className={styles.frameParent}>
          <GroupComponent3 />
          <GroupComponent4 />
        </div>
      </section>
      <section className={styles.statsWrapper}>
        <h1 className={styles.ourSuccess}>Our Success</h1>
        <div className={styles.stats}>
          <div className={styles.statsItems1}>
            <div className={styles.wrapper}>
              <div className={styles.div}>75k</div>
              <h3 className={styles.totalSuccess}>Students</h3>
            </div>
          </div>
          <div className={styles.statsItems1}>
            <div className={styles.wrapper}>
              <div className={styles.placeholder}>
                75
                <span className={styles.span}>{` `}</span>%
              </div>
              <h3 className={styles.totalSuccess}>Total success</h3>
            </div>
          </div>
          <div className={styles.statsItems1}>
            <div className={styles.wrapper}>
              <div className={styles.div}>35</div>
              <h3 className={styles.totalSuccess}>Main questions</h3>
            </div>
          </div>
          <div className={styles.statsItems1}>
            <div className={styles.wrapper}>
              <div className={styles.div}>26</div>
              <h3 className={styles.totalSuccess}>Chief experts</h3>
            </div>
          </div>
          <div className={styles.statsItems1}>
            <div className={styles.wrapper}>
              <div className={styles.div}>16</div>
              <h3 className={styles.totalSuccess}>Years of experience</h3>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.featuresCloudSoftware1}>
        <h2 className={styles.allInOneCloudSoftwareContainer}>
          <span>{`Our `}</span>
          <span className={styles.cloudSoftware}>Features</span>
        </h2>
      </div>
      <section className={styles.extraordinaryFeature}>
        <div className={styles.thisVeryExtraordinary}>This very extraordinary feature, can make learning activities more efficient</div>
      </section>
      <FrameComponent5 />
      <FrameComponent6 />
      <FrameComponent7 />
      <FrameComponent8 />
    </div>
  );
};

export default Landing;
