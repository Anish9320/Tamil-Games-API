//middleware to check auth using key

const authCheck = (req,res,next) =>{
    const authKey = req.headers['auth'];

    if(authKey !== "ZjVGZPUtYW1hX2FuZHJvaWRfMjAyMzY0MjU="){
        return res.status(403).send({message : "Authentication Failed"})
    }
    next()
}

module.exports = { authCheck }