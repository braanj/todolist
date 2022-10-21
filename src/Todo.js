const Todo = ({ todo, onDelete, onToggle, style }) => {
  let classes = 'todo-item'
  if (todo.checked) {
    classes += ' checked'
  }
  return (
    <li className={classes}>
      <input className="todo-checkbox" type='checkbox' onChange={onToggle} checked={todo.checked}></input>
      <span className="todo-text">{todo.text}</span>
      <button className="btn btn-remove" onClick={onDelete}>Remove</button>
    </li>
  )
}

export default Todo;