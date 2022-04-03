import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import ViewAllAdmin from "../../Components/ViewAllAdmin/ViewAllAdmin";
// import NewNav from "../Components/NewNav";
import { Link } from "react-router-dom";
import axios from "axios";
import './Dashboard.css'

function Dashboard() {

    const [userCount, setUserCount] = useState(0)
    const [auctionCount, setAuctionCount] = useState(0)
    const [orderCount, setOrderCount] = useState(0)

    function setCounts() {
        const url = "http://localhost:5000/api/admin/get-count"
        axios.get(url).then(res => {
            setUserCount(res.data.data.users)
            setAuctionCount(res.data.data.auctions)
            setOrderCount(res.data.data.orders)
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(()=> {
        setCounts()
    }, 0)
    return (
        <div>
            {/* <Navbar /> */}
            {/* Hello Dashboard */}
            <Navbar />
            <Outlet />
            <div className="container">
                <div className="row">
                    <div className="col-md-4 p-2">
                        <div className="card p-4 users">
                            <div className="row py-2"  >
                                <h5 className="" style={{color : "white"}}>Users</h5>
                            </div>
                            <div className="row py-2">
                            <h5 className="" style={{color : "white"}}>{userCount}</h5> 
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-2">
                        <div className="card p-4 bg-info auctions">
                            <div className="row py-2">
                                <h5 style={{color : "white"}}>Auction</h5>
                            </div>
                            <div className="row py-2">
                            <h5 className="" style={{color : "white"}}>{auctionCount}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-2">
                        <div className="card p-4 bg-info orders">
                            <div className="row py-2">
                                <h5 style={{color : "white"}}>Orders</h5>
                            </div>
                            <div className="row py-2">
                            <h5 className="" style={{color : "white"}}>{orderCount}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;