import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import ViewAllAdmin from "../Components/ViewAllAdmin/ViewAllAdmin";

export default function Dashboard() {
    return (
        <div>
            {/* <Navbar /> */}
            Hello Dashboard
            <ViewAllAdmin />
        </div>
    )
}