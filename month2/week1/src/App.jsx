import React, { useState } from 'react'
import './App.css'
import Name from './Name'
import Counter from './Counter'
import ChangeCounter from './ChangeCounter'
import ToggleName from './ToggleName'

function App() {
  const [name, setName] = useState("")
  const [hidden, setHidden] = useState(false)
  const [todos, setTodos] = useState([{
    title: "todo1",
    description: "description1",
    done: false
  }, {
    title: "todo2",
    description: "description2",
    done: true
  }])
  const addTodo = (todo) => {
    setTodos([...todos, todo])
    setName("")
  }

  const deleteTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index))
  }

  const ToggleButton = () => {
    setHidden(!hidden)
  }

  const orderTODO = () => {
    const ordered = todos.sort()
    setTodos([...ordered])
  }

  return<>
    <input type="text" onChange={(e)=> setName(e.target.value)} value={name}/>
    <br />
    todos: {todos.map((todo, index) => 
     (<div>
      <p key={index} style={{color: `${todo.done ? "green" : "red"}`}}>{todo.title}</p>
      <button onClick={()=> deleteTodo(index)} >Delete</button>
   </div>)
    )}
    <button onClick={()=> addTodo({title: name, done: true})}>Add todo</button>
    <button onClick={orderTODO}>Order</button>
  </>
}

export default App
