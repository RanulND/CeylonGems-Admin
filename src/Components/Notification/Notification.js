import React from "react";
import {RiBillFill} from 'react-icons/ri'

const Notification = () => {

    return (
        <li className="notification">
            <a class="dropdown-item" href="#">
                <div className="d-flex pb-1">
                    <div className="icon p-1" >
                        <RiBillFill size={'30px'} style={{ borderRadius: '100%' }} color={'blue'} />
                    </div>
                    <div className="msg px-3">
                        <p className="notification-msg" style={{ fontSize: '0.9rem' }}>This is an test notification</p>
                        <div className="date" style={{ color: 'grey', fontSize: '0.7rem' }} >2022/06/22</div>
                    </div>
                </div>
                <hr className="m-0" />
            </a>
        </li>
    )
}

export default Notification