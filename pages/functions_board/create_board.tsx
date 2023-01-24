import Board from "../interfaceBoard";

export default function Create_board(List_items:Board[]){
    let board:string[] = [];
    List_items.map((boards)=> {
        board.push(boards.name.toString());
    })
    return board
}

