//MODULES
import dotenv from "dotenv"
dotenv.config()

import express from 'express'
import cors from 'cors'
//LOCAL
import config from './config'
import userRouter from './users/user_router'
import cookie from 'cookie-parser'


const app = express()
const PORT = config.API_PORT || 9000

let whiteList = [ config.API_SERVER, config.CLIENT_SERVER ]
let corsOrigin = {
    origin: whiteList,
}

app.use(cors(corsOrigin))
app.use(express.json())
app.use(cookie())
app.use('/user', userRouter)

app.listen(PORT, ()=>console.log(`server started on port: ${PORT}`))