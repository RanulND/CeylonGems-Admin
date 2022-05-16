import React from "react";
import './Auction.css'

const Auctions = () => {

    return (
        <>
            <div className="container auctions">
                <div className="card">
                    <div className="table-responsive">
                        <table className="table align-items-center mb-0">
                            <thead>
                                <tr>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Auction ID</th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Base Value</th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Status</th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Ends in</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="d-flex px-2">
                                            <div>
                                                <img src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/small-logos/logo-spotify.svg" className="avatar avatar-sm rounded-circle me-2" alt="Its a image" />
                                            </div>
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
                                            <span className="text-dark text-xs">Ongoing</span>
                                        </span>
                                    </td>
                                    <td className="align-middle text-center">
                                        3h 23m
                                    </td>

                                    <td className="align-middle">
                                        <button className="btn btn-link text-secondary mb-0 viewButton">
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

export default Auctions;