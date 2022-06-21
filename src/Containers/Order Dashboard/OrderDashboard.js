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
                    <div className="container-fluid ps-5 pe-0">
                        <Navbar />
                        <Orders />
                    </div>
                </main>
            </div>

        </>
    )
}

export default OrderDashboard;