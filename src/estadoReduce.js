export const estadoReduce = (state, action) => {
    const {oro, exp,vida,poke,infoPoke} = state[0]
    switch (action.type.toString()) {
        case "facil-true":
            return state.map( todo => 
                (+todo.oro === +todo.oro)
                ? {...todo, oro: oro+1, exp:exp+1}
                : todo
                );

        case "intermedio-true":
            return state.map( todo => 
                (+todo.oro === +todo.oro)
                ? {...todo, oro: oro+2, exp:exp+2}
                : todo
                );

        case "dificil-true":
            return state.map( todo => 
                (+todo.oro === +todo.oro)
                ? {...todo, oro: oro+3, exp: exp+3}
                : todo
                );

        case "facil-false":
            return state.map( todo => 
                (+todo.oro === +todo.oro)
                ? {...todo, oro: oro-1, exp: exp-1}
                : todo
                );

        case "intermedio-false":
            return state.map( todo => 
                (+todo.oro === +todo.oro)
                ? {...todo, oro: oro-2, exp: exp-2}
                : todo
                );


        case "dificil-false":
            return state.map( todo => 
                (+todo.oro === +todo.oro)
                ? {...todo, oro: oro-3, exp: exp-3}
                : todo
                );

        case "noComplet":
            return state.map( todo => 
                (+todo.vida === +todo.vida)
                ? {...todo, vida: vida-2}
                : todo
                );
        case "Pokemon":
            return state.map( todo => {
                return (todo === todo)
                ? {...todo, poke: action["estado"].poke,infoPoke: action["estado"].infoPoke}
                : todo
            });
        case "lvl":
            return state.map( todo => {
                return (todo === todo)
                ? {...todo,"lvl":action["lvl"]}
                : todo
            });
        default:
            return state;
    }

}
