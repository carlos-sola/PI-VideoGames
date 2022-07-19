require('dotenv').config();
const { Videogame } = require('../db');
const axios = require ('axios');
const { v4: uuidv4 } = require("uuid");
const e = require('express');
const {
    API_KEY
  } = process.env;

  const videogameController = {
      getAll : async (req,res)=>{
        try{
            const infoDataBase = await Videogame.findAll();
            const info = await axios.get(`https://api.rawg.io/api/games?key=b58db537ed804e0fa0777e9a29ca101c`);
            const infoApi = info.data.results.map(el=>{
                return {
                    name:el.name,
                    description:el.description,
                    releasDate: el.released,
                    rating: el.rating,
                    platform: el.platform
                }
            })
            const totalInfo= {results:infoDataBase.concat(infoApi)};
            if(infoDataBase.length){
                res.status(200).send(totalInfo)
            }else{
                res.status(200).send(infoApi)
            }
            
        }catch(error){
            res.status(500).send({error: error.message})
        } 
         },
      createVideogame : async(req,res)=>{
          const{name,description,releasDate,rating,platform}=req.body;
          try{
            if(name&&description&&platform){
                const id = uuidv4();
                const newVideogame= await Videogame.create({
                    id:id,
                    name:name,
                    description:description,
                    releasDate:releasDate,
                    rating:rating,
                    platform:platform
                })
                res.status(200).send(newVideogame);
            }else{
                res.status(404).send({msg:"Faltan campos obligatorios"});
            }
          }catch(err){
              res.status(500).send({err:message})
          }
          
      }   

  };

  module.exports = videogameController;