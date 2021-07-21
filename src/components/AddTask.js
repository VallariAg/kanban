import { useContext, useState } from 'react';
import { UserContext, ACTIONS } from './../UserContext/UserContext';


export default function AddNewTask({boardId}) {

    const { dispatch } = useContext(UserContext);
    const [newTaskTitle, setNewTaskTitle] = useState("")

    const clickAddTask = () => {
        dispatch({ 
            type: ACTIONS.CREATE_TASK, 
            payload: { title: newTaskTitle, boardId } 
        });
        setNewTaskTitle("")
    }
    return(
     <div className="flex flex-columns">
        <input 
            className="p-1"
            placeholder="new task" 
            value={newTaskTitle} 
            onChange={(e) => setNewTaskTitle(e.target.value)}
            onKeyPress={(e) => (e.key === 'Enter') ? clickAddTask() : null} />
        <button onClick={clickAddTask}>+</button>
     </div>
    )
}
