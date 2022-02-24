import logo from './logo.svg';
import './App.css';
import Dashboard from './Containers/Dashboard';
import AddAdmins from './Containers/AddAdmin';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Router>
        
        <Routes>
          <Route path = '/' exact element = {<Dashboard />} />
          <Route path = '/Add-Admin' exact element = {<AddAdmins />} /> 
        </Routes>
      </Router> */}
      <AddAdmins/>
      {/* <Navbar /> */}
    </div>
  );
}

export default App;
