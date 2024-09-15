import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useNavigate } from 'react-router-dom';
import ItemComponent from './ItemComponent'; // Import your child componentimport '../css/LessonOrder.css';
import { MDBIcon } from 'mdb-react-ui-kit';
function LessonOrder() {
  const [items, setItems] = useState([
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '4', title: 'Item 4' },
    { id: '5', title: 'Item 5' },
    { id: '6', title: 'Item 6' },
    { id: '7', title: 'Item 7' },
    { id: '8', title: 'Item 8' },
    { id: '9', title: 'Item 9' },
    { id: '10', title: 'Item 10' },
  ]);
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
    const reorderedData = items.map((item, index) => ({
      id: item.id,
      index,
    }));

    try {
      // const response = await fetch('YOUR_BACKEND_API_URL/endpoint', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(reorderedData),
      // });

      // if (!response.ok) {
      //   throw new Error('Network response was not ok');
      // }

      // const result = await response.json();
      console.log('Save successful', reorderedData);
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
                  key={item.id}
                  item={item}
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
