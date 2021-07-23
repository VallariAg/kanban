import { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { ViewListIcon } from "@heroicons/react/outline";
import TaskModal from "./TaskModal";
import { taskPriorityClass } from '../constants'; 

export default function TaskCard({ task, index, boardId }) {
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

    return (
    <>
      <Draggable draggableId={task.id} index={index}>
        {(provided, snapshot) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            className={`my-2 border-0 border-gray-50 hover:shadow-md bg-white rounded-md`}
            onClick={() => setIsTaskModalOpen(true)}
          >
            { task.image ? <img 
                              className="h-32 w-full mb-1"
                              style={{objectFit: "cover"}}
                              src={task.image} 
                              alt={task.title} />: ""}
            <div className="px-3 py-2">
              <p className="text-gray-900 text-gray-700 px-1">{task.title}</p>
              { task.description ? 
                  <ViewListIcon className="relative text-gray-400 x-1 w-5 h-5" />: 
                  "" }
              <p className={`${taskPriorityClass(task.priority)} w-min mt-2 px-2 my-1 rounded-md text-sm`}>{task.priority}</p>
            </div>
          </div>
        )}
      </Draggable>
      { isTaskModalOpen ? <TaskModal boardId={boardId} task={task} setIsModalOpen={setIsTaskModalOpen} />: "" }
    </>
    )
}
