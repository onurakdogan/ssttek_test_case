import './App.css';
import io from "socket.io-client";
import ChatRoom from './components/ChatRoom/ChatRoom';
import Chat from './components/Chat/Chat';

const socket = io.connect("http://localhost:1117");

function App() {
  return (
    <div className="App">
       <Chat socket={socket}/>
    </div>
  );
}

export default App;
