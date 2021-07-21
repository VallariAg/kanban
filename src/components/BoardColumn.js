import { useState, useContext } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';
import AddNewTask from './AddTask';

export default function Board({ tasks, board }) {

  return (
    <div className="w-72 m-2" style={{minHeight: "400px", minWidth: "250px"}}>
        <BoardTitle title={board.title} />
        <Droppable droppableId={board.id}>
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="bg-gray-50 pb-20 min-h-full"
            >
              <AddNewTask boardId={board.id} />
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



function BoardTitle({title}) {
  return (
    <div className="flex flex-column w-full bg-blue-100 p-2">
      <div className="text-gray-800"> {title} </div>
      <button className="float-right justify-self-end">Edit</button>
    </div>
  )
}
