import { Droppable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';
import AddNewTask from './AddTask';

export default function Board({ tasks, board }) {

  return (
    <div className="w-72 m-2" style={{minHeight: "500px", minWidth: "270px"}}>
        <BoardTitle title={board.title} />
        <Droppable droppableId={board.id}>
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="bg-indigo-200 pb-20 min-h-full"
              style={{maxHeight: "70vh", overflowY: "scroll"}}
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
    <div className="py-3 px-2 flex flex-column w-full bg-blue-100">
      <div className="mx-1 text-gray-800 font-semibold"> {(title).toUpperCase()} </div>
      <button className="float-right">Edit</button>
    </div>
  )
}
