import { ACTIONS } from "./UserContext";
// actions
import moveTask from "./actions/movetask";
import moveTaskAcrossBoard from "./actions/moveTaskAcrossBoard";
import createTask from "./actions/createTask";
import createBoard from "./actions/createBoard";
import deleteBoard from "./actions/deleteBoard";
import deleteTask from "./actions/deleteTask";
import sortTaskPrioirty from "./actions/sortTaskPrioirty";



export default function reducer(state, action) {
    switch (action.type) {
      
      case ACTIONS.CREATE_TASK: {
        const taskTitle = action.payload.title;
        const boardId = action.payload.boardId;

        const newState = createTask(state, taskTitle, boardId);
        localStorage.kanbanUser = JSON.stringify(newState);
        return newState;
      }

      case ACTIONS.UPDATE_TASK: {
          const updatedTask = action.payload.updatedTask;

          const newState = { ...state, tasks: {...state.tasks, [updatedTask.id]: updatedTask} };
          localStorage.kanbanUser = JSON.stringify(newState);
          return newState;
      }

      case ACTIONS.DELETE_TASK: {
        const boardId = action.payload.boardId;
        const taskId = action.payload.taskId;

        const newState = deleteTask(state, taskId, boardId);
        localStorage.kanbanUser = JSON.stringify(newState);
        return newState;
      }

      case ACTIONS.MOVE_TASK: {
        const source = action.payload.source;
        const destination = action.payload.destination;
        const draggableId = action.payload.draggableId;

        const newState = moveTask(state, source, destination, draggableId);
        localStorage.kanbanUser = JSON.stringify(newState);
        return newState;
      }
      
      case ACTIONS.MOVE_TASK_ACROSS_BOARD: {
        const source = action.payload.source;
        const destination = action.payload.destination;
        const draggableId = action.payload.draggableId;

        const newState = moveTaskAcrossBoard(state, source, destination, draggableId);
        localStorage.kanbanUser = JSON.stringify(newState);
        return newState;
      }

      case ACTIONS.SORT_TASKS_PRIORITY: {
        const boardId = action.payload.boardId;
        const sortType = action.payload.sortType;
        
        const newState = sortTaskPrioirty(state, boardId, sortType);
        localStorage.kanbanUser = JSON.stringify(newState);
        return newState;
      }
      
      case ACTIONS.CREATE_BOARD: {
        const boardTitle = action.payload.title;

        const newState = createBoard(state, boardTitle);
        localStorage.kanbanUser = JSON.stringify(newState);
        return newState;
      }

      case ACTIONS.UPDATE_BOARD: {
        const boardTitle = action.payload.title;
        const boardId = action.payload.boardId;

        const newState = { ...state, boards: { ...state.boards, [boardId]: { ...state.boards[boardId], title: boardTitle } } }
        localStorage.kanbanUser = JSON.stringify(newState);
        return newState;
      }

      case ACTIONS.DELETE_BOARD: {
        const boardId = action.payload.boardId;

        const newState = deleteBoard(state, boardId);
        localStorage.kanbanUser = JSON.stringify(newState);
        return newState;
      }

      default:
        throw new Error();
    }
  }
