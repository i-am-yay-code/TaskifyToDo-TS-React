import React from 'react'
import './InputField.css'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (event: React.SyntheticEvent) => void;
}



const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {

    return (
        <form className='input' onSubmit={handleAdd}>
            <input className='input__box'
                type={'text'}
                placeholder={"Enter a task here"}
                value={todo}
                onChange={(event) => setTodo(event.target.value)}></input>
            <button className='input__submit' type={'submit'}>Go!</button>
        </form>
    )
}

export default InputField