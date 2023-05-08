import { userList } from '../../utils/Api/Users/UserList';
import './UserList.css';
import Profile from '../../assets/img/profile1.png'

export default function UserList() {
  return (
      <div className='list-main-wrapper'>
        
          {userList.map((item,index) => 
              <div key={index} className='list-item-wrapper'>
               <div className='list-item'>

                  <div><img src={Profile} style={{height:50,width:50}} /></div>

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
                        <div>Last Message</div>
                      </div>
                  </div>

              </div>
              </div>
          )}
      
      </div>
      
  );
}
