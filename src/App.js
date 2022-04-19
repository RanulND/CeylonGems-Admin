import logo from './logo.svg';
import './App.css';
import Dashboard from './Containers/Dashboard/Dashboard';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom'
import AdminDashboard from './Containers/Admin Dashboard/AdminDashboard';
import UserDashboard from './Containers/User Dashboard/UserDashboard';
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/material-kit.min.css'
import { useEffect } from 'react';
import Login from './Containers/Login/Login';
import AuctionDashboard from './Containers/Auction Dashboard/AuctionDashboard';
import OrderDashboard from './Containers/Order Dashboard/OrderDashboard';


export function setScripts() {
  const s1 = document.createElement('script');
  s1.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
  s1.async = true
  s1.integrity = 'sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p'
  s1.crossOrigin = 'anonymous'
  document.body.appendChild(s1);

  const s2 = document.createElement('script');
  s2.src = './js/material-kit.min.js'
  s2.async = true
  document.body.appendChild(s2)

  // return () => {
  //     document.body.removeChild(s2);
  //     document.body.removeChild(s1)
  // }
}
function App() {
  function setScripts() {
    const s1 = document.createElement('script');
    s1.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
    s1.async = true
    s1.integrity = 'sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p'
    s1.crossOrigin = 'anonymous'
    document.body.appendChild(s1);

    const s2 = document.createElement('script');
    s2.src = './js/material-kit.min.js'
    s2.async = true
    document.body.appendChild(s2)

    // return () => {
    //     document.body.removeChild(s2);
    //     document.body.removeChild(s1)
    // }
  }

  useEffect(() => {
    const s1 = document.createElement('script');
    s1.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
    s1.async = true
    s1.integrity = 'sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p'
    s1.crossOrigin = 'anonymous'
    document.body.appendChild(s1);

    const s2 = document.createElement('script');
    s2.src = './js/material-kit.min.js'
    s2.async = true
    // document.body.appendChild(s2)
  })
  return (


    <div className="App" style={{ fontFamily: 'Roboto' }}>
      <Router>
        <Routes>
          <Route path='/' exact element={<Dashboard />} />
          <Route path='/admin-dashboard' exact element={<AdminDashboard />} />
          <Route path='/user-dashboard' exact element={<UserDashboard />} />
          <Route path='/auctions' exact element={<AuctionDashboard />} />
          <Route path='/orders' exact element={<OrderDashboard />} />
          <Route path='/login' exact element={<Login />} />
        </Routes>
      </Router>
    </div>


  );
}

export default App;
