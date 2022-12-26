import React, { useState } from "react";
import { Menu, MenuItem, ProSidebar, SidebarContent, SidebarFooter, SidebarHeader, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import './Navbar.css'
import 'react-pro-sidebar/dist/css/styles.css'

const Navbar = () => {

    const [collapsed, setCollapsed] = useState(true)

    const handleToggle = () => {
        setCollapsed(!collapsed)
    }

    return (
        // <>
        //     <div className="container py-3 nav-bar">
        //         <div className="row text-left">
        //             <div className="col-md-1 text-left">
        //                 <button className="btn btn-primary menuButton" id="menuButton" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        //                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{ fill: 'rgba(255, 255, 255, 1)', color: 'white' }}><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
        //                 </button>

        //             </div>
        //         </div>
        //         <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        //             <div className="offcanvas-header bg-dark">
        //                 <h5 className="offcanvas-title" id="offcanvasExampleLabel">CeylonRuby | Admin</h5>
        //                 <button type="button" className="btn" data-bs-dismiss="offcanvas" aria-label="Close" style={{marginBottom:'0'}}>
        //                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{ fill: 'rgba(255, 255, 255, 1)', color: 'white' }}>
        //                         <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z">
        //                         </path>
        //                     </svg>
        //                 </button>
        //             </div>
        //             <div className="offcanvas-body bg-dark">
        //                 {/* <div className="row py-3" >
        //                     <h5 className="font-weight-bold" style={{ color: 'white' }}>Admin Panel</h5>
        //                 </div> */}
        //                 <Link to='/' className="side-nav">
        //                     <div className="py-3 side-nav-item" >
        //                         Dashboard
        //                     </div>
        //                 </Link>
        //                 <Link to='/user-dashboard' className="side-nav">
        //                     <div className="py-3 side-nav-item" >
        //                         Users
        //                     </div>
        //                 </Link>
        //                 <Link to='/auctions' className="side-nav">
        //                     <div className="py-3 side-nav-item" >
        //                         Auctions
        //                     </div>
        //                 </Link>
        //                 <Link to='/orders' className="side-nav">
        //                     <div className="py-3 side-nav-item" >
        //                         Orders
        //                     </div>
        //                 </Link>
        //                 <Link to='/admin-dashboard' className="side-nav">
        //                     <div className="py-3 side-nav-item" >
        //                         Admins
        //                     </div>
        //                 </Link>
        //                 <Link to='/payment-history' className="side-nav">
        //                     <div className="py-3 side-nav-item" >
        //                         Payment History
        //                     </div>
        //                 </Link>
        //                 <Link to='/chat' className="side-nav">
        //                     <div className="py-3 side-nav-item" >
        //                         Chat
        //                     </div>
        //                 </Link>
        //             </div>
        //         </div>
        //     </div>
        // </>
        <ProSidebar width={'270px'} collapsedWidth={'80px'} collapsed={collapsed}>
            <SidebarHeader>
                <MenuItem>Ceylon Ruby</MenuItem>
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape="square">
                    <MenuItem>Dashboard <Link to={'/'} /></MenuItem>
                    <MenuItem>Users <Link to={'/user-dashboard'} /></MenuItem>
                    <MenuItem>Auctions <Link to={'/auctions'} /></MenuItem>
                    <MenuItem>Orders <Link to={'/orders'} /></MenuItem>
                    <MenuItem>Admins <Link to={'/admin-dashboard'} /></MenuItem>
                    <MenuItem>Payment History<Link to={'/payment-history'} /></MenuItem>
                    <MenuItem>Chat<Link to={'/chat'} /></MenuItem>
                </Menu>
            </SidebarContent>
            <SidebarFooter>
                <MenuItem>
                    <button className="btn-primary" onClick={handleToggle} style={{width:'100%'}}> Click</button>
                </MenuItem>
            </SidebarFooter>


        </ProSidebar>
    )
}

export default Navbar;