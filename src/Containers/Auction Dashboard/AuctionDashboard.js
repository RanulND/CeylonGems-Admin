import React from "react";
import Auctions from "../../Components/Auctions/Auction";
import Navbar from "../../Components/Navbar/Navbar";
import SideNav from "../../Components/sideNav/sideNav";

const AuctionDashboard = () => {

    return (
        <>
            <div className="d-flex">
                <SideNav />
                <main style={{ display: 'flex', flexGrow: 1 }}>
                    <Auctions />
                </main>
            </div>

        </>
    )
}

export default AuctionDashboard;