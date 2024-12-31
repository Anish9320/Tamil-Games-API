//import sections
require("dotenv").config()
const express = require("express")
const { connection } = require("./config/dbConnection")
const { authCheck } = require("./middleware/auth")
const { routes } = require("./routes/Routes")
const cors = require('cors')

//ends here

const app = express()

app.use(cors({
    origin : 'http://localhost:3000',
    methods : 'GET,POST,PUT,DELETE'
}))
//middleware
app.use(authCheck) //auth
app.use(express.json()) //to handle data
app.use(express.urlencoded({ extended: false })) //to handle data
//database connection(done)
connection.connect(
    (error) => {
        if (error) {
            console.error("Database error!: ", error)
        }
        else {
            console.log("Database Connection Created!")
        }
    }
)
app.use("/api",routes)
//server here
app.listen(process.env.PORT || 8000, () => { console.log("Server Running") })