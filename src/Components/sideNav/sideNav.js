import React, { useState } from "react";
import { Menu, MenuItem, ProSidebar, SidebarContent, SidebarFooter, SidebarHeader } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import 'react-pro-sidebar/dist/css/styles.css'
import './SideNav.css'
import { FaGem, FaUserAlt, } from 'react-icons/fa';
import { RiAuctionFill, RiBillFill, RiAdminFill, } from 'react-icons/ri'
import { MdPayments } from 'react-icons/md'
import { BsFillChatTextFill, BsArrowRightSquareFill, BsArrowLeftSquareFill } from 'react-icons/bs'
import { AiFillDashboard } from 'react-icons/ai'
import img from '../../assets/img/city-profile.jpg'


const SideNav = () => {

    const [collapsed, setCollapsed] = useState(true)
    const [toggled, setToggled] = useState(true)

    const handleToggle = () => {
        setCollapsed(!collapsed)
    }

    return (
        <ProSidebar width={'270px'} collapsed={collapsed} collapsedWidth={'80px'} breakPoint="md" toggled={toggled} onToggle={handleToggle}>
            <SidebarHeader className="py-1">
                <Menu>
                    <MenuItem style={{ fontWeight: 'bold' }} icon={<FaGem />}><Link to={'/'}>Ceylon Ruby</Link></MenuItem>
                </Menu>
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape="square" popperArrow={true}>

                    <MenuItem icon={<AiFillDashboard />}><Link to={'/'}>Dashboard </Link></MenuItem>
                    <MenuItem icon={<FaUserAlt />}><Link to={'/user-dashboard'}>Users </Link></MenuItem>
                    <MenuItem icon={<RiAuctionFill />}><Link to={'/auctions'}></Link>Auctions </MenuItem>
                    <MenuItem icon={<RiBillFill />}><Link to={'/orders'}>Orders </Link></MenuItem>
                    <MenuItem icon={<RiAdminFill />}><Link to={'/admin-dashboard'}>Admins</Link></MenuItem>
                    {/* <MenuItem icon={<MdPayments />}><Link to={'/payment-history'}></Link>Payment History</MenuItem> */}
                    <MenuItem icon={<BsFillChatTextFill />}><Link to={'/chat'}></Link>Chat</MenuItem>
                </Menu>
            </SidebarContent>
            <SidebarFooter className="">

                {
                    collapsed ? (
                        <Menu>
                            <MenuItem icon={<BsArrowRightSquareFill />} onClick={() => setCollapsed(!collapsed)}></MenuItem>
                        </Menu>
                    ) : (
                        <Menu style={{alignSelf: "end"}}>
                            <MenuItem icon={<BsArrowLeftSquareFill />} onClick={() => setCollapsed(!collapsed)}></MenuItem>
                        </Menu>
                    )
                }



            </SidebarFooter>
        </ProSidebar>
    )
}

export default SideNav