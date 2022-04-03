import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AddAdminComponent from "../../Components/AddAdmin/AddAdmin";
import Navbar from "../../Components/Navbar/Navbar";
import ViewAllAdmin from "../../Components/ViewAllAdmin/ViewAllAdmin";

function AdminDashboard() {

    useEffect(() => {
  
    })

    return (
        <div>
            <Navbar />
            <Outlet />
            <div className="container py-4">
                <div className="row py-3">
                    <div className="offset-md-10 col-md-2">
                        <button className="btn addButton bg-gradient-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Add admin</button>
                    </div>

                    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Add Admin</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <AddAdminComponent />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn bg-gradient-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ViewAllAdmin />
            </div>



        </div>
    )
}

export default AdminDashboard;