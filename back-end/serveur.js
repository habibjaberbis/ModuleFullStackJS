const express = require('express')
const cors=require('cors');
const  bodyParser = require('body-parser');
const connBaseDonnees = require('./configuration/connBDonnees')
const routesEtudiants = require('./api/apiAdminEtudiants/routesEtudiants')



// creer l'application express
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({origin:true,credentials: true}));

//Ajouter les  routes 
app.use('/etudiants', routesEtudiants)

//Se connecter a la base de donnees
console.log('ouvrireBaseDeDonnees')
connBaseDonnees.ouvrireBaseDeDonnees


// Demarrer l'ecoute sur le port 8080
app.listen(8080, () => {  console.log("Serveur à l'écoute port 8080") })