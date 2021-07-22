import { useContext, useState } from 'react';
import { UserContext, ACTIONS, PRIORITY } from './../UserContext/UserContext';
import { PlusCircleIcon, XIcon } from "@heroicons/react/outline";
import { taskPriorityClass } from '../constants';

export default function AddBoardModal({ setIsModalOpen, task, boardId }) {
    const { dispatch } = useContext(UserContext);
    const [taskState, setTaskState] = useState(task);
    
    const clickAddBoard = () => {
        if (taskState === task) return;
        dispatch({ 
            type: ACTIONS.UPDATE_TASK, 
            payload: { updatedTask: taskState } 
        });
        setIsModalOpen(false);
    }

    const onDeleteTask = () => {
        dispatch({ 
            type: ACTIONS.DELETE_TASK, 
            payload: { boardId, taskId: task.id } 
        });
        setIsModalOpen(false);
    }

    return(
    <div className="fixed text-gray-500  flex items-center justify-center overflow-auto z-100 bg-black bg-opacity-40 left-0 right-0 top-0 bottom-0">
        <div className="bg-white p-7 flex flex-col rounded-lg text-black">
            
            <div className="grid grid-cols-2 w-full">
                <button className="justify-self-start w-6 h-6 relative" 
                    onClick={() => setIsModalOpen(false)}>
                        <XIcon className="ml-2 h-5 w-5 mx-2 text-gray-700 hover:text-black" />
                </button>         
            </div>                    
            
            <div className="grid lg:grid-cols-3 mt-3 ">
                <LeftSection taskState={taskState} setTaskState={setTaskState} />
                <RightSection taskState={taskState} setTaskState={setTaskState} /> 
            </div>

            <div className="w-full grid grid-cols-2">
                <button className="hover:bg-red-500 hover:text-white text-red-800 bg-red-100 rounded w-min py-1 mt-2 self-end px-3"
                        onClick={onDeleteTask}> Delete </button>
                <button className="bg-indigo-500 text-white rounded w-min py-1 mt-2 justify-self-end px-3"
                        onClick={clickAddBoard}> Save </button>
            </div>

        </div>
    </div>
    )
}

function LeftSection({taskState, setTaskState}) {
    return (
        <div class="grid grid-cols-1 w-full col-span-2 pr-5">
            <input 
                className="mb-1 py-1 px-2 text-xl focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent rounded-lg"
                value={taskState.title} 
                onChange={(e) => setTaskState({...taskState, title: e.target.value})}
                 />
    
            <textarea 
                className="h-24 shadow-gray-100 shadow-mg text-gray-500 p-2 mt-1 mb-2 focus:text-gray-800 focus:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-transparent rounded"
                placeholder="notes on task.." 
                value={taskState.description} 
                onChange={(e) => setTaskState({...taskState, description: e.target.value})}
            />

            { taskState.image ? <img className="w-min" style={{maxHeight: 132, maxWidth: 132}} src={taskState.image} alt="unavailable" /> : "" }
            <input 
                className="mb-1 py-1 px-2 bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent rounded-lg"
                value={taskState.image} 
                placeholder="drop image url here"
                onChange={(e) => setTaskState({...taskState, image: e.target.value})}
                 />
            
        </div>
    )
}

function RightSection({taskState, setTaskState}) {

    const selectedPriorityStyle = (priority) => ( 
        priority === taskState.priority ? "border-2 border-gray-300": "")

    const PriorityButton = ({priority}) => {
        const selectedStyle = selectedPriorityStyle(priority);
        return  (<button 
                    onClick={() => setTaskState({...taskState, priority})}
                    className={selectedStyle + 
                                " w-8 h-8 mr-1 " + 
                                taskPriorityClass(priority)} 
                />)
    }
    return (
        <div className="mt-1 ml-1">
            Priority
            <div className="mt-2 grid grid-cols-3">
                <PriorityButton priority={PRIORITY.LOW} />
                <PriorityButton priority={PRIORITY.MEDIUM} />
                <PriorityButton priority={PRIORITY.HIGH} />
            </div>
        </div>
    )
}
