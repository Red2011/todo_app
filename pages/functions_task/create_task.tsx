import {Board} from "../interfaces";

export default function Create_task(BoardList:Board[], board:string){
    const currentBoard: Board = BoardList.find(o => o.name === board) as Board
    if (currentBoard != undefined){
        return currentBoard.todo
    }
    else return []
}

