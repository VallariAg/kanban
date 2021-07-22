import { useReducer, createContext } from "react";
import reducer from "./Reducer";

export const UserContext = createContext({});

export default function UserContextApp({children}) {
    const [userData, dispatch] = useReducer(reducer, initial_user_state);

    return (
        <UserContext.Provider value={{ userData, dispatch }}>
            { children }
        </UserContext.Provider>
    );
}


export const ACTIONS = {
    CREATE_TASK: "createTask",
    UPDATE_TASK: "updateTask",
    DELETE_TASK: "deleteTask",
    CREATE_BOARD: "createBoard",
    UPDATE_BOARD: "updateBoard",
    DELETE_BOARD: "deleteBoard",
    MOVE_TASK: "moveTask",
    MOVE_TASK_ACROSS_BOARD: "moveTaskAcrossBoard"
}


export const PRIORITY = {
    HIGH: "high",
    LOW: "low",
    MEDIUM: "medium"
}
  
  
export const initial_user_state = {
    tasks: {
      'task-1': { id: 'task-1', priority: PRIORITY.MEDIUM, title: 'Study', description: "", image: "https://i.pinimg.com/originals/ea/72/d7/ea72d7a743dea32b50002dbae88ad1c5.jpg" },
      'task-2': { id: 'task-2', priority: PRIORITY.LOW, title: 'Watch shows', description: "good doctor", image: "" },
      'task-3': { id: 'task-3', priority: PRIORITY.MEDIUM, title: 'Text people', description: "", image: "" },
      'task-4': { id: 'task-4', priority: PRIORITY.HIGH, title: 'Cry', description: "", image: "" },
    },
    boards: {
      'board-1': {
        id: 'board-1',
        title: 'To do',
        taskIds: ['task-1', 'task-2'],
      },
      'board-2': {
        id: 'board-2',
        title: 'In progress',
        taskIds: ['task-4'],
      },
      'board-3': {
        id: 'board-3',
        title: 'Done',
        taskIds: ['task-3'],
      },
    },
    boardOrder: ['board-1', 'board-2', 'board-3'],
    num_of_boards: 3,
    num_of_tasks: 4,
};
