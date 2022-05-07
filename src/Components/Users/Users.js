import React, { useEffect, useState } from "react";
import './Users.css'
import axios from "../../Services/ApiService";
import { getUsers } from "../../Services/UserService";

const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(async () => {

        try {
            const res = await getUsers()
            setUsers(res.data.data)
        } catch (err) {
            console.log(err)
        }
        
    }, [])

    return (
        <div className="container">
            <div className="card py-5">
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