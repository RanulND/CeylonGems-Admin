import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import './Dashboard.css'
import { counts } from "../../Services/adminService";
import SideNav from "../../Components/sideNav/sideNav";

const Dashboard = () => {

    const [userCount, setUserCount] = useState(0)
    const [auctionCount, setAuctionCount] = useState(0)
    const [orderCount, setOrderCount] = useState(0)

    const setCounts = async () => {
        try {
            const res = await counts()
            setUserCount(res.data.data.users)
            setAuctionCount(res.data.data.auctions)
            setOrderCount(res.data.data.orders)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        setCounts()
    }, [])
    return (
        <div>
            {/* <Navbar /> */}
            <div className="d-flex">
                <SideNav />
                <main className="p-3 main" style={{ display: 'flex', flexGrow: 1 }}>
                    {/* <Outlet /> */}
                    <div className="container dashboard">
                        <div className="row">
                            <div className="col-md-4 p-2">
                                <div className="card p-4 users">
                                    <div className="row py-2"  >
                                        <h5 className="" style={{ color: "white" }}>Users</h5>
                                    </div>
                                    <div className="row py-2">
                                        <h5 className="" style={{ color: "white" }}>{userCount}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-2">
                                <div className="card p-4 bg-info auctions">
                                    <div className="row py-2">
                                        <h5 style={{ color: "white" }}>Auction</h5>
                                    </div>
                                    <div className="row py-2">
                                        <h5 className="" style={{ color: "white" }}>{auctionCount}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-2">
                                <div className="card p-4 bg-info orders">
                                    <div className="row py-2">
                                        <h5 style={{ color: "white" }}>Orders</h5>
                                    </div>
                                    <div className="row py-2">
                                        <h5 className="" style={{ color: "white" }}>{orderCount}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div >
    )
}

export default Dashboard;