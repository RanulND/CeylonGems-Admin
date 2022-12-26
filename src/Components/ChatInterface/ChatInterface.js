import React from "react";
import Message from "../Message/Message";
import './ChatInterface.css'

const ChatInterface = () => {

    return(
        <div className="chat-interface">
            <div className="row vh-100">
                <Message />
            </div>
        </div>
    )
}

export default ChatInterface