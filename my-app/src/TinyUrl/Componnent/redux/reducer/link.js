import * as actionType from '../actionsType';

const initState = {
    arrLink:[],
}

// export const fetchLinks = () => {
//     return async (dispatch) => {
//       try {
//         // Make an API call to fetch the links from the server
//         // const response = await axios.get('/api/links'); // Replace '/api/links' with your actual API endpoint
//         const reaponse = axios.get(`http://localhost:3000/users/getlinks/${email}`,{headers:{Authorization: `Bearer ${token}`}})
//         // .then(res=>{
//          console.log('res',res)
//         //  setLinks(res.data)
//         // })
//         // .catch(console.log('error useEffect of myurl'))
//         // Dispatch an action to save the fetched links to the store
//         dispatch({
//           type: actionType.SAVE_ALL_LINK,
//           payload: response.data,
//         });
//       } catch (error) {
//         // Handle any errors that occur during the API call
//         console.log('Error fetching links:', error);
//       }
//     };
//   };

const postReducer = (state=initState,action) => {
    switch(action.type)
    {
        case actionType.ADD_LINK:
            let copy = [...state.arrLink,action.payload]
            return{
                ...state,
                arrLink: copy,
            }
        case actionType.SAVE_ALL_LINK:
            return{
                ...state,
                arrLink: action.payload
            }    
        case actionType.DELETE_LINK:
            let arr = state.arrLink.filter(item=>item.id!=action.payload)
            return{
                ...state,
                arrLink: arr
            }    
            // case actionType.FETCH_LINKS:
            // return{
            //     ...state,
            //     arrLink: arr
            // }    
    }
    return state;
}
export default postReducer;