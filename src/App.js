import './App.css';
import io from "socket.io-client";
import ChatRoom from './components/ChatRoom/ChatRoom';
import Chat from './components/Chat/Chat';
import UserList from './components/UserList/UserList';
import Messages from './components/Messages/Messages';
import CompanyInformation from './components/CompanyInformation/CompanyInformation';

const socket = io.connect("http://localhost:1117");

function App() {
  return (
    <div className="App">
       <div style={{display:"flex",flexWrap:"wrap"}}>
          <UserList/>
          <Messages socket={socket} />
          <CompanyInformation/>
       </div>
       {/* <Chat socket={socket}/> */}
    </div>
  );
}

export default App;
