import { ACTIONS } from "./UserContext";
// actions
import moveTask from "./actions/movetask";
import moveTaskAcrossBoard from "./actions/moveTaskAcrossBoard";
import createTask from "./actions/createTask";
import createBoard from "./actions/createBoard";
import deleteBoard from "./actions/deleteBoard";
import deleteTask from "./actions/deleteTask";



export default function reducer(state, action) {
    switch (action.type) {
      
      case ACTIONS.CREATE_TASK: {
        const taskTitle = action.payload.title;
        const boardId = action.payload.boardId;

        return createTask(state, taskTitle, boardId);
      }

      case ACTIONS.UPDATE_TASK: {
          const updatedTask = action.payload.updatedTask;

          return { ...state, tasks: {...state.tasks, [updatedTask.id]: updatedTask} }
      }

      case ACTIONS.DELETE_TASK: {
        const boardId = action.payload.boardId;
        const taskId = action.payload.taskId;

        return deleteTask(state, taskId, boardId);
      }

      case ACTIONS.MOVE_TASK: {
        const source = action.payload.source;
        const destination = action.payload.destination;
        const draggableId = action.payload.draggableId;

        return moveTask(state, source, destination, draggableId);
      }
      
      case ACTIONS.MOVE_TASK_ACROSS_BOARD: {
        const source = action.payload.source;
        const destination = action.payload.destination;
        const draggableId = action.payload.draggableId;

        return moveTaskAcrossBoard(state, source, destination, draggableId);
      }
      
      case ACTIONS.CREATE_BOARD: {
        const boardTitle = action.payload.title;

        return createBoard(state, boardTitle);
      }

      case ACTIONS.UPDATE_BOARD: {
        const boardTitle = action.payload.title;
        const boardId = action.payload.boardId;

        return { ...state, boards: { ...state.boards, [boardId]: { ...state.boards[boardId], title: boardTitle } } }
      }

      case ACTIONS.DELETE_BOARD: {
        const boardId = action.payload.boardId;

        return deleteBoard(state, boardId)
      }

      default:
        throw new Error();
    }
  }
