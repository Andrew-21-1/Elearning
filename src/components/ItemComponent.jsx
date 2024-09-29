import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';
import '../css/LessonOrder.css';
import { MDBIcon } from 'mdb-react-ui-kit';

const ItemComponent = ({ item, courses, index, onEdit }) => {
  return (
    <Draggable key={item._id} draggableId={item._id} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} className="draggable-item">
          <div className="img-card">
            <img loading="lazy" alt="" style={{ height: '10rem' }} src={courses.pdfLink}></img>
          </div>
          <div className="info-card">
            <p className="card-info">
              {' '}
              <MDBIcon fas icon="th-large" style={{ padding: '3px' }} />
              {item.type}
            </p>
            <p className="card-info">
              <MDBIcon far icon="clock" style={{ padding: '3px' }} /> {item.lessonDuration} mins
            </p>
          </div>
          <div className="text-card">
            <h1 className="card-title">{item.lessonTitle}</h1>
            <p className="card-body">{item.description}</p>
          </div>

          <div className="item-component">
            <button onClick={() => onEdit(item.id)}>
              <MDBIcon fas icon="edit" />
            </button>
            <span
              {...provided.dragHandleProps} // Make this button the drag handle
              className="drag-handle"
            >
              <MDBIcon fas icon="arrows-alt" />
            </span>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default ItemComponent;
