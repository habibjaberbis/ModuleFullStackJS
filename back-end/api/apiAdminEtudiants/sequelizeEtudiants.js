const { Sequelize } = require("sequelize");
const {connBDonnees}  = require("../../configuration/connBDonnees")

const { DataTypes } = Sequelize;

const TEtudiants = connBDonnees.define('TEtudiants',{
    Nom:{
        type: DataTypes.STRING
    },
    Prenom:{
        type: DataTypes.STRING
    },
    Email:{
        type: DataTypes.STRING
    },

    MotDePasse:{
        type: DataTypes.STRING
    },
    CIN:{
        type: DataTypes.STRING
    },
      
    Photo:{
        type: DataTypes.STRING
    },
    DateDeNaissance:{
        type: DataTypes.DATEONLY 
    },
},{
    freezeTableName:true
});

module.exports = {TEtudiants};