

export default function Remove_board(index:number, arr:string[]){
   return [...arr.slice(0, index), ...arr.slice(index + 1)];
}