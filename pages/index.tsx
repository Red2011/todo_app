import React, {useState} from "react";
import Link from "next/link";
import BoardList from './../pages/api/BoardList.json';
import {toast} from "react-toastify";





function MainPage () {
    let board:string[] = [];
    BoardList.map((boards)=> {
        board.push(boards.name.toString());
    })

    const [arr , setArr] = useState<string[]>(board)
    const [value , setValue] = useState('');


    const result = arr.map((element, index) => {

        return (

            <div className="flex flex-col justify-center items-center border-2 rounded mt-3 ml-3 h-28 w-28 rounded-2xl bg-gradient-to-r from-green-400 to-blue-500
             hover:from-pink-500 hover:to-yellow-500 text-white font-semibold bg-400% animate-bg-gradient-slow-2" key={index}>
                <div className="relative bottom-[40px] left-[40px] z-[2]">
                    <button onClick={() => {Remove_board(index); toast(`${element} deleted`)}} className="w-[1em] h-[1em] clip-crest bg-red-500 cursor-pointer hover:opacity-70"></button>
                </div>
                <Link className="z-[1] flex justify-center items-center absolute cursor-pointer p-2 w-24 h-20 break-all overflow-y-scroll scroll-none"
                      href={`${element}`}>{element}
                </Link>
            </div>

        )
    });

    function Remove_board (index:number) {
        setArr([...arr.slice(0, index), ...arr.slice(index + 1)]);
    }


    return (
        <>
            <div className="flex justify-center items-center flex-col mt-4">
                <div className="flex justify-around items-center w-full h-10 max-w-2xl rounded-2xl">
                    <input id="inp" value={value} onChange={event => setValue(event.target.value)}
                     // обработчик тела инпута
                    maxLength={50} className="outline-cyan-500 ml-2 grow-[3] border-2 w-1 border-amber-500 rounded-2xl pl-2" type="text" placeholder="something..."/>
                    <button id="button" type="reset" onClick={event => {
                        if(value!=""){
                            setArr([...arr, value]); toast(`${value} added`)}
                        }}
                    className="mr-2 ml-2 grow-[1] text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500
                    hover:bg-gradient-to-br  focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50
                    dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg">
                        Add board
                    </button>
                </div>
                <div className="flex justify-center items-center max-w-2xl flex-wrap">
                    {result}
                </div>
            </div>
        </>
    )
}

export default MainPage;