import { useState, useContext, useEffect } from 'react';
import { DotsVerticalIcon, CheckIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/outline";
import { UserContext, ACTIONS } from '../UserContext/UserContext'; 
import { Menu, MenuItem } from '@material-ui/core';

export default function BoardTitle({title, boardId}) {
    const { dispatch } = useContext(UserContext);
    const [isDropdownOpen, setisDropdownOpen] = useState(false);
    const [isEditMode, setisEditMode] = useState(false);
    const [boardTitle, setBoardTitle] = useState(title);
    const [menuButton, setMenuButton] = useState("");
    
  
    useEffect(() => {
        setBoardTitle(title);            
    }, [title]);

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
    <>
      <div className="py-3 px-2 w-full bg-gray-200 text-lg">
        { isEditMode ? 
            <div className="flex flex-cols">
                <button 
                    className="px-2" 
                    onClick={() => moveBoard("left")}  >
                        <ChevronDoubleLeftIcon className="h-4 w-4 font-bold hover:text-gray-600 text-black" />
                </button>
                <input 
                    className="w-40 py-1 px-2 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent rounded-lg"
                    value={boardTitle} 
                    onChange={(e) => setBoardTitle(e.target.value)}
                    onKeyPress={(e) => (e.key === 'Enter') ? onEditBoard() : null}
                 />
                <button 
                    className="px-2" 
                    onClick={() => moveBoard("right")}  >
                        <ChevronDoubleRightIcon className="h-4 w-4 hover:text-gray-600 text-black" />
                </button>
                <button 
                    className="px-2" 
                    onClick={onEditBoard}  >
                        <CheckIcon className="h-5 w-5 hover:text-gray-600 text-black" />
                </button>
            </div>:
            <>
                <div className="grid grid-cols-10">
                    <div className="mx-1 col-span-9 text-gray-600 col-span-3 font-semibold"> {(boardTitle).toUpperCase()} </div>        
                    <div className="col-span-1 justify-self-end">
                        <button onClick={(e) => {setisDropdownOpen(!isDropdownOpen); setMenuButton(e.target)}}>
                          <DotsVerticalIcon className="ml-2 h-5 w-5 mx-2 text-gray-600 hover:text-black" />
                        </button> 
                        <Menu
                          keepMounted
                          open={isDropdownOpen}
                          className="m-0 lg:-ml-36 lg:mt-8 -ml-8 mt-8"
                          onClose={() => setisDropdownOpen(false)}
                          anchorEl={menuButton}
                        >
                          <MenuItem onClick={() => {setisEditMode(!isEditMode); setisDropdownOpen(false);}}>Edit</MenuItem>
                          <MenuItem onClick={() => onSortDscBoard("ascending")}>Sort (low to high)</MenuItem>
                          <MenuItem onClick={() => onSortDscBoard("descending")}>Sort (high to low)</MenuItem>
                          <MenuItem onClick={onDeleteBoard}>Delete</MenuItem>
                        </Menu>
                    </div>
                </div>
            </>}
      </div>
    </>
  )
}
