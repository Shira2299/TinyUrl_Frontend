import * as actionType from '../actionsType';

const initState = {
    arrUser: [],
}

const postReducer = (state=initState,action) => {
    
    switch(action.type)
    {
        case actionType.ADD_USER:
            let copy = [...state.arrUser,action.payload]
            return{
                ...state,
                arrUser: copy,
            }
        case actionType.SAVE_ALL_USER:
            return{
                ...state,
                arrUser: action.payload
            }    
        case actionType.DELETE_USER:
            let arr = state.arrUser.filter(item=>item.id!=action.payload)
            return{
                ...state,
                arrUser: arr
            }    
    }
    return state;

}

export default postReducer;