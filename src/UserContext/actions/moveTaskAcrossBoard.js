
export default function moveTask(state, source, destination, draggableId) {
    
    const fromBoard = state.boards[source.droppableId];
    const toBoard = state.boards[destination.droppableId];

    const fromBoardTaskIds = Array.from(fromBoard.taskIds);
    fromBoardTaskIds.splice(source.index, 1);

    const newfromBoard = {
      ...fromBoard,
      taskIds: fromBoardTaskIds,
    };

    const toBoardTaskIds = Array.from(toBoard.taskIds);
    toBoardTaskIds.splice(destination.index, 0, draggableId);
    const newtoBoard = {
      ...toBoard,
      taskIds: toBoardTaskIds,
    };

    const newState = {
      ...state,
      boards: {
        ...state.boards,
        [newfromBoard.id]: newfromBoard,
        [newtoBoard.id]: newtoBoard,
      },
    };
    return newState;
}
