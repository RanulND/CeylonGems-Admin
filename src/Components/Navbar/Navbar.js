import React from "react";
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white z-index-3 py-3 mb-3">
                <div className="container">
                    <Link to = '/' className="navbar-brand font-weight-bold" href="" rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom" target="_blank">
                        CeylonGems
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navigation">
                        <ul className="navbar-nav navbar-nav-hover mx-auto">
                            <li className="nav-item px-3">
                                <Link className="nav-link" to = '/'>
                                    Dashboard
                                </Link>
                            </li>

                            <li className="nav-item px-3">
                                <Link className="nav-link" to = '/'>
                                    Users
                                </Link>
                            </li>

                            <li className="nav-item px-3">
                                <Link className="nav-link" to = '/'>
                                    Auctions
                                </Link>
                            </li>

                            <li className="nav-item px-3">
                                <Link className="nav-link " to = '/add-admin'>
                                    Admins
                                </Link>
                            </li>
                        </ul>

                        <ul className="navbar-nav ms-auto">
                            <button className="btn bg-gradient-primary mb-0 login-button">Sign Out</button>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;