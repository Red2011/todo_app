import Todo from "../interfaceTodo";


export default function Remove_task(index:number, todos:Todo[]) {
    return [...todos.slice(0, index), ...todos.slice(index + 1)]
}

