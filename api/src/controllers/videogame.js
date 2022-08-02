require('dotenv').config();
const { Videogame,Gender } = require('../db');
const axios = require ('axios');
const { v4: uuidv4 } = require("uuid");
const validator = require('validator');
const {
    API_KEY
  } = process.env;

  const videogameController = {
      getById: async(req,res)=>{
        const {idVideogame}=req.params;
        
        try{
            if(validator.isUUID(idVideogame)){
            const foundById = await Videogame.findByPk(idVideogame,{include:Gender});
                if(foundById){
                    return res.status(200).send({res: foundById})  
                }else{
                    return res.status(502).send('No se encontró el videogame ')}
            }else{
                const foundIdApi = await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`);
                if(foundIdApi){
                    return res.status(200).send({res: foundIdApi.data}) 
                }else{
                    return res.status(500).send('No encontrado') 
                }
            }
        }catch(err){
            return res.status(501).send({err:err.message})
        }
      },
      getAll : async (req,res)=>{
          const {name}=req.query;
          let infoDataBase;
          let info;
          let infoApi;
        try{
            if(name){
                info = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`);
                infoDataBase= await Videogame.findAll({include:Gender});
                infoDataBase=infoDataBase.filter(p=>{
                    return p.name.toLowerCase().includes(name.toLowerCase())})
            }else{
                infoDataBase = await Videogame.findAll({include:Gender});
            info = await axios.get(`https://api.rawg.io/api/games?page_size=50&key=${API_KEY}`);
            }
            
            infoApi = info.data.results.map(el=>{
                return {
                    id:el.id,
                    name:el.name,
                    description:el.description,
                    releasDate: el.released,
                    image:el.background_image,
                    rating: el.rating,
                    platform: el.platforms.map(e=>{
                        return e.platform.name
                    }),
                    genders: el.genres.map(e=>{
                        return {name:e.name}
                    }) ,
                    
                }
            });
                const totalInfo= {results:infoDataBase.concat(infoApi)};
               return res.status(200).send({totalInfo});    
        }catch(error){
            res.status(500).send({error: error.message})
        } 
     },


      createVideogame : async(req,res)=>{
          const{name,description,releasDate,rating,platform,image,gender}=req.body;
          try{
            if(!name||!description||!platform){
                res.status(404).send({msg:"Faltan campos obligatorios"});
            }
            const id = uuidv4();
            const newVideogame= await Videogame.create({
                id:id,
                name:name,
                description:description,
                releasDate:releasDate,
                rating:rating,
                platform:platform,
                image:image     
                });
             if (gender&&gender.length) {
                let genderDb =[]
                for(let i=0;i<gender.length;i++){
                    let foundGenders = await Gender.findOne({where:{
                        name:gender[i]
                        }});
                    genderDb.push(foundGenders)
                } 
                await newVideogame.addGenders(genderDb)    
            }
             return res.status(200).send(newVideogame);
          }catch(err){
              res.status(500).send({err:err.message})
          }
          
      }   

  };

  module.exports = videogameController;