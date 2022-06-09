import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import SideNav from "../../Components/sideNav/sideNav";
import Users from "../../Components/Users/Users";

const UserDashboard = () => {

    return (
        <div className="d-flex">
            <SideNav />
            <main style={{ display: 'flex', flexGrow: 1 }}>
                <Users />
            </main>
        </div>
    )
}

export default UserDashboard