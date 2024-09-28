import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useNavigate } from 'react-router-dom';
import ItemComponent from './ItemComponent'; // Import your child componentimport '../css/LessonOrder.css';
import { MDBIcon } from 'mdb-react-ui-kit';
import { useAuth } from '../AuthContext'; // Adjust the path accordingly

function LessonOrder({ lessons, courses }) {
  const { token } = useAuth();
  const [items, setItems] = useState(lessons);
  const [initialItems, setInitialItems] = useState(items); // For comparison
  const [orderChanged, setOrderChanged] = useState(false); // Track if order changed

  const onDragEnd = (result) => {
    if (!result.destination) return; // Dropped outside the list

    const reorderedItems = Array.from(items);
    const [movedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, movedItem);

    setItems(reorderedItems);
    setOrderChanged(JSON.stringify(reorderedItems) !== JSON.stringify(initialItems));
  };

  const handleEdit = (id) => {
    // Implement navigation to edit page
    console.log(`Navigate to edit page for item ${id}`);
  };

  const handleSave = async () => {
    // Prepare data to be sent
    const reorderedData = items.map((item) => item._id);
    const payload = {
      newOrder: reorderedData,
      courseId: courses._id,
    };
    try {
      const response = await fetch(`${import.meta.env.VITE_HOST}/api/v1/lessons/reorder/`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      window.location.reload();
    } catch (error) {
      console.error('Error saving reordered items:', error);
    }
  };

  return (
    <section className="file-upload">
      <div className="card">
        <h1 className="lesson-order-title">Lesson Order</h1>
        {orderChanged && (
          <button onClick={handleSave} className="save-button">
            Save Order
          </button>
        )}
      </div>
      <DragDropContext onDragEnd={onDragEnd} className="card">
        <Droppable droppableId="droppable">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps} className="parent-component">
              {items.map((item, index) => (
                <ItemComponent
                  key={item._id}
                  item={item}
                  courses={courses}
                  index={index}
                  onEdit={handleEdit}
                  dragEnabled={true} // Enable dragging globally or based on your conditions
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </section>
  );
}

export default LessonOrder;
