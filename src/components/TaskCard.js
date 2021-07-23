import { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { PRIORITY } from '../UserContext/UserContext';
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
            className={`my-2 bg-white rounded-md`}
            onClick={() => setIsTaskModalOpen(true)}
          >
            <div className={`w-full h-3 ${taskPriorityClass(task.priority)} rounded-sm`}></div>
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
      { isTaskModalOpen ? <TaskModal boardId={boardId} task={task} setIsModalOpen={setIsTaskModalOpen} />: "" }
    </>
    )
}
