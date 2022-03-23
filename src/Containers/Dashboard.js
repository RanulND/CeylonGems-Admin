import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import ViewAllAdmin from "../Components/ViewAllAdmin/ViewAllAdmin";
// import NewNav from "../Components/NewNav";
import { Link } from "react-router-dom";

function Dashboard() {

    const [userCount, setUserCount] = useState(0)
    const [auctionCount, setAuctionCount] = useState(0)
    const [orderCount, setOrderCount] = useState(0)



    // useEffect({
        
    // }, 0)
    return (
        <div>
            {/* <Navbar /> */}
            {/* Hello Dashboard */}
            <Navbar />
            <Outlet />
            <div className="container">
                <div className="row">
                    <div className="col-md-4 p-2">
                        <div className="card p-4 bg-info">
                            <div className="row py-2"  >
                                <h5 className="" style={{color : "white"}}>Users</h5>
                            </div>
                            <div className="row py-2">
                            <h5 className="" style={{color : "white"}}>25</h5> 
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-2">
                        <div className="card p-4 bg-info">
                            <div className="row py-2">
                                <h5 style={{color : "white"}}>Auction</h5>
                            </div>
                            <div className="row py-2">
                            <h5 className="" style={{color : "white"}}>0</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-2">
                        <div className="card p-4 bg-info">
                            <div className="row py-2">
                                <h5 style={{color : "white"}}>Orders</h5>
                            </div>
                            <div className="row py-2">
                            <h5 className="" style={{color : "white"}}>0</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;