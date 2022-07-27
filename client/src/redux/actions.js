import axios from 'axios';
export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES"
export const GET_VIDEOGAME_DETAIL ="GET_VIDEOGAME_DETAIL";
export const CREATE_VIDEOGAME = "CREATE_VIDEOGAME";


export function getAllVideogames(){
    return async function (dispatch) {
        const json = await axios.get("http://localhost:3001/videogame");
        return dispatch({
            type: GET_ALL_VIDEOGAMES,
            payload: json.data
        })
    }
};
export const getVideogameDetail =(id) => {
    return async (dispatch) => { 
          const json = await axios.get (`http://localhost:3001/videogame/:${id}`)
          return  dispatch({ 
            type: GET_VIDEOGAME_DETAIL, 
            payload: json.data });
    };
  };
  export const createVideogame = function (values) {
    return { type: CREATE_VIDEOGAME, payload: values }
  };
  
