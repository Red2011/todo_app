import {describe, expect, test} from "@jest/globals";
import Add_board from "../pages/functions_board/add_board";
import Remove_board from "../pages/functions_board/remove_board";
import Create_board from "../pages/functions_board/create_board";


describe('Тест add', () => {
    test('Add board', () => {
      expect(Add_board(["a", "b", "c"], "d")).toEqual(["a", "b", "c", "d"])
      expect(Add_board([], "d")).toEqual(["d"])
    });

    test('Zero board', () => {
        expect(Add_board([], "d")).toEqual(["d"])
    });

    test('length board', () => {
        const array = ["я", "ты", "мне"];
        const new_array = Add_board(array, "новый элемент");
        expect(new_array.length > array.length).toBe(true)
    });

})

describe('Тест delete', () => {
    const array = ["homw", "bath", "kitch", "abob", "room", "equal"];
    test('Delete board', () => {
        expect(Remove_board(2, array)).toEqual(["homw", "bath",  "abob", "room", "equal"])
        expect(Remove_board(4, array)).toEqual(["homw", "bath", "kitch", "abob", "equal"])
        expect(Remove_board(6, array)).toEqual(["homw", "bath", "kitch", "abob", "room", "equal"])
    })
    test('Zero board', () => {
        expect(Remove_board(2, [])).toEqual([])
    })

    test('board lenght', () => {
        const array = ["я", "ты", "мне"];
        const new_array = Remove_board(2, array);
        expect(array.length > new_array.length).toBe(true)
    })

})

describe('create board', () => {
    const List = [
        {
            "name": "IsName",
            "todo": [
                { "title": "todo_1",
                    "text": "Первая задача"
                },
                {"title": "todo_2",
                    "text": "Вторая задача"
                }
            ]

        },
        {
            "name": "IsName2",
            "todo": [
                { "title": "todo_1",
                    "text": "Первая задача"
                },
                {"title": "todo_2",
                    "text": "Вторая задача"
                }
            ]

        }
    ];
    test('creation', () => {
       expect(Create_board(List)).toEqual(["IsName", "IsName2"]);
    });
    test('creation zero', () => {
        expect(Create_board([])).toEqual([]);
    });
    test('creation size', ()=>{
        let old_arr:string[] = [];
        const oldlength = old_arr.length
        const new_arr = Create_board([{"name": "O", "todo": []}, {"name": "n", "todo": []}, {"name": "e", "todo": []}])
        old_arr = new_arr;
        const newlength = old_arr.length
        expect(new_arr.length === old_arr.length).toBe(true);
        expect(new_arr.length > 0).toBe(true);
        expect(new_arr.length === 3).toBe(true);
        expect(old_arr).toEqual(["O", "n", "e"])
        expect(oldlength < newlength).toEqual(true)
    })

})