const  {Sequelize} = require("sequelize")

const connBDonnees = new Sequelize('depInfo', 'root', '', {host: "localhost", dialect: "mysql"});

const ouvrireBaseDeDonnees = async (req, res) => {
    // Se connecter a la base de donnees
    try {
        console.log('Inialisation de la base de donnees en cours ....');
        await connBDonnees.authenticate();
        console.log('Inialisation de la base de donnees ok');
    } catch (error) {
        console.error(error);
    }
}

module.exports={connBDonnees, ouvrireBaseDeDonnees}

