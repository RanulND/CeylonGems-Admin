import React, { useEffect, useState } from "react";
import './Users.css'
import axios from 'axios'

function Users() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        function setScript() {
            // const s = document.createElement('script');
            // s.src = 'http://localhost:3000/assets/js/material-kit.min.js'
            // s.async = true

            // document.body.appendChild(s);

            // return () => {
            //     document.body.removeChild(s);
            // }
        }

        // setScript();

        const url = 'http://localhost:5000/api/admin/get-users'
        axios.get(url).then(res => {
            setUsers(res.data.data)
            console.log(res.data.data)
        }).catch(err => {
            console.log(err)
        })

        // const s = document.createElement('script');
        // s.src = 'http://localhost:3000/assets/js/material-kit.min.js'
        // s.async = true

        // document.body.appendChild(s);

        // return () => {
        //     document.body.removeChild(s);
        // }
    }, [])

    return (
        <div className="container">
            <div className="nav-wrapper position-relative end-0 py-3">
                <ul className="nav nav-pills nav-fill p-1" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link mb-0 px-0 py-1 active" data-bs-toggle="tab" href="#profile-tabs-simple" role="tab"
                            aria-controls="profile" aria-selected="true">
                            Sellers
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mb-0 px-0 py-1" data-bs-toggle="tab" href="#dashboard-tabs-simple" role="tab"
                            aria-controls="dashboard" aria-selected="false">
                            Buyers
                        </a>
                    </li>
                </ul>
            </div>
            <div className="card py-3">
                <div className="table-responsive">
                    <table className="table align-items-center mb-0">
                        <thead>
                            <tr>
                                <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">User</th>
                                <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2">Email</th>
                                <th className="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Phone Number</th>
                                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user._id}>
                                    <td>
                                        <div className="d-flex px-2 py-1">
                                            {/* <div>
                           <img src="https://demos.creative-tim.com/test/material-dashboard-pro/assets/img/team-2.jpg" className="avatar avatar-sm me-3" />
                       </div> */}
                                            <div className="d-flex flex-column justify-content-center">
                                                <h6 className="mb-0 text-sm">{user.firstName + ' ' + user.lastName}</h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h6 className="mb-0 text-sm">{user.email}</h6>
                                    </td>
                                    <td className="text-sm">
                                        <h6 className="mb-0 text-sm">{user.phoneNumber}</h6>
                                    </td>
                                    <td className="align-middle text-center">
                                        <button className="btn viewButton" type="submit" >View</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Users;