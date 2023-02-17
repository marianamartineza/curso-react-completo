import { useEffect, useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

//preferible usar la funcion initializer en el useReducer 
const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del alma',
    //     done: false,
    // },
];

//funcion inicializar el reducer a partir del almacenamiento local
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

//componente react completo
export const TodoApp = () => {

    //hook useReducer
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    //cuando los todos cambian hay q ejecutar un  efecto secundario 
    useEffect(() => {
      localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos])
    

    //acciones especificas del useReducer que se usan para controlarlo enviandolo a traves del dispatch

    //guardar un nuevo todo
    const handleNewTodo = (todo) => {

        // console.log({todo});
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch(action);
    }

    //borrar un todo
    const handleDeleteTodo = (id) => {
        // console.log({id});
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

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
