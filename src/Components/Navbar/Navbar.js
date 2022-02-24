import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>Ceylon Gems</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <Link className="nav-link active" aria-current="page" to='/'>Dashboard</Link>
                        {/* <li className="nav-item">
                <Link className="nav-link">Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Auctions</Link>
              </li> */}
                        <Link className="nav-link" to='/Add-admins'>Admins</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}