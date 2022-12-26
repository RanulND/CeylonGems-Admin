import React from "react";

const Orders = () => {
    
    return (
        <>
            <div className="container orders">
                <div className="card">
                    <div className="table-responsive">
                        <table className="table align-items-center mb-0">
                            <thead>
                                <tr>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Order ID</th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Total Price</th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Payment Status</th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Deliver Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="d-flex px-2">
                                            {/* <div>
                                                <img src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/small-logos/logo-spotify.svg" className="avatar avatar-sm rounded-circle me-2" />
                                            </div> */}
                                            <div className="my-auto">
                                                <h6 className="mb-0 text-xs">Spotify</h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="text-xs font-weight-normal mb-0">$2,500</p>
                                    </td>
                                    <td>
                                        <span className="badge badge-dot me-4">
                                            <i className="bg-info"></i>
                                            <span className="text-dark text-xs">Not Paid</span>
                                        </span>
                                    </td>
                                    <td className="align-middle text-center text-sm">
                                        Not Delivered
                                    </td>

                                    <td className="align-middle">
                                        <button className="btn btn-link text-xs mb-0 viewButton">
                                            View
                                        </button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Orders;