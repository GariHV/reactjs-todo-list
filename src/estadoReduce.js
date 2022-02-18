export const estadoReduce = (state, action) => {

    switch (action) {
        case "facil-true":
            state["oro"]= state["oro"]+1
            state["exp"]= state["exp"]+1
            setestado(state)
            break
        case "intermedio-true":
            state["oro"]= state["oro"]+2
            state["exp"]= state["exp"]+2
            setestado(state)
            break
        case "dificil-true":
            state["oro"]= state["oro"]+3
            state["exp"]= state["exp"]+3
            setestado(state)
            break
        case "facil-false":
            state["oro"]= state["oro"]-1
            state["exp"]= state["exp"]-1
            setestado(state)
            break
        case "intermedio-false":
            state["oro"]= state["oro"]-2
            state["exp"]= state["exp"]-2
            setestado(state)
            break
        case "dificil-false":
            state["oro"]= state["oro"]-3
            state["exp"]= state["exp"]-3
            setestado(state)
            break
        default:
    }

}
