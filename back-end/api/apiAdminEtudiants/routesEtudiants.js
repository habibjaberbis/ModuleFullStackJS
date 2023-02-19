const express = require('express');
const etudiant = require('./adminEtudiants')


const routes = express.Router()

//Recuperer la liste de tous les etudiants
routes.get('/', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT, POST,DELETE');
    res.header("Content-Type", "application/json; charset=UTF-8");
    res.header("Access-Control-Max-Age", "3600");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Access-Control-Allow-Methods, Authorization, X-Requested-With");

    etudiant.selectEtudiants(req, res)
})

//Recuperer un etudiant par son ID 
routes.get('/:id', (req, res) => {
    res.send('Recuperer un etudiant par son ID')
})


//Ajouter un nouvel etudiant
routes.post('/', (req, res) => {
    etudiant.AjoutNouvelEtudiant(req, res)
})


//Mettre a jour l'etudiant identifie par son ID
routes.patch('/etudiants/:id', (req, res) => {
    res.send("Mettre a jour l'etudiant identifie par son ID")
})

//Supprimer/Archiver l'etudiant identifie par son id
routes.delete('/etudiants/:id', (req, res) => {
    res.send("Supprimer/Archiver l'etudiant identifie par son id")
})





module.exports = routes;