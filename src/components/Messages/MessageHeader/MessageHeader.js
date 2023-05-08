import React from 'react';
import './MessageHeader.css';
import Profile from '../../../assets/img/profile1.png';
import Eye from '../../../assets/img/eye.png';
import Clock from '../../../assets/img/clock_icon.png';
import { userList } from '../../../utils/Api/Users/UserList';


import {connect} from 'react-redux';
import {addMessage,getMessage,getTyping} from '../../../store/actions/Messages/Messages';

function MessageHeader(props) {
  const {messages,getMessage,latestMessage,isTyping} = props.MessagesToProps ;  

    return (
        <div className='profile-main-wrapper'>
                  <div className='profile-wrapper'>

                  <div style={{display:"flex",alignItems:"center"}}>
                    <div>
                        <img src={Profile} style={{height:50,width:50}} />
                    </div>

                    <div className='info-wrapper'>
                        <div className='online-wrapper'>
                            <div style={{fontWeight:"bold"}}>{userList[0].name}</div>
                            <div style={{height:10,width:10,borderRadius:"50%",background:"#4ADD44",marginLeft:10}}></div>
                        </div>
                        <div>Cloud, The Internet</div>
                    </div>
                   </div>

                   
                  <div style={{display:"flex",gap:20}}>
                    <div className='botty-info-wrapper'>
                        <img src={Eye} style={{height:15,width:20,objectFit:"contain"}} />
                        <p>botty-beep-boop</p>
                    </div>


                    <div className='botty-info-wrapper'>
                        <img src={Clock} style={{height:15,width:15}} />
                        <p>botty-beep-boop</p>
                    </div>
                   </div>


                  </div>
          
        </div>
    );
}

const mapStateToProps = (state) => ({ 
    MessagesToProps: state.MessagesReducer
  });
  
  export default connect(mapStateToProps,{addMessage,getMessage,getTyping})(MessageHeader);