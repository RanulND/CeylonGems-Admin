import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
    function menuButton() {
    //     const menu = document.getElementById("menuButton")
    //     const canvas = document.getElementById("offcanvasExample")
    //     if(canvas.style.visibility == "visible"){
    //         menu.style.visibility = "hidden"
    //     }else{
    //         menu.style.visibility = "visible"
    //     }
    }
    return (
        <>
            <div className="container py-3">
                <div className="row text-left">
                    <div className="col-md-1 text-left">
                        <button className="btn btn-primary menuButton" id="menuButton" onClick={e => {menuButton()}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{ fill: 'rgba(255, 255, 255, 1)', color: 'white' }}><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
                        </button>

                    </div>
                </div>
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header bg-dark">
                        <h5 className="offcanvas-title" id="offcanvasExampleLabel">CeylonRuby | Admin Panel</h5>
                        <button type="button" className="btn" data-bs-dismiss="offcanvas" aria-label="Close" onClick={e => {menuButton()}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{ fill: 'rgba(255, 255, 255, 1)', color: 'white' }}>
                                <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div className="offcanvas-body bg-dark">
                        {/* <div className="row py-3" >
                            <h5 className="font-weight-bold" style={{ color: 'white' }}>Admin Panel</h5>
                        </div> */}
                        <Link to='/' className="side-nav">
                            <div className="py-3 side-nav-item" >
                                Dashboard
                            </div>
                        </Link>
                        <Link to='/user-dashboard' className="side-nav">
                            <div className="py-3 side-nav-item" >
                                Users
                            </div>
                        </Link>
                        <Link to='/auctions' className="side-nav">
                            <div className="py-3 side-nav-item" >
                                Auctions
                            </div>
                        </Link>
                        <Link to='/orders' className="side-nav">
                            <div className="py-3 side-nav-item" >
                                Orders
                            </div>
                        </Link>
                        <Link to='/admin-dashboard' className="side-nav">
                            <div className="py-3 side-nav-item" >
                                Admins
                            </div>
                        </Link>
                        <Link to='/payment-history' className="side-nav">
                            <div className="py-3 side-nav-item" >
                                Payment History
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;