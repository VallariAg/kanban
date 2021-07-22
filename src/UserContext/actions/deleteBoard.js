
export default function deleteBoard(userState, boardId) {

    const newTasks = userState.tasks;
    userState.boards[boardId].taskIds.map((taskId) => {
        delete newTasks[taskId]
    })  

    const newBoards = userState.boards;
    delete newBoards[boardId];
    
    const newBoardOrder = Array.from(userState.boardOrder);
    const index = newBoardOrder.indexOf(boardId);    
    newBoardOrder.splice(index, 1);

    const newState = {
      ...userState,
      tasks: newTasks,
      boards: newBoards,
      boardOrder: newBoardOrder
    };
    return newState;
}
