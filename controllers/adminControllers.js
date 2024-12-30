//admin Controllers
//import 
const { connection } = require("../config/dbConnection")

const loginCheck = (req, res) => {
    const { username, password } = req.body;
    if (Object.keys(req.body).length <= 0) {
        return res.status(500).send({ error: "username and password requied!" })
    }

    connection.query("SELECT * FROM admin", 
        (error , result, fields)=>{
            if(error){
                return res.status(500).send(error)
            }
            else{
                if(username != result[0].username || password != result[0].password){
                    return res.status(401).send({message : "invalid username / password!"})
                }
                return res.status(200).send({status: "OK",message : "Valid!"})
            }
        })
}

module.exports = { loginCheck }