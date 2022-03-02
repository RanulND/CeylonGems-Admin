import React from "react";
import AddAdminComponent from "../Components/AddAdmin/AddAdmin";
import ViewAllAdmin from "../Components/ViewAllAdmin/ViewAllAdmin";

function AddAdmins() {

    return (
        <div>
            <div className="container">
                <div className="row py-3">
                    <div className="offset-md-10 col-md-2">
                        <button className="btn bg-gradient-primary addButton" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ width: "100%" }}><FontAwesomeIcon icon="fa-solid fa-plus" />Add Admin</button>

                    </div>

                    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title font-weight-normal" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" className="btn-close text-dark" data-bs-dismiss="modal" aria-label="Close">
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

export default AddAdmins;