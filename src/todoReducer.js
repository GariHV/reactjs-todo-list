

export const todoReducer = (state = [], action) => {

    switch (action.type) {
        case 'add':
            return [...state, action.payload];
        case 'delete':
            console.log(action.playload);
            return state.filter( todo => todo.id !== action.payload);
        case 'edit':
            return state.map( todo => 
                (todo.id === action.payload.id)
                ? action.playload
                : todo
                );
        case 'toggle':
            return state.map(todo => 
            (todo.id === action.payload)
                ? {...todo, done: !todo.done}
                : todo
                );
        default:
            return state;
    }

}