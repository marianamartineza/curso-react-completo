import { TodoItem } from "./TodoItem"

// desestructurar de la properties la accion onDeleteTodo
export const TodoList = ({todos = [], onDeleteTodo}) => {
  return (
    <>
        <ul className="list-group">
            {
                todos.map( todo => (
                  //Se realiza el llamado a la funcion con el id del todo
                    <TodoItem 
                      key={todo.id} 
                      todo={todo} 
                      onDeleteTodo = {id => onDeleteTodo(id)}
                    />
                ))
            }       
        </ul>
    </>
  )
}
