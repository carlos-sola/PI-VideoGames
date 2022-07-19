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
            const info = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
            const infoApi = info.data.results.map(el=>{
                return {
                    id:el.id,
                    name:el.name,
                    description:el.description,
                    releasDate: el.released,
                    rating: el.rating,
                    platform: el.platforms.map(e=>{
                        return e.platform.name
                    }),
                    image: el.background_image
                }
            })
            if(infoDataBase.length){
                const totalInfo= {results:infoDataBase.concat(infoApi)};
               return res.status(200).send(totalInfo);
            }else{
               return res.status(200).send({results:infoApi});
            }
            
        }catch(error){
            res.status(500).send({error: error.message})
        } 
         },
      createVideogame : async(req,res)=>{
          const{name,description,releasDate,rating,platform,image}=req.body;
          try{
            if(name&&description&&platform){
                const id = uuidv4();
                const newVideogame= await Videogame.create({
                    id:id,
                    name:name,
                    description:description,
                    releasDate:releasDate,
                    rating:rating,
                    platform:platform,
                    image:image
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