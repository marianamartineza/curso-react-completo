import { useTodo } from "../hooks/useTodo";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";



//componente react completo
export const TodoApp = () => {

    const {todos, handleDeleteTodo, handleNewTodo, handleToggleTodo} = useTodo();

    //las llamadas  a las funciones que controlan el reducer se hacen mediante props
    return (
        <> 
            <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={todos} 
                        onDeleteTodo = {handleDeleteTodo}
                        onToggleTodo = {handleToggleTodo}
                    />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd 
                        onNewTodo={handleNewTodo}
                    />
                </div>
            </div>
        </>
    )
}
