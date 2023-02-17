//el reducer de la aplicacion se controla con el switch case
export const todoReducer = (initialState, action) => {

    switch (action.type){
        //accion agregar nuevo todo
        case '[TODO] Add Todo':
            return [ ...initialState, action.payload]
        
        //accion eliminar un todo mediante su id
        case '[TODO] Remove Todo':
            //el filter controla los datos que contiene y devuelven un arreglo diferente no lo muta como el push
            return initialState.filter( todo => todo.id != action.payload)
        
        case '[TODO] Toggle Todo':
            //map regresa un nuevo arreglo
            return initialState.map( todo => {
                
                if( todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            });
            
        default:
            return initialState;
    }
}