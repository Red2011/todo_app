import Todo from "../interfaceTodo";

export default function Add_task(value:string,todos:Todo[] ){
            if (todos.length > 0) {
                let regex_title = /-?\d+(\.\d+)?/g;//регулярка, которая выделяет только цифры
                return [...todos, {
                    text: value,
                    title: `todo_${Number(todos[todos.length - 1].title.match(regex_title)) + 1}`
                }]
            }
            else {
               return [...todos, {
                    text: value,
                    title: "todo_1"
                }]
            }
}
