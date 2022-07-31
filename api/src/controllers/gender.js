require('dotenv').config();
const { Gender } = require('../db');
const axios = require ('axios');
const { v4: uuidv4 } = require("uuid");
const {
    API_KEY
  } = process.env;

  const genderController = {
      getAll:async (req,res)=>{
        try{
            const countDb= await Gender.count();
            const info = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
            let arrayGenres=info.data.results.map(p=>{
                return {name:p.name}
            });
            if(countDb===0){
                for(let i=0; i<arrayGenres.length;i++){
                    const newId = uuidv4();
                    arrayGenres[i].id= newId;
                    await Gender.create(arrayGenres[i]);
                }
                return res.status(200).send({result:arrayGenres});
            } else{
                res.status(200).send({result: arrayGenres});
            }
         }catch(error){
             res.status(500).send({error: error.message})
         } 
    },
 
  };

  module.exports=genderController;