import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, toggleComplete } from '../redux/todoSlice'

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    // dispatch(toggleComplete({ id, completed: !completed }));
    dispatch(toggleComplete({ id }))
  }

  const handleDeleteClick = (e) => {
    e.stopPropagation()
    dispatch(deleteTodo({ id }))
  }

  return (
    <li className={`list-group-item ${completed && 'list-group-item-success'}`}>
      <div className='d-flex justify-content-between' onClick={handleCheckboxClick}>
        <span className='d-flex align-items-center'>
          <input type='checkbox' className='mr-3' checked={completed} readOnly></input>
          {title}
        </span>
        <button className='btn btn-danger' onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
