import React from 'react';

function Chat({socket}) {
    
    socket.on("botResponse",(messageFromBot)=>{
        console.log("received message from bot : ",messageFromBot.message)
    })

    const sendMessage = () => {
        socket.emit("message",
          {message:"first message"}
        )
    }

    return (
        <div>
           <input placeholder='username'/> 
           <button onClick={sendMessage}>Send</button>
        </div>
    );
}

export default Chat;