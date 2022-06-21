import React, { useState } from "react";
import { Menu, MenuItem, ProSidebar, SidebarContent, SidebarFooter, SidebarHeader, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import './Navbar.css'
import 'react-pro-sidebar/dist/css/styles.css'
import { useAuth } from "../../Context/AuthContext";
import { IoMdNotifications } from 'react-icons/io'
import { RiAuctionFill, RiBillFill } from 'react-icons/ri'
import { BsFillChatTextFill } from 'react-icons/bs'
import Notification from "../Notification/Notification";

const Navbar = () => {

    const [collapsed, setCollapsed] = useState(true)
    const { currentUser, logout } = useAuth()

    const handleToggle = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div>

            {
                currentUser && (
                    <nav class="navbar navbar-expand-lg navbar-light bg-light px-5 py-3 mb-3">
                        <ul className="navbar-nav">
                            <li class="nav-item dropdown px-2">
                                <a class="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                    <IoMdNotifications data-bs-toggle="tooltip" data-bs-placement="top" title="Notifications" size={'22px'} />
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{maxHeight: 500, overflowY: "scroll"}}>
                                    {
                                        Array(10).fill(0).map(_ => <Notification />)
                                    }
                                </ul>
                            </li>
                            <li class="nav-item dropdown px-2">
                                <a class="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                    <RiAuctionFill data-bs-toggle="tooltip" data-bs-placement="top" title="Auctions" size={'22px'} />
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Notification />
                                    <Notification />
                                </ul>
                            </li>
                            <li class="nav-item dropdown px-2">
                                <a class="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                    <RiBillFill data-bs-toggle="tooltip" data-bs-placement="top" title="Orders" size={'22px'} />
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Notification />
                                    <Notification />
                                </ul>
                            </li>
                            <li class="nav-item dropdown px-2">
                                <a class="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                    <BsFillChatTextFill data-bs-toggle="tooltip" data-bs-placement="top" title="Chats" size={'22px'} />
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Notification />
                                    <Notification />
                                </ul>
                            </li>
                        </ul>
                        <div className="px-3">
                            <button className="btn btn-primary logoutBtn m-0" onClick={() => logout()}>
                                <span>Sign Out</span>
                            </button>
                        </div>
                    </nav>
                )
            }
        </div>
    )
}

export default Navbar;