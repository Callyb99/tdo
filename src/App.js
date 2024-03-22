import { useState } from "react"

function App() {
  const [query, setQuery] = useState('')
  const [todo, setTodo] = useState([])

  function addTodo() {
    if(!query) return
    setTodo([...todo, {
      item: query,
      id: Date.now().toLocaleString(),
      isDone: false,
    }])
   setQuery('')
  }

  function deleteTodo(id) {
     const newList = todo.filter(todo=> todo.id !== id)

     setTodo(newList)
  }
  return <div className="container">
  <h1>To-do List</h1>
  <input type="text" value={query} onChange={e=>setQuery(e.target.value)} id="taskInput" placeholder="Enter task..." />
  <button onClick={addTodo} >Add</button>
  <ul id="taskList">

{todo.map(todo =>
  <li key={todo.id}>
    <span>{todo.item}</span>

    <span>
      <button onClick={()=>deleteTodo(todo.id)} >Delete</button>
    </span>
</li>)}
  {/*  */}
  </ul>
</div>
}

export default App