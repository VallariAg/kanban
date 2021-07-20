import React, { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';


export default function Board({ tasks, board }) {

  return (
    <div className="w-72 m-2" style={{minHeight: "400px"}}>
        <h1>{board.title}</h1>
        <Droppable droppableId={board.id}>
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="bg-gray-50 pb-20 min-h-full"
            >
              {tasks.map((task, index) => (
                <TaskCard key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
    </div>
  );
}



