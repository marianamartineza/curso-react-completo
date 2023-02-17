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
            
        default:
            return initialState;
    }
}