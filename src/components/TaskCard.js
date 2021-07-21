import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { PRIORITY } from '../UserContext/UserContext';
import { ViewListIcon } from "@heroicons/react/outline";

export default function TaskCard({ task, index }) {
    const bgColor = task.priority === PRIORITY.MEDIUM ? "bg-yellow-100": 
                    (task.priority === PRIORITY.HIGH) ? "bg-red-100": "bg-gray-100";
    return (
      <Draggable draggableId={task.id} index={index}>
        {(provided, snapshot) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            className={`my-2 mx-1 ml-2 ${bgColor}`}
          >
            { task.image ? <img 
                              className="h-32 w-full mb-1"
                              style={{objectFit: "cover"}}
                              src={task.image} 
                              alt={task.title} />: ""}
            <div className="px-3 py-2">
              <p className="text-gray-800">{task.title}</p>
              { task.description ? 
                  <ViewListIcon className="relative text-gray-400 w-5 h-5" />: "" }
            </div>
          </div>
        )}
      </Draggable>
    )
}
