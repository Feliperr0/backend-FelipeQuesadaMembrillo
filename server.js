import express from "express";
import "dotenv/config.js"

const server = express()
const PORT = process.env.PORT

const ready = ()=> console.log("Server perrito ready in port: " +PORT)

server.get('/',(request,response) =>{
    response.send('Hola mundo en Express')
})
server.get('/saludo', (request,response) =>{
    response.send('hola tonotos')
})

server.listen(PORT, ready)

