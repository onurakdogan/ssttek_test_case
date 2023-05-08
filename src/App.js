import './App.css';
import io from "socket.io-client";
import UserList from './components/UserList/UserList';
import Messages from './components/Messages/Messages';
import CompanyInformation from './components/CompanyInformation/CompanyInformation';

const socket = io.connect("http://localhost:1117");

function App() {
  return (
    <div className="App">
       <div className='components-wrapper'>
          <UserList/>
          <Messages socket={socket} />
          <CompanyInformation/>
       </div>
    </div>
  );
}

export default App;
