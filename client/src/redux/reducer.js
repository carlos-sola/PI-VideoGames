import {CREATE_VIDEOGAME,GET_VIDEOGAME_DETAIL,GET_ALL_VIDEOGAMES} from './actions'

const initialState = {
    allvideogames:[],
    showVideogames:[],

};
const rootReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_ALL_VIDEOGAMES:
            return{
                ...state,
                allvideogames: action.payload,
                showVideogames: action.payload
            }
        case GET_VIDEOGAME_DETAIL:
            return {
                ...state,
                showVideogames: action.payload,
            }
        case CREATE_VIDEOGAME:
            return {
            ...state,
            products: state.allvideogames.concat(action.payload),
      }

    }
    return state
} 

export default rootReducer;