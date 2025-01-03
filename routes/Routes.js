//routes for admins
//import section
const express = require("express")

//Controllers import 
const { loginCheck } = require("../controllers/adminControllers")
const { userLogin, createAccount } = require("../controllers/usersControllers");
const { getAllGames, getGameById, getGameByName } = require("../controllers/gamesControllers");
//object 
const routes = express.Router();
//routes definations 
routes.get("/",(req,res)=>{
    return res.send({message : "Hello"})
})
//admin
routes.post("/admin-login", loginCheck)

//users
routes.post("/user-login", userLogin)
routes.post("/create-account", createAccount)

//games card 
routes.get("/get-games",getAllGames)
routes.get("/get-game/:id",getGameById)
routes.get("/get-game-name/:game_name",getGameByName)

module.exports = { routes }