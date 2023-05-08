
const MessageList = require("../src/utils/Api/Messages/MessageList");

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

io.on("connection", async (socket)=>{
        
    const sendRandomMessage = async () => {
      
          let index = Math.floor((Math.random() * (MessageList.length-1))+0)
          const message = {
            isBotty:true,
            message:MessageList[index].name 
          }
    
          socket.emit('botResponse',message);
    }
    
     
    socket.emit('botResponse',{isBotty:true,message:MessageList[0].name});


    socket.on("message",async (data)=>{

        socket.emit("typingBot", true);
        await new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * 3000)+1000));
        await sendRandomMessage();
        socket.emit("typingBot",false);

    })

    socket.on("play",(data)=>{
       io.emit("play",data)
    })

})

const PORT = 1117

server.listen(PORT,()=>{
    console.log(`server is runnig ${PORT}`)
})