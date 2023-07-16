import * as actionType from '../actionsType';

export const addUser = (user) => {
    return{
        type: actionType.ADD_USER,
        payload: user
    }
}

export const deleteUser = (id) => {
    return{
        type: actionType.DELETE_USER,
        payload: id
    }
}

export const saveAllUser = (signUp) => {
    return{
        type: actionType.SAVE_ALL_USER,
        payload: signUp
    }
}
