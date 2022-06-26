import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../../Components/sideNav/sideNav";
import NonVerifiedGems from "../../Components/NonVerifiedGems/NonVerifiedGems";

const VerifyGemDashboard = () => {

    return (
        <div className="d-flex">
            <SideNav />
            <main style={{ display: 'flex', flexGrow: 1 }}>
                <NonVerifiedGems />
            </main>
        </div>
    )
}

export default VerifyGemDashboard