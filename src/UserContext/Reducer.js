import { ACTIONS } from "./UserContext";
// actions
import moveTask from "./actions/movetask";
import moveTaskAcrossBoard from "./actions/moveTaskAcrossBoard";
import createTask from "./actions/createTask";



export default function reducer(state, action) {
    switch (action.type) {
      
      case ACTIONS.CREATE_TASK: {
        const taskTitle = action.payload.title;
        const boardId = action.payload.boardId;

        return createTask(state, taskTitle, boardId);
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
      
      default:
        throw new Error();
    }
  }
