const express = require ('express')
const connectDB = require('./Config/ConnectDB')
const contactRouter = require('./Routes/Contact')
const app = express()

//const port = 5000 /*Replace with*/
require('dotenv').config()

connectDB()

app.use(express.json())

app.use('/api/Contact',contactRouter)

/*Replace port with*/
app.listen(process.env.port, console.log(`Server is running on the port ${process.env.port}`))