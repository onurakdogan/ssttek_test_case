import { userList } from '../../utils/Api/Users/UserList';
import './UserList.css';
import Profile from '../../assets/img/profile1.png';
import Settings from '../../assets/img/settings_icon.png';


import {connect} from 'react-redux';
import {addMessage,getMessage,getTyping} from '../../store/actions/Messages/Messages';

 function UserList(props) {
  const {messages,getMessage,latestMessage,isTyping} = props.MessagesToProps ;  

  return (
      
      <div className='list-main-wrapper'>
          <div className='list-header'>
              <div className='list-wrapper'>
               All Messages
               <img src={Settings} style={{height:20,width:20}} />
              </div>
          </div>

          <div style={{overflowY:"scroll",height:"88.5vh"}}>
          {userList.map((item,index) => 
              <div key={index} className='list-item-wrapper'>
               <div className='list-item'>
                  {
                    item.userId == "bot" ?
                      <div><img src={Profile} style={{height:50,width:50}}/></div>
                    :
                      <div style={{display:"flex",flexShrink:0,justifyContent:"center",alignItems:"center",height:50,width:50,background:item.color,color:"#fff",fontSize:20,fontWeight:700,borderRadius:"50%"}}> 
                        {item.nickName}
                       </div>
                  }

                  <div className='user-info-wrapper'>
                      <div className='user-title-wrapper'>
                        <div className='user-name'>{item.name} </div>
                        {item.isOnline ? 
                         <div className='user-online'>Online</div>
                         :
                         <div className='user-status'>{item.lastActive}</div>
                        }
                      </div>
                      <div className='last-message'>
                            
                        <div>{item.userId == "bot" ? isTyping ? "Typing ..."  : latestMessage : item.lastMessage}</div>

                      </div>
                  </div>

              </div>
              </div>
          )}
          </div>
      
      </div>
      
  );
}


const mapStateToProps = (state) => ({ 
  MessagesToProps: state.MessagesReducer
});

export default connect(mapStateToProps,{addMessage,getMessage,getTyping})(UserList);