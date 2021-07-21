
export default function createBoard(userState, boardTitle) {

    const boardID = String("board-" + userState.num_of_boards + 1);
    const newBoard = { 
        id: boardID, 
        title: boardTitle, 
        taskIds: []
    } 

    const newBoardOrder = Array.from(userState.boardOrder);
    newBoardOrder.splice(userState.num_of_boards, 0, boardID);

    const newState = {
      ...userState,
      num_of_boards: userState.num_of_boards + 1,
      boards: {
        ...userState.boards,
        [newBoard.id]: newBoard,
      },
      boardOrder: newBoardOrder
    };
    return newState;
}
