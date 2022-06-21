import React, { useEffect, useState } from 'react'
import './ViewAllAdmin.css'
import { getAdmins, removeAdmin } from '../../Services/adminService';

const ViewAllAdmin = ({ setGetAdminFunction }) => {

    const [admins, setAdmins] = useState([]);

    const  getAdmin = async () =>{
        try{
            const res = await getAdmins()
            setAdmins(res.data)
            console.log(res.data)
        }catch (err) {
            console.log(err)
        }

    }

    const remove = async (event,id) => {
        event.preventDefault();

        try{
            const res = await removeAdmin(id)
            alert(res.data.message)
            getAdmin()
        }catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getAdmin()
        getAdmin && setGetAdminFunction(getAdmin)
    }, [])

    
    return (
        <div className="card py-3 view-all-admins">
            <div className="table-responsive">
                <table className="table align-items-center mb-0 shadow-lg">
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
                            <tr key={admin._id} className="py-5">
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
                                    <button className="btn removeButton" type="submit" onClick={(e) => remove(e,admin._id)} >Remove</button>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </div>


    )
}

export default ViewAllAdmin;