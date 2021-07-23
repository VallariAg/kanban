import { useContext, useState } from 'react';
import { UserContext, ACTIONS } from './../UserContext/UserContext';
import { PlusIcon } from "@heroicons/react/outline";


export default function AddNewTask({boardId}) {

    const { dispatch } = useContext(UserContext);
    const [newTaskTitle, setNewTaskTitle] = useState("")

    const clickAddTask = () => {
        if(!newTaskTitle) return;
        dispatch({ 
            type: ACTIONS.CREATE_TASK, 
            payload: { title: newTaskTitle, boardId } 
        });
        setNewTaskTitle("")
    }
    return(
     <div className="grid grid-cols-10 mt-1 bg-gray-50 rounded-xl">
        <input 
            className="mr-1 col-span-9 pl-3 bg-transparent text-gray-800 p-1 mt-1 mb-2 rounded focus:outline-none"
            placeholder="new task" 
            value={newTaskTitle} 
            onChange={(e) => setNewTaskTitle(e.target.value)}
            onKeyPress={(e) => (e.key === 'Enter') ? clickAddTask() : null} />
        <button className="self-center justify-self-end mx-3" onClick={clickAddTask}>
            <PlusIcon className="relative text-gray-500 self-center w-5 h-5" /> 
        </button>
     </div>
    )
}
