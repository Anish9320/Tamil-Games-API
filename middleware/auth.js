//middleware to check auth using key
require("dotenv").config()
const authCheck = (req,res,next) =>{
    const authKey = req.headers['auth'];

    if(authKey !== process.env.AUTH){
        return res.status(403).send({message : "Authentication Failed"})
    }
    next()
}

module.exports = { authCheck }