import logo from './logo.svg';
import './App.css';
import Dashboard from './Containers/Dashboard';
import AddAdmins from './Containers/AddAdmin';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom'


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Dashboard />} />
          <Route path='add-admin' exact element={<AddAdmins />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
