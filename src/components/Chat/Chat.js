import React from 'react';

function Chat({socket}) {

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