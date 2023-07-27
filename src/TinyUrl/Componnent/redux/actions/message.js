import * as actionType from '../actionsType';

export const addMessage = (message) => {
    return{
        type: actionType.ADD_MESSAGE,
        payload: message
    }
}

export const removeMessage = () => {
    return{
        type: actionType.REMOVE_MESSAGE
    }
}