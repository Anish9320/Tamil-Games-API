const {connection} = require("../config/dbConnection")


const getAllGames = (req,res) =>{
    
    //get all games from database!
    connection.query("SELECT * FROM games",
        (error,result,fields)=>{
            if(error){
                return res.status(500).send({message : error})
            }
            return res.status(200).send({status : "OK", result})
        })
        
}

const getGameById = (req,res) =>{
    //get the game by id 
    const id = req.params.id;

    if(isNaN(id)){
        return res.status(500).send({message : "required number!"})
    }

    connection.query("SELECT * FROM games WHERE game_id = ?",
        [id],
    (error,result,fields)=>{
        if(error){
            return res.status(500).send({message : error})
        }
        else if(Object.keys(result).length <= 0){
            return res.status(404).send({message : `No Game found with this id:${id}`})
        }
        else{
            return res.status(200).send({status : "OK", result})
        }
    })

}


const getGameByName = (req,res) =>{
    const gameName = req.params.game_name;

    connection.query("SELECT * FROM games WHERE game_title LIKE ?",
        [`%${gameName}%`],
    (error,result,fields)=>{
        if(error){
            return res.status(500).send({message : error})
        }
        else if(Object.keys(result).length <= 0 ){
            return res.status(404).send({message : `No game found! named as ${gameName}`})
        }
        else{
            return res.status(200).send({status : "OK",result})
        }
    })
    

}

module.exports = {getAllGames,getGameById,getGameByName}