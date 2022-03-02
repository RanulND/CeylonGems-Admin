import React, { useEffect, useState } from 'react'
import './ViewAllAdmin.css'
import axios from 'axios';
import { getAdmins } from '../../Services/adminService';

function ViewAllAdmin() {

    const [admins, setAdmins] = useState([]);

    // function getAdmins() {
    //     const url = 'http://localhost:5000/api/admin/get-admins'
    //     axios.get(url).then(res => {
    //         // console.log(res.data)
    //         setAdmins(res.data)

    //     }).catch(err => {
    //         console.log(err)
    //     })

    //     // console.log(admins)
    // }

    function removeAdmin(event,id) {
        const data = {
            id: id
        }
        event.preventDefault();
        console.log(id)
        const url = 'http://localhost:5000/api/admin/remove-admin'
        axios.post(url,data).then( res => {
            alert(res.data.message);
            // console.log(res.data.message)
            getAdmins()
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        // setAdmins(getAdmins())
        // getAdmins().then(admins => {
        //     console.log(admins)
        // })
        // console.log("x: " + x)
    }, [])

    
    return (
        <div className="card py-3">
            <div className="table-responsive">
                <table className="table align-items-center mb-0">
                    <thead>
                        <tr>
                            <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Admin</th>
                            <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2">Email</th>
                            <th className="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Phone Number</th>
                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {admins.map(admin => (
                            <tr key={admin._id}>
                                <td>
                                    <div className="d-flex px-2 py-1">
                                        {/* <div>
                                            <img src="https://demos.creative-tim.com/test/material-dashboard-pro/assets/img/team-2.jpg" className="avatar avatar-sm me-3" />
                                        </div> */}
                                        <div className="d-flex flex-column justify-content-center">
                                            <h6 className="mb-0 text-sm">{admin.firstName + ' ' + admin.lastName}</h6>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h6 className="mb-0 text-sm">{admin.email}</h6>
                                </td>
                                <td className="text-sm">
                                    <h6 className="mb-0 text-sm">{admin.phone}</h6>
                                </td>
                                <td className="align-middle text-center">
                                    <button className="btn removeButton" type="submit" onClick={(e) => removeAdmin(e,admin._id)} >Remove</button>
                                </td>
                            </tr>

                        ))}

                        {/* <tr>
                            <td>
                                <div className="d-flex px-2 py-1">
                                    <div>
                                        <img src="https://demos.creative-tim.com/test/material-dashboard-pro/assets/img/team-2.jpg" className="avatar avatar-sm me-3" />
                                    </div>
                                    <div className="d-flex flex-column justify-content-center">
                                        <h6 className="mb-0 text-xs">John Michael</h6>
                                    </div>
                                </div>
                            </td>
                            <td>
                            <h6 className="mb-0 text-xs">email</h6>
                            </td>
                            <td className="text-sm">
                            <h6 className="mb-0 text-xs">0714212829</h6>
                            </td>
                            <td className="align-middle text-center">
                                <button className="btn-primary" >Remove</button>
                            </td>
                        </tr> */}

                    </tbody>
                </table>
            </div>
        </div>


    )
}

export default ViewAllAdmin;