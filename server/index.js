const express  = require("express")
const cors = require("cors")
const http = require("http")
const {Server} = require("socket.io")

const app = express()
app.use(cors())

const server = http.createServer(app)

const io = new Server(server,{
    cors:{
        origin:"http://localhost:3000",
        methods:["GET","POST"]  
    }
})

io.on("connection",(socket)=>{
    socket.on("message",(data)=>{
        console.log("received message : ",data)
        socket.emit('botResponse',{message:"Hi! My Name's Botty"})
    })
})

const PORT = 1117

server.listen(PORT,()=>{
    console.log(`server is runnig ${PORT}`)
})