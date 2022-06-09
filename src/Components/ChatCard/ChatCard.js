import React from "react";
import './ChatCard.css'

const ChatCard = () => {

    return (
        <div className="chat-card p-0 m-0">
            <div className="row align-items-center justify-content-center px-4 py-2">
                <div className="col-md-2">
                    IMG
                </div>
                <div className="col-md-10 name">
                    <div className="row py-1">
                        <div className="col-md-8 user" style={{ textAlign: 'left' }}>
                            <span className="nameTxt"  >Ranul Navojith</span>
                        </div>
                        <div className="col-md-4 date" style={{ textAlign: 'right' }}>
                            2021/05/26
                        </div>
                    </div>
                    <div className="row py-1">
                        <div className="col-md-8 msg" style={{ textAlign: 'left' }} >
                            <span className="">Hi</span>
                        </div>
                        <div className="col-md-4 unread-msg" style={{ textAlign: 'right' }}>
                            <span className="">4</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default ChatCard