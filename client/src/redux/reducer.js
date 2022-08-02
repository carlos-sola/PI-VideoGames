const { v4: uuidv4 } = require("uuid");
require('dotenv').config();
const validator = require('validator');
import {CREATE_VIDEOGAME,GET_VIDEOGAME_DETAIL,GET_ALL_VIDEOGAMES,GET_VIDEOGAME_BY_NAME,SET_MENU,FILTER_BY_GENDER,
    FILTER_BY_ORIGIN} from './actions'

const initialState = {
    allvideogames:[],
    showVideogames:[],
    videoGameDetail:{},
    menu:false,

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
        case SET_MENU:
            return{
            ...state,
            menu: action.payload
            }
            case FILTER_BY_GENDER:
                const allgames = state.allvideogames
                const genderFiltered = action.payload === 'All' ? allgames : allgames.filter(el=> {
                    return el.genders.map(g => g.name).includes(action.payload)
                })
                return{
                    ...state,
                    showVideogames : [...genderFiltered]
                }
                case FILTER_BY_ORIGIN:
                    const allvg = state.allvideogames
                    const filtered = allvg.filter(g=>{
                        if (action.payload === "Created"){
                            return validator.isUUID(g.id)
                        } else {
                            return !validator.isUUID(g.id)
                        }
                    })
                    return {
                        ...state,
                        showVideogames: [...filtered]
                    }
    }
  
    return state
} 

export default rootReducer;