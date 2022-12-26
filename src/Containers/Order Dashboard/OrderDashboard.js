import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Orders from "../../Components/Orders/Order";
import SideNav from "../../Components/sideNav/sideNav";

const OrderDashboard = () => {

    return (
        <>
            <div className="d-flex">
                <SideNav />
                <main style={{ display: 'flex', flexGrow: 1 }}>
                <Orders />
                </main>
            </div>
            
        </>
    )
}

export default OrderDashboard;