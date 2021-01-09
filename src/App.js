//import logo from './logo.svg';
import './App.css';
import { UserForm } from './components/userform/userform'

function App() {
  return (
    <div className="App">
     <UserForm label='first name' color='cyan'/>
     {/* <UserForm label = 'last name' color='yellow'/>
     <UserForm label = 'age' color = 'blue'/> */}
    </div>
  );
}

export default App;
