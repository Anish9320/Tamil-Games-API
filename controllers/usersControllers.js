//users Controllers
//import 
const { connection } = require("../config/dbConnection")

const userLogin = (req, res) => {
    const { username, password } = req.body;

    if (Object.keys(req.body).length <= 0) {
        return res.status(500).send({ error: "username / password required!" })
    }

    connection.query("SELECT * FROM users WHERE username = ? AND password = ?",
        [username, password],
        (error, result, fields) => {
            if (error) {
                return res.status(500).send(error)
            }
            else if (result.length <= 0) {
                return res.status(404).send({ message: "user not found! (Note: check username / password maybe incorrect!)" })
            }
            else {
                if (result[0].status == 0) {
                    return res.status(200).send({ status: "OK", message: "Valid!", result })
                }
                return res.status(500).send({ error: "Already Logged in!" })
            }
        }
    )
}



//create user
const createAccount = (req, res) => {
    const { username, password } = req.body;

    if (Object.keys(req.body).length <= 0) {
        return res.status(500).send({ error: "username / password required!" })
    }
    connection.query("INSERT INTO users(status,username,password,cart_id) VALUES (?,?,?,?)",
        [0,username,password,null],
        (error,result,fields)=>{
            if(error){
                return res.status(500).send({message: "User Already Exists!",error})
            }
            return res.status(201).send({message : "User created!", result})
        }
    )
}


//carts baadme
module.exports = { userLogin, createAccount }