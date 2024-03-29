

export const TodoItem = ({todo, onDeleteTodo, onToggleTodo}) => {
  return (
    <>
        <li className="list-group-item d-flex justify-content-between">
        <span 
          className={`align-self-denter ${ (todo.done) ? 'text-decoration-line-through': ''}`}
          onClick={() => onToggleTodo(todo.id)}
        >
          {todo.description}
        </span>
        <button 
          className="btn btn-danger"
          //en el boton borrar es que se va a llamar la accion a lo que se haga clic
          onClick={() => onDeleteTodo(todo.id)}
        >
            Borrar
        </button>
    </li>
    </>
  )
}
