import React, { useEffect, useState } from "react";
import { useChat } from "../../Context/ChatContext";
import './ChatCard.css'

const ChatCard = ({ userX }) => {

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { selectedUserMsgs } = useChat()

    const countUnread = () => {
        var count = 0
        for(let i=0; i< user?.chats.length; i++){
            if(user?.chats[i]?.isRead == false){
                count++
            }
        }
        return count
    }

    useEffect(() => {
        setUser(userX)
        setIsLoading(false)
    }, [selectedUserMsgs])


    return (
        <div className="chat-card p-0 m-0">
            {
                !isLoading && (
                    <div className="row align-items-center justify-content-center px-4 py-2">
                        <div className="col-md-2">
                            IMG
                        </div>
                        <div className="col-md-10 name">
                            <div className="row py-1">
                                <div className="col-md-8 user" style={{ textAlign: 'left' }}>
                                    <span className="nameTxt">{user?.name}</span>
                                </div>
                                <div className="col-md-4 date" style={{ textAlign: 'right' }}>
                                    {
                                        // console.log('user', user?.chats[0]?.msg)
                                        new Date(user?.chats[user?.chats.length - 1]?.sentAt).toUTCString().split(' ').slice(0, 4).join(' ')
                                        
                                    }
                                </div>
                            </div>
                            <div className="row py-1">
                                <div className="col-md-8 msg" style={{ textAlign: 'left' }} >
                                    <span className="">
                                        {
                                            // console.log('user', user?.chats[0]?.msg)
                                            user?.chats[user?.chats.length - 1]?.msg
                                        }
                                    </span>
                                </div>
                                <div className="col-md-4 unread-msg" style={{ textAlign: 'right' }}>
                                    <span className="">{countUnread()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            <hr />
        </div>
    )
}

export default ChatCard