import { useContext, useState } from 'react';
import { UserContext, ACTIONS } from './../UserContext/UserContext';
import { PlusCircleIcon, XIcon } from "@heroicons/react/outline";


export default function AddNewBoard({numOfBoards}) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return(
     <div className="flex flex-columns"> 
        <button onClick={() => setIsModalOpen(!isModalOpen)}>
            <PlusCircleIcon className="relative self-center w-7 h-7" />            
        </button>
        { isModalOpen ? <AddBoardModal numOfBoards={numOfBoards} setIsModalOpen={setIsModalOpen} />: "" }
     </div>
    )
}


function AddBoardModal({ setIsModalOpen, numOfBoards }) {
    const { dispatch } = useContext(UserContext);
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
            
            <p className="text-center mt-2 mb-1">ADD BOARD</p>
            <p className="text-center text-gray-500 text-xs mb-2">You have {numOfBoards} boards, currently.</p>
          
            <input 
                className="w-60 shadow-gray-100 shadow-mg bg-gray-50 text-gray-800 p-2 mt-1 mb-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-transparent rounded"
                placeholder="new board title.." 
                value={newBoardTitle} 
                onChange={(e) => setNewBoardTitle(e.target.value)}
                onKeyPress={(e) => (e.key === 'Enter') ? clickAddBoard() : null} />
            
            <button className="bg-indigo-500 text-white rounded w-min py-1 justify-self-end px-3"
                        onClick={clickAddBoard}> Add </button>

        </div>
    </div>
    )
}
