import './App.css';
import UserList from './components/UserList/UserList';
import Messages from './components/Messages/Messages';
import CompanyInformation from './components/CompanyInformation/CompanyInformation';


function App() {
  return (
    <div className="App">
       <div className='components-wrapper'>
          <UserList/>
          <Messages/>
          <CompanyInformation/>
       </div>
    </div>
  );
}

export default App;
