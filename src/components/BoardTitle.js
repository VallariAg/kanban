import { useState, useContext } from 'react';
import { DotsVerticalIcon, TicketIcon, CheckIcon } from "@heroicons/react/outline";
import { UserContext, ACTIONS } from '../UserContext/UserContext'; 


export default function BoardTitle({title, boardId}) {
    const { dispatch } = useContext(UserContext)
    const [isDropdownOpen, setisDropdownOpen] = useState(false);
    const [isEditMode, setisEditMode] = useState(false);
    const [boardTitle, setBoardTitle] = useState(title);
  
  
    const onEditBoard = () => {
        if (title === boardTitle) {
            setisEditMode(false);
            return; 
        }
        dispatch({ 
            type: ACTIONS.UPDATE_BOARD, 
            payload: { title: boardTitle, boardId } 
        });
        setisEditMode(false);
    }
    return (
      <div className="py-3 px-2 grid grid-cols-4 w-full bg-blue-100">
        { isEditMode ? 
            <div className="col-span-3 flex flex-cols">
                <input 
                    className="w-48 py-1 px-2 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent rounded-lg"
                    value={boardTitle} 
                    onChange={(e) => setBoardTitle(e.target.value)}
                    onKeyPress={(e) => (e.key === 'Enter') ? onEditBoard() : null}
                 />
                <button 
                    className="px-2" 
                    onClick={onEditBoard}  >
                        <CheckIcon className="ml-2 h-5 w-5 mx-2 text-gray-700 hover:text-black" />
                </button>
            </div>:
            <div className="mx-1 text-gray-800 col-span-3 font-semibold"> {(boardTitle).toUpperCase()} </div>
        }
        <div className="col-span-1 justify-self-end">
            <button onClick={() => setisDropdownOpen(!isDropdownOpen)}>
              <DotsVerticalIcon className="ml-2 h-5 w-5 mx-2 text-gray-700 hover:text-black" />
            </button>
            {isDropdownOpen ?
              <ul class="dropdown-menu absolute text-gray-800 pt-1 x-100">
                <li class="rounded-t text-gray-800 bg-white hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap"
                    onClick={() => { setisEditMode(!isEditMode); setisDropdownOpen(false)} }>
                        Edit
                </li>
                <li class="text-gray-800 bg-white hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap"
                    onClick={() => {}}>
                        Sort (Low to High)
                </li>
                <li class="text-gray-800 bg-white hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap"
                    onClick={() => {}}>
                        Sort (High to Low)
                </li>
                <li class="rounded-b text-red-800 bg-red-300 hover:bg-red-600 hover:text-white py-2 px-4 block whitespace-no-wrap"
                    onClick={() => {}}>
                        Delete
                </li>
              </ul>: ""}
        </div>
      </div>
    )
  }
