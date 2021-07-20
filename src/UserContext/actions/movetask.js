
export default function moveTask(state, source, destination, draggableId) {
    
    const fromBoard = state.boards[source.droppableId];

    const newTaskIds = Array.from(fromBoard.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newBoard = {
      ...fromBoard,
      taskIds: newTaskIds,
    };

    const newState = {
      ...state,
      boards: {
        ...state.boards,
        [newBoard.id]: newBoard,
      },
    };
    return newState;
}
