export default function deleteTask(userState, taskId, boardId) {

    const newTasks = userState.tasks;
    delete newTasks[taskId]
    
    const newTaskIds = userState.boards[boardId].taskIds  
    const index = newTaskIds.indexOf(taskId);  
    newTaskIds.splice(index, 1);

    const newState = {
      ...userState,
      tasks: newTasks,
      boards: {
          ...userState.boards,
          [boardId]: { 
              ...userState.boards[boardId],
              taskId: newTaskIds
          }
      }
    };
    return newState;
}
