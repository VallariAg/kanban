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
     <div className="flex flex-cols w-full mt-1 mx-2">
        <input 
            className="mr-2 w-60 shadow-gray-100 shadow-mg bg-gray-50 text-gray-800 p-1 mt-1 mb-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-transparent rounded"
            placeholder="new task" 
            value={newTaskTitle} 
            onChange={(e) => setNewTaskTitle(e.target.value)}
            onKeyPress={(e) => (e.key === 'Enter') ? clickAddTask() : null} />
        <button className="self-center justify-self-end" onClick={clickAddTask}>
            <PlusIcon className="relative text-gray-600 self-center w-5 h-5" /> 
        </button>
     </div>
    )
}
