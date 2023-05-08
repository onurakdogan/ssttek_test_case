
import React, { useEffect, useState,useRef } from 'react';
import './Messages.css';

import {connect} from 'react-redux';
import {addMessage,getMessage,getTyping} from '../../store/actions/Messages/Messages';

import receiveSound from "../../assets/audio/send-message.mp3";
import sendSound from "../../assets/audio/message.mp3";
import Attach from "../../assets/img/attach.png";
import Smile from "../../assets/img/smile_face.png";

const audio = new Audio();

function Messages(props) {

    const {messages,getMessage,latestMessage,isTyping} = props.MessagesToProps ;  
    const {socket} = props;
 
    const messageEl = useRef(null);
    const [role,setRole] = useState("");

    const [value,setValue] = useState("");
    const [messageList,setMessageList] = useState([]);
    const [typingBot,setTypingBot] = useState(null);
    
    useEffect(()=>{
         socket.on("play",(data)=>{
            audio.src = data;
            audio.play(); 
        })
        
    },[])

    useEffect(()=>{
        
        if(messageEl){
            messageEl.current.addEventListener('DOMNodeInserted', event => {
              const { currentTarget: target } = event;
              target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
            });
        }

        socket.on("botResponse",(messageFromBot)=>{
            props.addMessage(messageFromBot)
            socket.emit("play",receiveSound)

        })

        socket.on("typingBot",(data)=>{
            data ? props.getTyping(true) : props.getTyping(false)

        })
        
       
    },[socket])

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
        socket.emit("play",sendSound)
    }

    return (
        <div className='messages-main-wrapper'>
            <div className='messages-wrapper' ref={messageEl}>
                    {
                        messages.map((item,index)=>(
                            <div key={index} className={item.isBotty ? "receiver" : "sender"}>
                                <div className={item.isBotty ? "receiverBubble" : "senderBubble"}>
                                    {item.message}
                                </div>
                            </div>
                        ))
                    }
            </div>

            <div className='send-message'>
                  <div className='message-input-wrapper'>
                    <input className='message-input' placeholder='write a message ...' value={value} name="message" onChange={(e)=>{typingMessage(e)}}/> 
                    <img src={Smile} style={{width:20,height:20,marginRight:15}}/>
                    <img src={Attach} style={{width:20,height:20,marginRight:15}}/>
                    <button className='send-button' onClick={sendMessage}>Send</button>
                  </div> 
            </div>


        </div>
    );
}


const mapStateToProps = (state) => ({ 
    MessagesToProps: state.MessagesReducer
  });
  
  export default connect(mapStateToProps,{addMessage,getMessage,getTyping})(Messages);