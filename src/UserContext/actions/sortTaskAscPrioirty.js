
export default function sortTaskAscPrioirty(userState, boardId) {

    const newTaskIds = userState.boards[boardId].taskIds;

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
