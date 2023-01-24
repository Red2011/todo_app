import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import BoardList from "./api/BoardList.json";
import {toast} from "react-toastify";
import Remove_task from "./functions_task/remove_task";
import Create_task from "./functions_task/create_task";
import Add_task from "./functions_task/add_task";
import Todo from "./interfaceTodo";



export default function Id_Func () {
    //const [currentUrl, setUrl] = useState('')
    //const [loaded, setLoaded] = useState(false)

    // useEffect(()=>{
    //     if (loaded) return ;
    //     setUrl((prev) =>  decodeURIComponent(window.location.href.split('/').reverse()[0].replace(/%20/gi, ' ')))
    //     setLoaded(true)
    // },[loaded])

    // let board:string[] = []
    // BoardList.map((boards)=> {
    //         if (boards.name==currentUrl){
    //             for(let key in boards.to do){
    //                 // @ts-ignore
    //                 board.push(boards.to do[key])
    //             }
    //         }
    // })
    // ** unused code
    const [todos, setTodos] = useState<Todo[]>([])
    const [value , setValue] = useState('');
    const router = useRouter()

    //const currentUrl = decodeURIComponent(router.asPath).slice(1)
    const {board} = router.query
    useEffect(() => {
        if (!router.isReady) {
            return
        }
        setTodos(Create_task(BoardList, String(board)))
    }, [board, router.isReady])

    return (
        <div className="m-4 flex flex-col items-center">
            <div className="bg-red-500 text-center h-16 flex justify-center items-center w-full max-w-2xl rounded-2xl
            bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-400 to-pink-600
            text-slate-200 font-semibold bg-400% animate-bg-gradient-slow-4">{board}</div>
            <div className="mt-4 flex justify-center h-8 w-full max-w-2xl rounded-2xl">
                <input maxLength={510} className="outline-cyan-500 ml-2 grow-[3] border-2 w-1 border-amber-500 rounded-2xl pl-2" placeholder="task..." value={value} onChange={event => setValue(event.target.value)}/>
                <button className="mr-2 ml-2 grow-[1] text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br
                 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg
                 shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg"
                        onClick={() => {
                            if (value != "" && value[0] != " "){
                                setTodos(Add_task(value, todos))
                                toast(`Task ${todos.length + 1} added`)
                            }
                            setValue('')
                        }}>
                    Add task
                </button>
            </div>
            <div className="mt-4 flex flex-col justify-center items-center">
                <ul>
                    {todos.map((task:Todo, index) =>{
                        return (
                            <li data-testid={task.text} className="mt-1 h-28 w-96 flex justify-center items-center" key={index}>
                                <div className="rounded-2xl mr-1 h-24 w-[340px] overflow-y-scroll scroll-none p-2 text-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-semibold">
                                    {task.title}: {task.text}
                                </div>
                                <button data-testid={`btn-${task.text}`} onClick={() => {setTodos(Remove_task(index, todos)); toast(`${task.title} deleted`)}} title="Remove Task" className="flex items-center justify-center h-8 w-[30px] rounded-[50%] Pastel bg-gradient-to-tr from-violet-500 to-orange-300 animate-pulse">
                                    <div  className="w-[1em] h-[1em] clip-crest bg-neutral-900 cursor-pointer hover:opacity-70"></div>
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )

}





