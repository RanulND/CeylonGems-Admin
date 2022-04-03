import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Users from "../../Components/Users/Users";

function UserDashboard() {


    return (
        <div className="">
            <Navbar />
            <Outlet />
            <Users />
        </div>
    )
}

export default UserDashboard