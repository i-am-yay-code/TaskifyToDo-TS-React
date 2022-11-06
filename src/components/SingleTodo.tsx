import React, { useState } from 'react'
import { Todo } from '../model';
import { FiEdit2 } from 'react-icons/fi'
import { AiOutlineDelete } from "react-icons/ai"
import { MdOutlineDone } from "react-icons/md"
import "./SingleTodo.css"

interface Props {
    todo: Todo
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

function SingleTodo({ todo, todos, setTodos }: Props) {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, seteditTodo] = useState<string>(todo.todo);

    const handleDone = (id: number) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                if (todo.isDone) {
                    todo.isDone = false;
                }
                else {
                    todo.isDone = true;
                }
            }
            return todo
        }))
    }


    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => {
            if (todo.id !== id) {
                return (todo)
            }
        }))

    }

    const handleEdit = (event: React.FormEvent, id: number) => {
        event.preventDefault()

        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                todo.todo = editTodo;
            }
            return todo
        }))
        setEdit(false);
    }


    return (
        <form className='todos__single' onBlur={(event) => handleEdit(event, todo.id)}>
            {
                edit ? (
                    <input
                        value={editTodo}
                        onChange={(event) => seteditTodo(event.target.value)}
                    />
                ) : todo.isDone ? (
                    <span className='todos__single__text done'>{todo.todo}</span>
                ) : (
                    <span className='todos__single__text'>{todo.todo}</span>
                )
            }
            <div className='todos__single__buttons'>
                <span className='icon' onClick={() => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit)
                    }
                }
                }>
                    <FiEdit2 />
                </span>
                <span className='icon' onClick={() => handleDelete(todo.id)}>
                    <AiOutlineDelete />
                </span>
                <span className='icon' onClick={() => handleDone(todo.id)}>
                    <MdOutlineDone />
                </span>
            </div>
        </form>
    )
}


export default SingleTodo