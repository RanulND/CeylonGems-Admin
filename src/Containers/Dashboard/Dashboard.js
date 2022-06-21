import React, { useEffect, useState } from "react";
import './Dashboard.css'
import { counts } from "../../Services/adminService";
import SideNav from "../../Components/sideNav/sideNav";
import Chart from 'chart.js/auto';
import Charts from "../../Components/Chart/Chart";
import { getOrdersByDate } from "../../Services/OrderService";
import Navbar from "../../Components/Navbar/Navbar";
import { getUsersByDate } from "../../Services/UserService";
import { getAuctionsByDate } from "../../Services/AuctionService";

const Dashboard = () => {

    const [userCount, setUserCount] = useState(0)
    const [userByDate, setUserByDate] = useState([])
    const [auctionCount, setAuctionCount] = useState(0)
    const [auctionByDate, setAuctionByDate] =useState([])
    const [orderCount, setOrderCount] = useState(0)
    const [orderByDate, setOrderByDate] = useState([])
    const [isLoading, setIsloading] = useState(true)

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

    const getStatsByDate = async () => {
        const orderRes = await getOrdersByDate()
        // console.log(orderRes.data.data)
        setOrderByDate(orderRes.data.data)

        const userRes = await getUsersByDate()
        // console.log('users', userRes.data.data)
        setUserByDate(userRes.data.data)

        const auctionRes = await getAuctionsByDate()
        // console.log('auctions', auctionRes.data.data)
        setAuctionByDate(auctionRes.data.data)
    }

    useEffect(() => {
        setCounts()
        getStatsByDate()
        setIsloading(false)
    }, [])
    return (
        <div>
            {
                !isLoading &&

                <div className="d-flex">
                    <SideNav />
                    <main className="pb-3 main" style={{ display: 'flex', flexGrow: 1 }}>
                    
                        <div className="container-fluid dashboard ps-5 pe-0">
                        <Navbar />
                            <div className="row m-0 ps-5 pe-4">
                                <div className="col-md-6 p-2 cardoutter">
                                    <div className="card p-4 users">
                                        <div className="row py-2"  >
                                            <div className="col-md-6">
                                                <h3 className="" >Users</h3>
                                            </div>
                                            <div className="col-md-6 px-5" style={{ textAlign: 'right' }}>
                                                <h3 className="">{userCount}</h3>
                                            </div>
                                        </div>
                                        <div className="row py-2">
                                            <h4 className="h4">Last 7 days</h4>
                                            <Charts id={1} data={userByDate} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 p-2 cardoutter">
                                    <div className="card p-4 users">
                                        <div className="row py-2"  >
                                            <h4 className="" >Users Related Statisitics</h4>
                                        </div>
                                        <div className="row py-2">
                                            <div className="row" style={{ height: '200px' }}>
                                                <div className="col-md-8">
                                                    <div className="row">
                                                        <span>Active user count</span>
                                                    </div>
                                                    <div className="row">
                                                        <span>Deactived user count</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="row">
                                                        <span>9</span>
                                                    </div>
                                                    <div className="row">
                                                        <span>6</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row ps-5 pe-4 m-0">
                                <div className="col-md-6 p-2 cardoutter">
                                    <div className="card p-4 users">
                                        <div className="row py-2"  >
                                            <h4 className="" >Auctions Related Statisitics</h4>
                                        </div>
                                        <div className="row py-2">

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 p-2 cardoutter">
                                    <div className="card p-4 users">
                                        <div className="row py-2"  >
                                            <div className="col-md-6">
                                                <h3 className="" >Auctions</h3>
                                            </div>
                                            <div className="col-md-6 px-5" style={{ textAlign: 'right' }}>
                                                <h3 className="">{auctionCount}</h3>
                                            </div>
                                        </div>
                                        <div className="row py-2">
                                        <h4 className="h4">Last 7 days</h4>
                                            <Charts id={2} data={auctionByDate} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row ps-5 pe-4 m-0">
                                <div className="col-md-6 p-2 cardoutter">
                                    <div className="card p-4 users">
                                        <div className="row py-2"  >
                                            <div className="col-md-6">
                                                <h3 className="" >Orders</h3>
                                            </div>
                                            <div className="col-md-6 px-5" style={{ textAlign: 'right' }}>
                                                <h3 className="">{orderCount}</h3>
                                            </div>
                                        </div>
                                        <div className="row py-2 graph">
                                        <h4 className="h4">Last 7 days</h4>
                                            <Charts id={3} data={orderByDate} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 p-2 cardoutter">
                                    <div className="card p-4 users">
                                        <div className="row py-2"  >
                                            <h4 className="" >Orders Related Statisitics</h4>
                                        </div>
                                        <div className="row py-2">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            }

        </div >
    )
}

export default Dashboard;