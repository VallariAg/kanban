import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { PRIORITY } from '../UserContext/UserContext';


export default function TaskCard({ task, index }) {
    const bgColor = task.priority === PRIORITY.MEDIUM ? "bg-yellow-100": (task.priority === PRIORITY.HIGH) ? "bg-red-100": "bg-gray-100";
    return (
      <Draggable draggableId={task.id} index={index}>
        {(provided, snapshot) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            className={`p-3 my-2 w-full ${bgColor} text-gray-800`}
          >
            {task.title}
          </div>
        )}
      </Draggable>
    )
}
