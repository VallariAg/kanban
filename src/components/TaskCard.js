import React from 'react';
import { Draggable } from 'react-beautiful-dnd';


export default function TaskCard({ task, index }) {
  
    return (
      <Draggable draggableId={task.id} index={index}>
        {(provided, snapshot) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            className="p-3 bg-gray-100 my-2 w-full"
          >
            {task.title}
          </div>
        )}
      </Draggable>
    )
}
