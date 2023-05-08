import {GET_TYPING,ADD_MESSAGES,GET_MESSAGES} from '../../actions/Types';

import { io } from 'socket.io-client';

const INITIAL_STATE = {
socket:io.connect("http://localhost:1117"),
messages:[],
latestMessage:"",
isTyping:false,

};


export default function MessagesReducer(state = INITIAL_STATE,action)  {
const {type} = action;
const {socket,messages,latestMessage,isTyping} = state ;

switch(type){
    case GET_MESSAGES :
          return {
            ...state,
            messages:action.payload
          }
    case ADD_MESSAGES: 
         let myMessages = [...messages,action.payload];
          return {
            ...state,
            messages:myMessages,
            latestMessage:action.payload.message,
          }

    case GET_TYPING:
          return {
            ...state,
            isTyping:action.payload,
          }
    
    default: return state ; 
}
    
} 