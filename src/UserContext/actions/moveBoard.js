
export default function moveBOard(userState, boardId, direction) {

    const newBoardOrder = userState.boardOrder;
    const index = newBoardOrder.indexOf(boardId);    

    if (direction === "right") {
        [newBoardOrder[index], newBoardOrder[index + 1]] = [newBoardOrder[index + 1], newBoardOrder[index]]
    } else if (direction === "left") {
        [newBoardOrder[index], newBoardOrder[index - 1]] = [newBoardOrder[index - 1], newBoardOrder[index]]
    }

    const newState = {
      ...userState,
      boardOrder: newBoardOrder
    };
    return newState;
}
