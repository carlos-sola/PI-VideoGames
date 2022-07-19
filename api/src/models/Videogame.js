const { DataTypes, ENUM } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,          
    },
    description:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
    releasDate:{
      type: DataTypes.DATE
    },
    rating:{
      type: DataTypes.FLOAT
    },
    platform:{
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
  },{
    timesTamps:false
  });
};
// ID: * No puede ser un ID de un videojuego ya existente en la API rawg
// Nombre *
// Descripción *
// Fecha de lanzamiento
// Rating
// Plataformas *