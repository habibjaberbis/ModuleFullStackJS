CREATE TABLE TEtudiants(
   CIN VARCHAR(10),
   Nom VARCHAR(50) NOT NULL,
   Prenom VARCHAR(50) NOT NULL,
   Email VARCHAR(50),
   MotDePasse VARCHAR(250),
   Photo VARCHAR(500),
   DateDeNaissance DATE NOT NULL,
   createdAt DATETIME NOT NULL,
   updatedAt DATETIME NOT NULL,
   id VARCHAR(50),
   PRIMARY KEY(CIN)
);