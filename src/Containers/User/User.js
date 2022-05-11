import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getGemCount } from "../../Services/ProductService";
import { getUser } from "../../Services/UserService"
import './User.css'
import { Link } from 'react-router-dom'

const User = () => {
    const { id } = useParams()
    const [user, setUser] = useState({})
    const [checked, setChecked] = useState(false)
    const [buyer, setBuyer] = useState(null)
    const [seller, setSeller] = useState(null)
    const [gemCount, setGemCount] = useState(0)
    const [jewelryCount, setJewelryCount] = useState(0)
    const [soldGemCount, setSoldGemCount] = useState(0)

    const getUserData = async (id) => {
        try {
            const res = await getUser(id)
            setUser(res.data.data)
            setBuyer(res.data.data.role.buyer)
            setSeller(res.data.data.role.seller)
        } catch (err) {
            console.log(err)
        }

    }

    const getUserGemCount = async (id) => {
        try {
            const res = await getGemCount(id)
            setGemCount(res.data.data.notSold)
            setSoldGemCount(res.data.data.sold)
        } catch (err) {

        }
    }

    const activate = (role) => {
        if(role){
            setSeller(!seller)
            //update backend
        }else{
            setBuyer(!buyer)
            //update backend
        }
    }

    useEffect(() => {
        getUserData(id)
        getUserGemCount(id)
    }, [])

    return (
        <div className="user container">
            {/* {console.log(user)} */}
            <div className="row my-3 back">
                <div className="col-md-2">
                    <Link className="btn switch-button p-3" to={'/user-dashboard'}>
                        &lt;&nbsp; Back
                    </Link>
                </div>
            </div>
            <div className=" my-3 card shadow p-5">
                <div className="profile">
                    <div className="row">
                        <div className="col-md-2">
                            <h4 className="heading text-left">Profile </h4>
                        </div>
                        <div className="col-md-10">
                            <hr />
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-4">
                            <div className="row">
                                <p className="title">Name</p>
                            </div>
                            <div className="row">
                                <p className="name">{user.firstName + ' ' + user.lastName}</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row">
                                <p className="title">NIC</p>
                            </div>
                            <div className="row">
                                <p className="name">{user.nic}</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row">
                                <p className="title">Phone Number</p>
                            </div>
                            <div className="row">
                                <p className="name">{user.phoneNumber}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <div class="col-md-5 offset-md-7">
                    {
                        checked ? (
                            <div className="row">
                                <div className="col-md-6">
                                    {
                                        seller ? (
                                            <button className="btn deactivate-button p-3" onClick={() => activate(true)}>
                                                Deactivate seller Profile
                                            </button>
                                        ) : (
                                            <button className="btn activate-button p-3" onClick={() => activate(true)}>
                                                Activate seller Profile
                                            </button>
                                        )
                                    }
                                </div>
                                <div className="col-md-6">
                                    <button className="btn switch-button p-3" onClick={() => setChecked(!checked)}>
                                        Switch to Buyer Profile
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="row">
                                <div className="col-md-6">
                                    {
                                        buyer ? (
                                            <button className="btn deactivate-button p-3" onClick={() => activate(false)}>
                                                Deactivate buyer Profile
                                            </button>
                                        ) : (
                                            <button className="btn activate-button p-3" onClick={() => activate(false)}>
                                                Activate buyer Profile
                                            </button>
                                        )
                                    }
                                </div>
                                <div className="col-md-6">
                                    <button className="btn switch-button p-3" onClick={() => setChecked(!checked)}>
                                        Switch to Seller Profile
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            {
                checked ? (
                    <div className="card p-5 my-5">
                        <div className="products">
                            <div className="row">
                                <div className="col-md-2">
                                    <h4 className="heading text-left">Products</h4>
                                </div>
                                <div className="col-md-10">
                                    <hr />
                                </div>
                            </div>
                            <div className="row align-items-center justify-content-center">
                                <div className="col-md-4">
                                    <div className="row">
                                        <p className="title">Gem Count</p>
                                    </div>
                                    <div className="row">
                                        <p className="name">{gemCount}</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="row">
                                        <p className="title">Jewelry Count</p>
                                    </div>
                                    <div className="row">
                                        <p className="name">{jewelryCount}</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="row">
                                        <p className="title">Sold Product Count</p>
                                    </div>
                                    <div className="row">
                                        <p className="name">{gemCount + soldGemCount}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                ) : (
                    <div className="card p-5 my-5">
                        <div className="orders">
                            <div className="row">
                                <div className="col-md-2">
                                    <h4 className="heading text-left">Orders</h4>
                                </div>
                                <div className="col-md-10">
                                    <hr />
                                </div>
                            </div>
                            <div className="row align-items-center justify-content-center">
                                <div className="col-md-4">
                                    <div className="row">
                                        <p className="title">Order Count</p>
                                    </div>
                                    <div className="row">
                                        <p className="name">0</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="row">
                                        <p className="title">Bids Placed</p>
                                    </div>
                                    <div className="row">
                                        <p className="name">0</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="row">
                                        <p className="title">Bids Won</p>
                                    </div>
                                    <div className="row">
                                        <p className="name">0</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    )
}

export default User