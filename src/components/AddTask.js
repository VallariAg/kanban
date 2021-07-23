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
     <div className="grid grid-cols-10 mt-1">
        <input 
            className="mr-1 col-span-9 pl-2 shadow-gray-100 shadow-mg bg-gray-50 text-gray-800 p-1 mt-1 mb-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-transparent rounded"
            placeholder="new task" 
            value={newTaskTitle} 
            onChange={(e) => setNewTaskTitle(e.target.value)}
            onKeyPress={(e) => (e.key === 'Enter') ? clickAddTask() : null} />
        <button className="self-center justify-self-end" onClick={clickAddTask}>
            <PlusIcon className="relative text-white self-center w-6 h-6" /> 
        </button>
     </div>
    )
}
