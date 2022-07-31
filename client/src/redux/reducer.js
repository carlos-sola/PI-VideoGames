import {CREATE_VIDEOGAME,GET_VIDEOGAME_DETAIL,GET_ALL_VIDEOGAMES,GET_VIDEOGAME_BY_NAME} from './actions'

const initialState = {
    allvideogames:[],
    showVideogames:[],
    videoGameDetail:{},

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
                videoGameDetail: action.payload,
            }
        case CREATE_VIDEOGAME:
            return {
            ...state,
            products: state.allvideogames.concat(action.payload),
      }
      case GET_VIDEOGAME_BY_NAME :
          return{
              ...state,
              showVideogames: action.payload
          }

    }
    return state
} 

export default rootReducer;