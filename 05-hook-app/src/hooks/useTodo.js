import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    //hook useReducer
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    //cuando los todos cambian hay q ejecutar un  efecto secundario 
    useEffect(() => {
      localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos]);
    

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

    //al hacer click marcar como completada el todo
    const handleToggleTodo = (id) => {
        // console.log({id})
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
        
    }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length
    }

}