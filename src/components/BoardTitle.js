import { useState, useContext, useEffect } from 'react';
import { DotsVerticalIcon, CheckIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/outline";
import { UserContext, ACTIONS } from '../UserContext/UserContext'; 


export default function BoardTitle({title, boardId}) {
    const { dispatch } = useContext(UserContext);
    const [isDropdownOpen, setisDropdownOpen] = useState(false);
    const [isEditMode, setisEditMode] = useState(false);
    const [boardTitle, setBoardTitle] = useState(title);
  
    useEffect(() => {
        setBoardTitle(title);            
    }, [boardId]);

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

    const onDeleteBoard = () => {
        dispatch({ 
            type: ACTIONS.DELETE_BOARD, 
            payload: { boardId } 
        });
        setisDropdownOpen(false);
    }

    const onSortDscBoard = (sortType) => {
        dispatch({ 
            type: ACTIONS.SORT_TASKS_PRIORITY, 
            payload: { boardId, sortType } 
        });
        setisDropdownOpen(false);
    }

    const moveBoard = (direction) => {
        dispatch({ 
            type: ACTIONS.MOVE_BOARD, 
            payload: { boardId, direction } 
        });
        setisDropdownOpen(false);
        setisEditMode(false);
    }

    return (
      <div className="py-3 px-2 w-full bg-gray-900 text-lg">
        { isEditMode ? 
            <div className="flex flex-cols">
                <button 
                    className="px-2" 
                    onClick={() => moveBoard("left")}  >
                        <ChevronDoubleLeftIcon className="h-3 w-3 text-white hover:text-black" />
                </button>
                <input 
                    className="w-40 py-1 px-2 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent rounded-lg"
                    value={boardTitle} 
                    onChange={(e) => setBoardTitle(e.target.value)}
                    onKeyPress={(e) => (e.key === 'Enter') ? onEditBoard() : null}
                 />
                <button 
                    className="px-2" 
                    onClick={onEditBoard}  >
                        <CheckIcon className="h-5 w-5 text-white hover:text-black" />
                </button>
                <button 
                    className="px-2" 
                    onClick={() => moveBoard("right")}  >
                        <ChevronDoubleRightIcon className="h-3 w-3 text-white hover:text-black" />
                </button>
            </div>:
            <div className="grid grid-cols-10">
                <div className="mx-1 col-span-9 text-white col-span-3 font-semibold"> {(boardTitle).toUpperCase()} </div>        
                <div className="col-span-1 justify-self-end" 
                    onMouseEnter={() => setisDropdownOpen(!isDropdownOpen)}
                    onMouseLeave={() => setisDropdownOpen(!isDropdownOpen)}>
                    <button onClick={() => setisDropdownOpen(!isDropdownOpen)}>
                      <DotsVerticalIcon className="ml-2 h-5 w-5 mx-2 text-white hover:text-black" />
                    </button>
                    {isDropdownOpen ?
                      <div class="fixed text-gray-800" style={{minWidth: "200px", marginLeft: "-11rem"}}>
                        <button class="rounded-t w-full text-gray-800 bg-white hover:bg-gray-700 hover:text-white py-1 px-3 block whitespace-no-wrap"
                            onClick={() => { setisEditMode(!isEditMode); setisDropdownOpen(false)} }>
                                Edit
                        </button>
                        <button class="w-full text-gray-800 bg-white hover:bg-gray-700 hover:text-white py-1 px-3 block whitespace-no-wrap"
                            onClick={() => onSortDscBoard("ascending")}>
                                Sort (Low to High)
                        </button>
                        <button class="w-full text-gray-800 bg-white hover:bg-gray-700 hover:text-white py-1 px-3 block whitespace-no-wrap"
                            onClick={() => onSortDscBoard("descending")}>
                                Sort (High to Low)
                        </button>
                        <button class="w-full rounded-b text-red-800 bg-red-300 hover:bg-red-600 hover:text-white py-1 px-3 block whitespace-no-wrap"
                            onClick={onDeleteBoard}>
                                Delete
                        </button>
                      </div>: ""}
                </div>
        </div>}
      </div>
    )
  }
