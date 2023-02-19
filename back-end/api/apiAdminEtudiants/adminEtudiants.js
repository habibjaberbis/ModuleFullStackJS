const {TEtudiants} = require('./sequelizeEtudiants');


const selectEtudiants = async(req, res) => {
    try {
        const listEtudiants = await TEtudiants.findAll()
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT, POST,DELETE');
        res.header("Content-Type", "application/json; charset=UTF-8");
        res.header("Access-Control-Max-Age", "3600");
        res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Access-Control-Allow-Methods, Authorization, X-Requested-With"); 
        res.json(
            {
                'status': 201,
                'message': 'list of selected students', 
                'data':listEtudiants
            });
    } catch (error) {
        res.json(
            {
                status: 501,
                message: 'error',
                data:error
            });
    }
}



const AjoutNouvelEtudiant = async(req, res) => {
  
    const {CIN,Nom,Prenom,Email,MotDePasse,DateDeNaissance} = req.body

    try {
        await TEtudiants.create({
            Nom,
            Prenom,
            Email,
            MotDePasse,
            CIN,
            DateDeNaissance
        });
        res.json(
            {
                'status': 201,
                'message': 'successfully added student' 
            });
    } catch (error) {
        res.json(
            {
                'status': 501,
                'message': 'error',
                'data':error
            });
        console.log(error);
    }
}
//feater for update student information
/*
export const UpdateStudent = async (req,res)=>{
    const {cin,email,photo_profile,password} = req.body

    try{
        await Etudiant.update({
            email: email,
            photo_profile: photo_profile,
            password:password
          }, { where: { cin: cin }});
          res.json({msg:"update succefull"})

    }catch(error){
        res.json({msg:"update denied"})


    }
}

// feature for delete user and archivage
export const DeleteArchivage = async(req, res) => {
    const cin = req.body.cin;
try {
    const student = await Etudiant.findAll({
        where:{
            cin: cin
        }
 
    });
    
    await ArchiveEtudiant.create({
        nom:student[0].nom,
        prenom :student[0].prenom,
        email: student[0].email,
        password: student[0].password,
        code_inscrit: student[0].code_inscrit,
        cin: student[0].cin,
        libelle_classe:student[0].libelle_classe,
        photo_profile:student[0].photo_profile,
        dateDeNaissance:student[0].dateDeNaissance
    });
    await Etudiant.destroy({ where: { cin: cin }} )
    res.json("student deleted and added in university archives")
}catch(error){
    console.log("student not found in student list")
}
}


// feature for authentification student
export const SignInStudent = async(req, res) => {
    const { email , password } = req.body;
    if(email && password){      
        const student = await Etudiant.findAll({
            where:{
                email: req.body.email
            }})

        if(!student){
            res.status(401).json({message:"No such student found ", student:email})
        }
        const userId = student[0].id;
        const email = student[0].email;
        if(student[0].password == password){
            const token = jwt.sign({userId,email}, "thhhahhhhhahhhhhahhhhhahahahh", {
                expiresIn: "7d",
            });
            res.json({message:'ok',token:token})
        }
        else{
            res.status(401).json({message:'Password is incorrect!'})
        }
    }

}
*/

module.exports = {selectEtudiants, AjoutNouvelEtudiant}