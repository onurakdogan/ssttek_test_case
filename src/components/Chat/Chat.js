import React, { useEffect, useState,useRef } from 'react';
import {connect} from 'react-redux';

import {addMessage,getMessage,getTyping} from '../../store/actions/Messages/Messages';
import { userList } from '../../utils/Api/Users/UserList';
import sound from "../../assets/audio/send-message.mp3";
const audio = new Audio();

function Chat(props) {
    const {messages,getMessage,latestMessage,isTyping} = props.MessagesToProps ;  
    const {socket} = props;
 
    const messageEl = useRef(null);
    const [role,setRole] = useState("");

    const [value,setValue] = useState("");
    const [messageList,setMessageList] = useState([]);
    const [typingBot,setTypingBot] = useState(null);

    useEffect(()=>{
        
        if(messageEl){
            messageEl.current.addEventListener('DOMNodeInserted', event => {
              const { currentTarget: target } = event;
              target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
            });
        }

        socket.on("botResponse",(messageFromBot)=>{
            props.addMessage(messageFromBot)

        })

        socket.on("typingBot",(data)=>{
            data ? props.getTyping(true) : props.getTyping(false)

        })
        
       
    },[])

    const typingMessage = (e) => {
          setValue(e.target.value)
    }
    
    const sendMessage = async () => { 
        const message = {
            isBotty:false,
            message:value
        }
        socket.emit("message",message)
        props.addMessage(message)
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
                messages.map((item,index)=>(
                    <div key={index}>
                        {item.message}
                    </div>
                ))
            }
            </div>
 

            {
                isTyping ? <div>Typing ... </div> : null
            }
                latest message : 
            {
                latestMessage
            }
        </div>
    );
}


const mapStateToProps = (state) => ({ 
    MessagesToProps: state.MessagesReducer
  });
  
  export default connect(mapStateToProps,{addMessage,getMessage,getTyping})(Chat);