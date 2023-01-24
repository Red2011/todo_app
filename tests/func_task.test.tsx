import {describe, expect, test} from "@jest/globals";
import Add_task from "../pages/functions_task/add_task";
import Create_task from "../pages/functions_task/create_task";
import Remove_task from "../pages/functions_task/remove_task";

const task = [
    { "title": "todo_1",
        "text": "Меня"
    },
    {"title": "todo_2",
        "text": "зовут"
    },
    {"title": "todo_3",
        "text": "Михаил"
    },
    {"title": "todo_4",
        "text": "Корчев"
    },
    {"title": "todo_5",
        "text": "Сергеевич"
    },
]

describe('add_test', () => {

    test('Add task', () => {
        expect(Add_task("не женат", task)).toEqual([...task, {"title":"todo_6", "text":"не женат"}])
    });

    test('Zero task', () => {
        expect(Add_task("первый элемент", [])).toEqual([{"title":"todo_1", "text":"первый элемент"}])
    });

    test('length task', () => {
        let now_lenght = task.length;
        let future_length = Add_task("new", task).length;
        expect(now_lenght < future_length).toBe(true)
        now_lenght = [].length;
        future_length = Add_task("new", []).length;
        expect(now_lenght < future_length).toBe(true)
    });
})

describe('create task', ()=>{
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
        expect(Create_task(List, "IsName2")).toEqual([{ "title": "todo_1", "text": "Первая задача"},{"title": "todo_2", "text": "Вторая задача"}]);
    });
    test('creation zero', () => {
        expect(Create_task(List, "IsName3")).toEqual([])
        expect(Create_task([], "")).toEqual([])
        expect(Create_task([{"name": "qq", "todo": [{"title":"todo", "text": "ww"}]}], "")).toEqual([])
        expect(Create_task([{"name": "qq", "todo": [{"title":"todo", "text": "ww"}]}], "q")).toEqual([])
        expect(Create_task([{"name": "qq", "todo": [{"title":"todo", "text": "ww"}]}], "qq")).toEqual([{"title":"todo", "text": "ww"}])
    });
    test('creation size', ()=>{
        let arr = [];
        const oldlength = arr.length;
        arr = Create_task(List, "IsName2")
        const newLength = arr.length
        expect(oldlength < newLength).toBe(true);
        arr = Create_task(List, "IsName3");
        const futurelength = arr.length;
        expect(oldlength === futurelength).toBe(true)
    })
})

describe('delete task', () => {
    test('delete function', ()=> {
        const arr_1 = Remove_task(2, task);
        expect(Remove_task(2, arr_1)).toEqual([
            { "title": "todo_1",
                "text": "Меня"
            },
            {"title": "todo_2",
                "text": "зовут"
            },
            {"title": "todo_5",
                "text": "Сергеевич"
            },
        ])
    });
    test('delete zero', ()=>{
        expect(Remove_task(0, [])).toEqual([])
    })
    test('delete length', ()=> {
        let arr = task;
        const old_length = arr.length;
        arr = Remove_task(0, arr);
        const now_length = arr.length
        expect(old_length > now_length).toBe(true)
    })
})