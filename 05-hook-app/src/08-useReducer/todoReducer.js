
export const todoReducer = (initialState, action) => {

    switch (action.type) {
        case 'ABC':
            //pendiente de crear 
            throw new error('action.type = ABC no esta implementada');
    
        default:
            return initialState;
    }
}