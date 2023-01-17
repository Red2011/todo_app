import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import BoardList from "./api/BoardList.json";
import {toast} from "react-toastify";



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
    const [todos, setTodos] = useState<string[]>([])
    const [value , setValue] = useState('');
    const router = useRouter()

    const currentUrl = decodeURIComponent(router.asPath).slice(1)
    useEffect(() => {
        if (!router.isReady) {
            return
        }
        let t:string[] = []
        const currentBoard: Board = BoardList.find(o => o.name === currentUrl) as Board
        if (currentBoard != undefined){
            currentBoard.todo.map((items)=>{
                t.push(items.text)
                setTodos(t)
            })
        }
    }, [currentUrl, router.isReady])



    function Remove_task (index:number) {
        setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
    }
    return (
        <div className="m-4 flex flex-col items-center">
            <div className="bg-red-500 text-center h-16 flex justify-center items-center w-full max-w-2xl rounded-2xl
            bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-400 to-pink-600
            text-slate-200 font-semibold bg-400% animate-bg-gradient-slow-4">{currentUrl}</div>
            <div className="mt-4 flex justify-center h-8 w-full max-w-2xl rounded-2xl">
                <input maxLength={510} className="outline-cyan-500 ml-2 grow-[3] border-2 w-1 border-amber-500 rounded-2xl pl-2" placeholder="task..." value={value} onChange={event => setValue(event.target.value)}/>
                <button className="mr-2 ml-2 grow-[1] text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br
                 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg
                 shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg"
                        onClick={() => {
                            if(value!="") {
                                setTodos([...todos, value]); toast("Task added")}
                        }}>
                    Add task
                </button>
            </div>
            <div className="mt-4 flex flex-col justify-center items-center">
                <ul>
                    {todos.map((task, index) =>{
                        return (
                            <li className="mt-1 h-28 w-96 flex justify-center items-center" key={index}>
                                <div className="rounded-2xl mr-1 h-24 w-[340px] overflow-y-scroll scroll-none p-2 text-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-semibold">
                                    {task}
                                </div>
                                <button onClick={() => {Remove_task(index); toast("Task deleted")}} title="Remove Task" className="flex items-center justify-center h-8 w-[30px] rounded-[50%] Pastel bg-gradient-to-tr from-violet-500 to-orange-300 animate-pulse">
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

export interface Board {
    name: string,
    todo: Todo[]
}

export interface Todo {
    title: string,
    text: string
}



