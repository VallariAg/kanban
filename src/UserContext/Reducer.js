import { ACTIONS } from "./UserContext";
// actions
import moveTask from "./actions/movetask";
import moveTaskAcrossBoard from "./actions/moveTaskAcrossBoard";
import createTask from "./actions/createTask";
import createBoard from "./actions/createBoard";



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

      default:
        throw new Error();
    }
  }
