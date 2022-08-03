
import validator from 'validator';
import {CREATE_VIDEOGAME,GET_VIDEOGAME_DETAIL,GET_ALL_VIDEOGAMES,GET_VIDEOGAME_BY_NAME,SET_MENU,FILTER_BY_GENDER,
    FILTER_BY_ORIGIN,SORT_A_Z,RESET_FILTER,SET_LOADING} from './actions'

const initialState = {
    allvideogames:[],
    showVideogames:[],
    videoGameDetail:{},
    menu:false,
    loading:false,

};
const rootReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_ALL_VIDEOGAMES:
            return{
                ...state,
                allvideogames: action.payload,
                showVideogames: action.payload,
                loading:false
            }
        case GET_VIDEOGAME_DETAIL:
            return {
                ...state,
                videoGameDetail: action.payload,
                loading:false
            }
        case CREATE_VIDEOGAME:
            return {
            ...state,
            products: state.allvideogames.concat(action.payload),
      }
      case GET_VIDEOGAME_BY_NAME :
          return{
              ...state,
              showVideogames: action.payload,
              loading:false
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
                    const filtered = action.payload==='All' ? allvg : allvg.filter(g=>{
                        if (action.payload === "Created"){
                            return validator.isUUID(g.id.toString())
                        } else {
                            return !validator.isUUID(g.id.toString())
                        }
                    })
                    return {
                        ...state,
                        showVideogames: [...filtered]
                    }
                    case SORT_A_Z:
                        const all = state.allvideogames
                        const sortAz = action.payload==='Z-A' ? all.sort((a,b)=>{
                            let A = a.name.toLowerCase();
                            let B = b.name.toLowerCase();
                            if(A == B) {
                                return 0; 
                              }
                            if(A > B) {
                                return -1;
                              }
                              if(A < B) {
                                return 1;
                              }
                              }) : action.payload==='A-Z' ? all.sort((a,b)=>{
                                let A = a.name.toLowerCase();
                                let B = b.name.toLowerCase();
                            if(A == B) {
                                return 0; 
                              }
                            if(A < B) {
                                return -1;
                              }
                              if(A > B) {
                                return 1;
                              }
                        }) : action.payload==='AscRating' ?  all.sort((a,b)=>{
                            let A = a.rating
                            let B = b.rating
                        if(A == B) {
                            return 0; 
                          }
                        if(A < B) {
                            return -1;
                          }
                          if(A > B) {
                            return 1;
                          }
                    }) : action.payload==='DescRating' &&  all.sort((a,b)=>{
                        let A = a.rating
                        let B = b.rating
                    if(A == B) {
                        return 0; 
                      }
                    if(A > B) {
                        return -1;
                      }
                      if(A < B) {
                        return 1;
                      }
                })
                        return {
                            ...state,
                            showVideogames: [...sortAz]
                        }
                        case RESET_FILTER:
                            const resetF = state.allvideogames
                            return {
                                ...state,
                                showVideogames: [...resetF]
                            }
                            case SET_LOADING:
                                return{
                                    ...state,
                                    loading: action.payload
                                }
    }
  
    return state
} 

export default rootReducer;