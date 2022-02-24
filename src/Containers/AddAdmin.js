import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import axios from "axios";

function AddAdmins() {
    function AddAdmin () {
        const [data, setData] = useState({
            firstName : "",
            lastName : "",
            nic : "",
            password : "",
            email : "",
            phone : "",
            adminLevel : 1
        });

        const handlechange = ({currentTarget : input}) => {
            setData({...data, [input.name] : input.value})
        }

        const handlesubmit = async (e) => {
            e.preventDefault();

            try {
                const url = 'http://localhost:5000/api/admin/add-admin'
                const {data : res} = await axios.post(url, data)
            }catch{
                console.log(data)
            }
        }
    }

    return (
        <div>
            {/* <Navbar /> */}
            <div className="container">
                <h2>Add an Admin</h2>
                <form>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <div className="row py-5">
                                <label for="inputPassword" class="col-sm-4 col-form-label">First Name</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="fname" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row py-5">
                                <label for="inputPassword" class="col-sm-4 col-form-label">Last Name</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="lname" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <div className="row py-5">
                                <label for="inputPassword" class="col-sm-4 col-form-label">NIC</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="nic" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row py-5">
                                <label for="inputPassword" class="col-sm-4 col-form-label">Phone Number</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="phone" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <div className="row py-5">
                                <label for="inputPassword" class="col-sm-4 col-form-label">Email</label>
                                <div class="col-sm-8">
                                    <input type="email" class="form-control" id="email" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row py-5">
                                <label for="inputPassword" class="col-sm-4 col-form-label">Password</label>
                                <div class="col-sm-8">
                                    <input type="password" class="form-control" id="password" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="row">
                    <button className="btn btn-primary" type="submit">Add</button>
                </div>
            </div>
        </div>
    )
}

export default AddAdmins;