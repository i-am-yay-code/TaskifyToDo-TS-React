import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/todoList';
import { Todo } from './model';


const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
      setTodo("");
    }
    console.log(todos)
  }

  return (
    <div className='container App'>
      <h1>Taskify Todo</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
