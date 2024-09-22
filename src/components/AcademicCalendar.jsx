import React, { useState, useRef, useEffect } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import "../css/AcademicCalendar.css";
import { MDBIcon } from "mdb-react-ui-kit";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
// import axios from "axios";

const AcademicCalendar = () => {
  const [events, setEvents] = useState([]); // Events state

  // Fetch events from the server (simulated with an example endpoint)
  const fetchEvents = async () => {
    // try {
    // const response = await axios.get("/api/user/events"); // Replace with your API endpoint
    //   const eventsData = response.data;
    //   setEvents(eventsData); // Set fetched events to state
    // } catch (error) {
    //   console.error("Error fetching events", error);
    // }
  };

  useEffect(() => {
    fetchEvents(); // Load events when the component mounts
  }, []);

  const handleEventClick = (info) => {
    alert(`Event: ${info.event.title}\nStart: ${info.event.start}`);
  };

  return (
    <section className="course-card-section">
      <div className="choice-card-container">
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "Poppins",
          }}
        >
          <h2 style={{ color: "#252641" }}>
            <span style={{ color: "#BF4628" }}>MDA</span> Academic Calendar{" "}
          </h2>
          <Row className="choice-card-row-banner">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="dayGridMonth" // Display in month view by default
              events={events} // Provide events from state
              eventClick={handleEventClick} // Handle event click
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay",
              }}
              height="auto"
            />
          </Row>
        </div>
      </div>
    </section>
  );
};

export default AcademicCalendar;
