import axios from 'axios';
export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES"
export const GET_VIDEOGAME_DETAIL ="GET_VIDEOGAME_DETAIL";
export const CREATE_VIDEOGAME = "CREATE_VIDEOGAME";
export const GET_VIDEOGAME_BY_NAME = "GET_VIDEOGAME_BY_NAME";
export const SET_MENU = "SET_MENU"

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
  export const createVideogame = function (name,description,image,releaseDate,rating,platform) {
    return { type: CREATE_VIDEOGAME, payload: name,description,image }
  };
  
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
  
