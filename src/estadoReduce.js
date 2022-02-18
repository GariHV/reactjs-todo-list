export const estadoReduce = (state, action) => {

    function pokedex(){
        return fetch('../public/evolucines.json')
      .then(response => response.json())
      .then(data => console.log(data));
    }

    switch (action) {
        case "facil":
            state["oro"]= state["oro"]+1
            state["exp"]= state["exp"]+1
            break
        case "intermedio":
            state["oro"]= state["oro"]+2
            state["exp"]= state["exp"]+2
            break
        case "dificil":
            state["oro"]= state["oro"]+3
            state["exp"]= state["exp"]+3
            break
        case "facil-":
            state["oro"]= state["oro"]-1
            state["exp"]= state["exp"]-1
            break
        case "intermedio-":
            state["oro"]= state["oro"]-2
            state["exp"]= state["exp"]-2
            break
        case "dificil-":
            state["oro"]= state["oro"]-3
            state["exp"]= state["exp"]-3
            break
        case "subirlvl":
            if(state["exp"]>= 10){
                if(state["lvl"]===0){
                    npokemon=Math.floor(Math.random() * (151 - 1)) + 1;
                    const pokedex=pokedex()
                    state["infoPoke"]=pokedex[npokemon]
                    state["poke"]=state["infoPoke"][1]
                }
                else if(state["lvl"]>0){
                    if(state["poke"]===state["infoPoke"]["1"]){
                        if(Object.keys(state["infoPoke"]).length>2){
                            if(state["lvl"]>=state["infoPoke"]["lvl1"]){
                                state["poke"]=state["infoPoke"]["2"]
                            }
                        }
                    }
                    if(state["poke"]===state["infoPoke"]["2"]){
                        if(Object.keys(state["infoPoke"]).length>4){
                            if(state["lvl"]>=state["infoPoke"]["lvl2"]){
                                state["poke"]=state["infoPoke"]["3"]
                            }
                        }
                    }
                }
            }
            break
        default:
    }

}
