import { Droppable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';
import AddNewTask from './AddTask';
import BoardTitle from './BoardTitle';

export default function Board({ tasks, board }) {
  return (
    <div className="w-72 m-2" style={{minHeight: "500px", minWidth: "270px"}}>
        <BoardTitle title={board.title} boardId={board.id} />
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



