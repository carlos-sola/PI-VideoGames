import axios from 'axios';
export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES"
export const GET_VIDEOGAME_DETAIL ="GET_VIDEOGAME_DETAIL";
export const CREATE_VIDEOGAME = "CREATE_VIDEOGAME";
export const GET_VIDEOGAME_BY_NAME = "GET_VIDEOGAME_BY_NAME";
export const SET_MENU = "SET_MENU";
export const FILTER_BY_GENDER = "FILTER_BY_GENDER";
export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN";
export const SORT_A_Z = "SORT_A_Z";
export const RESET_FILTER = "RESET_FILTER"

export function getAllVideogames(){
    return async function (dispatch) {
        const json = await axios.get("http://localhost:3001/videogame");
        return dispatch({
            type: GET_ALL_VIDEOGAMES,
            payload: json.data.totalInfo.results
        })
    }
};
export const getVideogameDetail =(id) => {
    return async (dispatch) => { 
          const json = await axios.get (`http://localhost:3001/videogame/${id}`)
          return  dispatch({ 
            type: GET_VIDEOGAME_DETAIL, 
            payload: json.data.res });
    };
  };
  export function createVideogame(payload){
    return function(dispatch){
        return axios.post(`http://localhost:3001/videogame/`,payload)
            .then((response)=>{
                return response;
            })
}
}
  
export const getVideogameByName =(name) => {
  return async (dispatch) => { 
        const json = await axios.get (`http://localhost:3001/videogame/?name=${name}`)
        return  dispatch({ 
          type:GET_VIDEOGAME_BY_NAME , 
          payload: json.data.totalInfo.results });
  };
};
export const getGenders = () =>{
  return axios.get ("http://localhost:3001/gender/")
};
 export const getPlatforms = () =>{
   return axios.get ("http://localhost:3001/platform/")
 };
  export const setMenu = (value)=>{
    return (dispatch) =>{
      return dispatch ({
        type: SET_MENU,
      payload: value
      }) 
    }
  }
  export function filterByGender (payload){
    return {
      type:FILTER_BY_GENDER,
      payload
    }
  }
  export function filterByOrigin(payload){
    return{
      type:FILTER_BY_ORIGIN,
      payload
    }
  }
  export function sortAtoZ(payload){
    return{
      type:SORT_A_Z,
      payload
    }
  }
  export function resetFilter(payload){
    return{
      type:RESET_FILTER,
      payload
    }
  }
