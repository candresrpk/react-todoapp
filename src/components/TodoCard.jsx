import React, { useState } from 'react'

const TodoCard = ({ todo, onUpdate, onDelete }) => {

    const [isEdit, setIsEdit] = useState(false)

    

    function FormEdit() {
        const [newValue, setNewValue] = useState(todo.title)

        function handleSubmit(e) {
            e.preventDefault()
        }
    
        function handleChange(e) {
            const value = e.target.value
            setNewValue(value)
        }
    
        function handleClick(e) {
            onUpdate(todo.id, newValue)
            setIsEdit(false)
        }

        return (
            <form action="" className='todoUpdateForm' onSubmit={handleSubmit}>
                <input type="text" className='todoInput' onChange={handleChange} value={newValue} />
                <button className='button' onClick={handleClick}>Updata</button>
            </form>
        )
    }

    function TodoElement() {
        return(
        <div className='todoInfo'>
            <h2>{todo.title}</h2>
            <button onClick={() => setIsEdit(true)}>Editar</button>
            <button onClick={e => onDelete(todo.id)}>Eliminar</button>
        </div>)
    }

    return (
        <div className="todo">

            {isEdit
                ? <FormEdit/>
                : <TodoElement/>
            }

        </div>


    )
}

export default TodoCard