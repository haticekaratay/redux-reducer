export function managePresents(state, action){
    state = {
        numberOfPresents: 0
    }

    if(action.type === "INCREASE"){
        return {numberOfPresents: state.numberOfPresents + 1}
    }else{
        return state
    }

}
