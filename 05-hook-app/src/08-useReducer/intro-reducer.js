//estado inicial
const initialState = [
    {
        id: 1,
        todo: 'comprar queso',
        done: false
    }
];

const todoReducer = ( state = initialState, action = {}) => {

    //regresar un nuevo estado
    if(action.type === '[TODO] add todo'){
        //no se puede mutar, la forma correcta es usar el spread para heredar sus propiedades ...
        return [...state, action.payload];
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'comprar pan',
    done:false
};

const addTodoAction = {
    type: '[TODO] add todo', //string sepa cual es la accion correpondiente
    payload: newTodo //carga de cambio? 
}

todos = todoReducer( todos, addTodoAction );

console.log({state: todos});