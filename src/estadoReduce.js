export const estadoReduce = (state, action) => {
    console.log(state);
    console.log(action);
    switch (action.type) {
        case "facil-true":
            state["oro"]= state["oro"]+1
            state["exp"]= state["exp"]+1

            break
        case "intermedio-true":
            state["oro"]= state["oro"]+2
            state["exp"]= state["exp"]+2

            break
        case "dificil-true":
            state["oro"]= state["oro"]+3
            state["exp"]= state["exp"]+3

            break
        case "facil-false":
            state.oro= state.oro-1
            state["exp"]= state["exp"]-1

            break
        case "intermedio-false":
            state["oro"]= state["oro"]-2
            state["exp"]= state["exp"]-2

            break
        case "dificil-false":
            state["oro"]= state["oro"]-3
            state["exp"]= state["exp"]-3

            break
        default:
    }

}
