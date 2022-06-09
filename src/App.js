import './App.css';
import Dashboard from './Containers/Dashboard/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminDashboard from './Containers/Admin Dashboard/AdminDashboard';
import UserDashboard from './Containers/User Dashboard/UserDashboard';
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/material-kit.min.css'
import { useEffect } from 'react';
import Login from './Containers/Login/Login';
import AuctionDashboard from './Containers/Auction Dashboard/AuctionDashboard';
import OrderDashboard from './Containers/Order Dashboard/OrderDashboard';
import User from './Containers/User/User';
import Chat from './Containers/Chat/Chat';

const App = () => {

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
          <Route path='/' exact element={<Login />} />
          <Route path='/admin-dashboard' exact element={<AdminDashboard />} />
          <Route path='/user-dashboard' exact element={<UserDashboard />} />
          <Route path='/auctions' exact element={<AuctionDashboard />} />
          <Route path='/orders' exact element={<OrderDashboard />} />
          <Route path='/dashboard' exact element={<Dashboard />} />
          <Route path='/user-dashboard/user/:id' exact element={<User />} />
          <Route path='/chat' exact element={<Chat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
