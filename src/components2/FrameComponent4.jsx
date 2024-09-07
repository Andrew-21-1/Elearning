import PropTypes from "prop-types";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={[styles.landingInner, className].join(" ")}>
      <div className={styles.invoicingControlScheduleParent}>
        <div className={styles.invoicingControlSchedule}>
          <div className={styles.invoicingControlScheduleChild} />
          <h3
            className={styles.onlineBillingInvoicing}
          >{`Online Billing, Invoicing, & Contracts
`}</h3>
          <div className={styles.scheduleReserveAutomate}>
            <div className={styles.simpleAndSecure}>
              Simple and secure control of your organization’s financial and
              legal transactions. Send customized invoices and contracts
            </div>
          </div>
          <img
            className={styles.invoicingControlScheduleItem}
            loading="lazy"
            alt=""
            src="/group-79.svg"
          />
        </div>
        <div className={styles.invoicingControlSchedule1}>
          <div className={styles.invoicingControlScheduleChild} />
          <div className={styles.easySchedulingAttendanceTWrapper}>
            <h3
              className={styles.easyScheduling}
            >{`Easy Scheduling & Attendance Tracking`}</h3>
          </div>
          <div className={styles.scheduleAndReserve}>
            Schedule and reserve classrooms at one campus or multiple campuses.
            Keep detailed records of student attendance
          </div>
          <img
            className={styles.invoicingControlScheduleItem}
            loading="lazy"
            alt=""
            src="/group-80.svg"
          />
        </div>
        <div className={styles.invoicingControlSchedule2}>
          <div className={styles.invoicingControlScheduleChild} />
          <div className={styles.customerTrackingWrapper}>
            <h3 className={styles.customerTracking}>Customer Tracking</h3>
          </div>
          <div
            className={styles.scheduleAndReserve}
          >{`Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization `}</div>
          <img
            className={styles.invoicingControlScheduleItem}
            loading="lazy"
            alt=""
            src="/group-811.svg"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
