import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';
import '../css/LessonOrder.css';
import { MDBIcon } from 'mdb-react-ui-kit';

const ItemComponent = ({ item, index, onEdit }) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} className="draggable-item">
          <div className="img-card">
            <img loading="lazy" alt="" src="/group-40@2x.png"></img>
          </div>
          <div className="info-card">
            <p className="card-info">
              {' '}
              <MDBIcon fas icon="th-large" style={{ padding: '3px' }} />
              Design
            </p>
            <p className="card-info">
              <MDBIcon far icon="clock" style={{ padding: '3px' }} /> 3 months
            </p>
          </div>
          <div className="text-card">
            <h1 className="card-title">{item.title}</h1>
            <p className="card-body">Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
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
