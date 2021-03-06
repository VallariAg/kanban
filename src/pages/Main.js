import React, { useContext } from 'react';
import BoardColumn from "../components/BoardColumn";
import { DragDropContext } from 'react-beautiful-dnd';
import { UserContext, ACTIONS } from './../UserContext/UserContext';


export default function Main() {
    const { userData, dispatch } = useContext(UserContext);

    return (
        <div className="mx-1">
            <BoardList userData={userData} dispatch={dispatch} />
        </div>
    )
}

function BoardList({userData, dispatch}) {

    const onTaskDragEnd = ({ destination, source, draggableId }) => {
        /**
         * dragging a task
         * @param {String} draggableId [ID of task that moved, 'task-1]
         * @param {Object} source [Task's original BoardID and index, { droppableId: 'board-2', index: 0 }]
         * @param {Object} destination [Task's final BoardID and index, { droppableId: 'board-1', index: 0 }]
         */
    
        if (!destination) {
          return;
        }

        // no change in task's place
        if (
          destination.droppableId === source.droppableId &&
          destination.index === source.index
        ) return;
        
        // Moving within same list
        if (source.droppableId === destination.droppableId) {
            dispatch({type: ACTIONS.MOVE_TASK, payload: { source, destination, draggableId }});
            return;
        }

        // Moving from one list to another
        dispatch({type: ACTIONS.MOVE_TASK_ACROSS_BOARD, payload: { source, destination, draggableId }});       
      };

    return (
        <DragDropContext onDragEnd={onTaskDragEnd}>
            <div className="flex flex-rows" style={{overflowX: "scroll", height: "80vh"}}>
            {
                userData.boardOrder.map((boardID, index) => {
                    const board = userData.boards[boardID];
                    const tasks = board.taskIds.map((taskID) => userData.tasks[taskID]);
                    
                    return (<BoardColumn key={index} tasks={tasks} board={board} />)
                })
            }
            </div>
        </DragDropContext>
    )
}
