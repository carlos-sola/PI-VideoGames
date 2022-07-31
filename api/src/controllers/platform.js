require('dotenv').config();
const axios = require ('axios');
const {
    API_KEY
  } = process.env;


const platformController = {
    getPlatform: async(req,res)=>{
        try{
            const info = await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`) 
            const platform = info.data.results.map(e=>{
                return {name: e.name}
            })
            return res.status(200).send({result:platform})
        }catch(error){
           return res.status(500).send({error: error.message})
        }
    }
} ;
module.exports=platformController;