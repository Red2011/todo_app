export interface Board{
    name: string,
    todo: Todo[]
}

export interface Todo {
    title: string,
    text: string
}