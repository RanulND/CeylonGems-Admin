import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import './AddAdmin.css'
import { addAdmin, getAdmins } from '../../Services/adminService'
// import '../../assets/css/material-kit.min.css'
// import '../../assets/js/material-kit.min.js";

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
    document.body.appendChild(s2);

    // return () => {
    //     document.body.removeChild(s2);
    // }
}


const AddAdminComponent = () => {

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        nic: "",
        password: "",
        email: "",
        phone: "",
        adminLevel: 1
    });

    const [val, setVal] = useState()

    const handlechange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
        // console.log(data)
    }

    // }
    const handlesubmit = async (event) => {
        event.preventDefault();

        try {
            const res = await addAdmin(data)
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
            setVal()
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {


    })

    return (
        <div>
            <div className="container">
                <form onSubmit={e => handlesubmit(e)}>
                    <div className="row py-3">
                        <div className="col-md-6">
                            <div className="row align-items-center">

                                <div>
                                    <div className="input-group input-group-outline my-3">
                                        <input type="text" name="firstName" className="form-control" onChange={(e) => { handlechange(e) }} value={val} placeholder='First Name' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row align-items-center">

                                <div>
                                    <div className="input-group input-group-outline my-3">
                                        <input type="text" name="lastName" className="form-control" onChange={(e) => { handlechange(e) }} value={val} placeholder='Last Name' />
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
                                        <input type="email" name="email" className="form-control" onChange={(e) => { handlechange(e) }} value={val} placeholder='Email' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row align-items-center">

                                <div>
                                    <div className="input-group input-group-outline my-3">
                                        <input type="password" name="password" className="form-control" onChange={(e) => { handlechange(e) }} value={val} placeholder='Password' />
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
                                        <input type="text" name="nic" className="form-control" onChange={(e) => { handlechange(e) }} value={val} placeholder='NIC' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row align-items-center">

                                <div>
                                    <div className="input-group input-group-outline my-3">
                                        <input type="text" name="phone" className="form-control" onChange={(e) => { handlechange(e) }} value={val} placeholder='Phone Number' />
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