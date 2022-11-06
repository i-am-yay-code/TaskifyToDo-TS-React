import React from 'react'
import { Todo } from '../model';
import SingleTodo from './SingleTodo';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList = ({ todos, setTodos }: Props) => {
    return (
        <>
            {todos.map(todo => { return (<SingleTodo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />) })}
        </>
    )
}

export default TodoList;
