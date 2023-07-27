import * as actionType from '../actionsType';

const initState = {
    message: null
}

const messageReducer = (state=initState,action) => {
    switch(action.type)
    {
        case actionType.ADD_MESSAGE:
            return{
                message: action.payload
            }
        case actionType.REMOVE_MESSAGE:
            return{
                message: null
            }    
    }
    return state;
}

export default messageReducer;