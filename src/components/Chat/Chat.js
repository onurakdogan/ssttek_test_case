import React, { useEffect, useState } from 'react';

function Chat({socket}) {
    const [messageList,setMessageList] = useState([])

    useEffect(()=>{
        socket.on("botResponse",(messageFromBot)=>{
            setMessageList((prev)=>[...prev,messageFromBot])
        })
    },[socket])

    const sendMessage = async () => { 
        const message = {
            isBotty:false,
            message:"first message"
        }
        await socket.emit("message",message)
        setMessageList((prev)=>[...prev,message])

    }

    return (
        <div>
           <input placeholder='username'/> 
           <button onClick={sendMessage}>Send</button>
            Messages :
            {
                messageList.map((item,index)=>(
                    <div key={index}>
                        {item.message}
                    </div>
                ))
            }
        </div>
    );
}

export default Chat;