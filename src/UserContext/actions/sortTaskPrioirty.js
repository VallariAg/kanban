import { PRIORITY } from "../UserContext";


export default function sortTaskPrioirty(userState, boardId, sortType) {
    const PRIORITY_WEIGHT = { 
        [PRIORITY.LOW]: 1,
        [PRIORITY.MEDIUM]: 2, 
        [PRIORITY.HIGH]: 3, 
    }    
    const newTaskIds = userState.boards[boardId].taskIds;

    if(sortType === "ascending") {
        newTaskIds.sort((taskID1, taskID2) => (
            PRIORITY_WEIGHT[userState.tasks[taskID1].priority] - PRIORITY_WEIGHT[userState.tasks[taskID2].priority] 
        ))
    }
    else if (sortType === "descending") {
        newTaskIds.sort((taskID1, taskID2) => (
            PRIORITY_WEIGHT[userState.tasks[taskID2].priority] - PRIORITY_WEIGHT[userState.tasks[taskID1].priority] 
        ))
    }

    const newState = {
        ...userState,
        num_of_boards: userState.num_of_boards + 1,
        boards: {
          ...userState.boards,
          [boardId]: {
              ...userState.boards[boardId],
              taskIds: newTaskIds
          },
        },
      };
      return newState;
}
