import { useContext, useState } from 'react';
import { UserContext, ACTIONS } from '../UserContext/UserContext';
import { PlusIcon, XIcon } from "@heroicons/react/outline";
import { IconButton, Button } from '@material-ui/core';


export default function Header() {
    const { userData, dispatch } = useContext(UserContext);
    const numOfBoards = userData.boardOrder.length; 
    const numOfTasks= Object.keys(userData.tasks).length;
    const [isModalOpen, setIsModalOpen] = useState(false)

    return( 
     <div className="w-full border-b-2 grid grid-cols-2 border-gray-200 py-2 px-2">
         <div className="text-2xl self-center mx-4 justify-self-start">Kanban</div>
        <div className="justify-end flex flex-cols">
            <div className="mx-2 text-xl self-center ">Boards: {numOfBoards}</div>
            <div className="mx-2 text-xl self-center">Tasks: {numOfTasks}</div>
            <IconButton onClick={() => setIsModalOpen(!isModalOpen)} >
                <PlusIcon className="relative self-center w-5 h-5" />            
            </IconButton>
            { isModalOpen ? <AddBoardModal dispatch={dispatch} numOfBoards={numOfBoards} setIsModalOpen={setIsModalOpen} />: "" }
        </div>
     </div>
    )
}


function AddBoardModal({ setIsModalOpen, numOfBoards, dispatch }) {
    const [newBoardTitle, setNewBoardTitle] = useState("")
    
    const clickAddBoard = () => {
        if (!newBoardTitle) return;
        dispatch({ 
            type: ACTIONS.CREATE_BOARD, 
            payload: { title: newBoardTitle } 
        });
        setNewBoardTitle("");
        setIsModalOpen(false);
    }
    return(
    <div className="fixed text-gray-500  flex items-center justify-center overflow-auto z-50 bg-black bg-opacity-40 left-0 right-0 top-0 bottom-0">
        <div className="bg-white p-7 flex flex-col rounded-lg text-black">
            
            <div className="grid grid-cols-2 w-full">
                <button className="justify-self-start w-6 h-6 relative" 
                    onClick={() => setIsModalOpen(false)}>
                        <XIcon className="ml-2 h-5 w-5 mx-2 text-gray-700 hover:text-black" />
                </button>         
            </div>                    
            
            <p className="text-center mt-2 mb-1">NEW BOARD</p>
            <p className="text-center text-gray-500 text-xs mb-2">You have {numOfBoards} boards, currently.</p>
          
            <input 
                className="w-60 bg-gray-50 text-gray-800 p-2 mt-1 mb-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-transparent rounded"
                placeholder="new board title.." 
                value={newBoardTitle} 
                onChange={(e) => setNewBoardTitle(e.target.value)}
                onKeyPress={(e) => (e.key === 'Enter') ? clickAddBoard() : null} />
            
            <Button 
                variant="contained"
                style={{boxShadow: "none"}}
                className={`rounded w-min justify-self-end`}
                onClick={clickAddBoard}> 
                    Add 
            </Button>

        </div>
    </div>
    )
}
