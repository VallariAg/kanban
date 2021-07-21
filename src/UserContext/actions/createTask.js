import { PRIORITY } from "../UserContext";

export default function createTask(userState, taskTitle, boardId) {

    const board = userState.boards[boardId];
    const taskID = String("task-" + userState.num_of_tasks + 1);
    const newTask = { id: taskID, priority: PRIORITY.MEDIUM, title: taskTitle } 

    const newTaskIds = Array.from(board.taskIds);
    newTaskIds.splice(0, 0, taskID);

    const newBoard = {
      ...board,
      taskIds: newTaskIds,
    };

    const newState = {
      ...userState,
      num_of_tasks: userState.num_of_tasks + 1,
      tasks: {
        ...userState.tasks,
        [taskID]: newTask,
      },
      boards: {
        ...userState.boards,
        [newBoard.id]: newBoard,
      },
    };
    return newState;
}
