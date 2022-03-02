import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import './AddAdmin.css'
import { getAdmins } from '../../Services/adminService'

function AddAdminComponent() {
    // function AddAdmin() {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        nic: "",
        password: "",
        email: "",
        phone: "",
        adminLevel: 0
    });



    const handlechange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
        // console.log(data)
    }

    // }
    const handlesubmit = (event) => {
        event.preventDefault();

        console.log(data);
        // try {
        const url = 'http://localhost:5000/api/admin/add-admins'
        //     const { data } = await axios.post(url, data)
        // } catch {
        //     console.log(e)
        // }
        axios.post(url, data).then(res => {
            console.log(res.data.message);
            alert(res.data.message)
            setData({
                firstName: "",
                lastName: "",
                nic: "",
                password: "",
                email: "",
                phone: "",
                adminLevel: 0
            })
            let x = getAdmins();
            console.log(x)

        }).catch(err => {
            console.log("Error:" + err)
        })
    }

    return (
        <div>
            <div className="container">
                <h2>Add an Admin</h2>
                <form onSubmit={e => handlesubmit(e)}>
                    <div className="row py-3">
                        <div className="col-md-6">
                            <div className="row align-items-center">

                                <div>
                                    <div className="input-group input-group-outline my-3">
                                        <label className="form-label">First Name</label>
                                        <input type="text" name="firstName" className="form-control" onChange={(e) => { handlechange(e) }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row align-items-center">

                                <div>
                                    <div className="input-group input-group-outline my-3">
                                        <label className="form-label">Last Name</label>
                                        <input type="text" name="lastName" className="form-control" onChange={(e) => { handlechange(e) }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row py-3">
                        <div className="col-md-6">
                            <div className="row align-items-center">

                                <div>
                                    <div className="input-group input-group-outline my-3">
                                        <label className="form-label">Email</label>
                                        <input type="email" name="email" className="form-control" onChange={(e) => { handlechange(e) }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row align-items-center">

                                <div>
                                    <div className="input-group input-group-outline my-3">
                                        <label className="form-label">Password</label>
                                        <input type="password" name="password" className="form-control" onChange={(e) => { handlechange(e) }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row py-3">
                        <div className="col-md-6">
                            <div className="row align-items-center">

                                <div>
                                    <div className="input-group input-group-outline my-3">
                                        <label className="form-label">NIC</label>
                                        <input type="text" name="nic" className="form-control" onChange={(e) => { handlechange(e) }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row align-items-center">

                                <div>
                                    <div className="input-group input-group-outline my-3">
                                        <label className="form-label">Phone Number</label>
                                        <input type="text" name="phone" className="form-control" onChange={(e) => { handlechange(e) }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row py-3">
                        <button className="btn bg-gradient-primary mb-0 addButton" type="submit">Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddAdminComponent;