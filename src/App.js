import React, {useState} from 'react';
import './App.css';

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}} className='todo'>
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Completed</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  )
}

function TodoForm({addTodo}) {
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }
  return (
    <from onSubmit={handleSubmit}>
      <input className='input' type='text' placeholder='Add todo...' value={value} onChange={e => setValue(e.target.value)}/>
    </from>
  )

}

function App() {
  const [todos, setTodos] = useState([
    {
      text:'Learn some codes',
      isCompleted: false
    },
    {
      text:'Meet a friend',
      isCompleted: false
    },
    {
      text:'Drink regularly water',
      isCompleted: false
    }
  ])

  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos)
  };
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <div className='todo-list'>
        {todos.map((todo, index) => <Todo removeTodo={removeTodo} completeTodo={completeTodo} key={index} index={index} todo={todo}/>)}
        <TodoForm addTodo={addTodo}/>
      </div>
      
    </div>
  );
}

export default App;

