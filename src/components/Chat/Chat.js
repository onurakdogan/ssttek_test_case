import React, { useEffect, useState,useRef } from 'react';

import sound from "../../assets/audio/send-message.mp3";
const audio = new Audio();

function Chat({socket}) {

 
    const messageEl = useRef(null);
    const [value,setValue] = useState("");
    const [messageList,setMessageList] = useState([])
    const [typingBot,setTypingBot] = useState(null);

    useEffect(()=>{
        
        if(messageEl){
            messageEl.current.addEventListener('DOMNodeInserted', event => {
              const { currentTarget: target } = event;
              target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
            });
        }

        socket.on("botResponse",(messageFromBot)=>{
            setMessageList((prev)=>[...prev,messageFromBot])
        })
       
    },[socket])

    socket.on("typingBot",(data)=>{
        data ? setTypingBot(true) : setTypingBot(false)
    })

    const typingMessage = (e) => {
          setValue(e.target.value)
    }
    
    const sendMessage = async () => { 
        const message = {
            isBotty:false,
            message:"first message"
        }
        socket.emit("message",message)
        setMessageList((prev)=>[...prev,message])
        setValue("")
        audio.src = sound
        audio.play(); 
    }

    return (
        <div>
           <input placeholder='username' value={value} name="message" onChange={(e)=>{typingMessage(e)}}/> 
           <button onClick={sendMessage}>Send</button>
            Messages :
            <div ref={messageEl} style={{display:"flex",flexDirection:"column",maxHeight:"100px",backgroundColor:"#ddd",overflowY:"scroll"}}>
            {
                messageList.map((item,index)=>(
                    <div key={index}>
                        {item.message}
                    </div>
                ))
            }
            </div>

            {
                typingBot ? <div>Typing ... </div> : null
            }
        </div>
    );
}

export default Chat;