import { useState } from "react"
import TodoCard from "./TodoCard"

const TodoApp = () => {

  const [title, setTitle] = useState('')
  const [todos, setTodos] = useState([])


  function handleSubmit(e) {
    e.preventDefault()

    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    }

    console.log(newTodo)
    setTodos([...todos, newTodo])
  }

  function handleChange(e) {
    const value = e.target.value
    setTitle(value)
  }

  function handleOnUpdate(id, value){
    const temp = [...todos]
    const item = temp.find(item => item.id === id)
    item.title = value
    setTodos(temp)
  }

  function handleDelete(id){
    const temp = todos.filter(item => item.id !== id);
    setTodos(temp)
  }

  return (
    <div className='todoContainer'>
      <form action="" className='todoCreateForom' onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text"  className='todoInput' value={title}/>
        <input type="submit" value="create todo" className='btnCreate' onClick={handleSubmit}/>

      </form>
      
      <div className="todosContainer">
        {
          todos.map(todo => (
            <TodoCard key={todo.id} todo={todo} onUpdate={handleOnUpdate} onDelete={handleDelete}/>
          ))
        }
      </div>
    </div>
  )
}

export default TodoApp