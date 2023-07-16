import * as actionType from '../actionsType';

// export const fetchLinks = () => {
//     return{
//         type: actionType.FETCH_LINK,
//     }
// }

export const addLink = (link) => {
    return{
        type: actionType.ADD_LINK,
        payload: link
    }
}

export const deleteLink = (id) => {
    return{
        type: actionType.DELETE_LINK,
        payload: id
    }
}

export const saveAllLink = (linkList) => {
    return{
        type: actionType.SAVE_ALL_LINK,
        payload: linkList
    }
}