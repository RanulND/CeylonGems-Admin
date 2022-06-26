import React, { createContext, useContext, useEffect, useState } from "react";
import { getChats, getExistingChats } from "../Services/FirebaseService";
import {getUser} from '../Services/UserService'

const ChatContext = createContext({
    existingChats : null,
    selectedUser : null,
    setSelectedUser : () => {},
    selectedUserMsgs : null,
    setSelectedUserMsgs : () => {},
    selectedUserId : null,
    setSelectedUserId : () => {}
})

export const useChat = () => useContext(ChatContext)

const ChatProvider = ({children}) => {
    const [existingChats, setExisitingChats] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [selectedUserId, setSelectedUserId] = useState(null)
    const [selectedUser, setSelectedUser] = useState(null)
    const [selectedUserMsgs, setSelectedUserMsgs] = useState(null)

    const retrieveChatUsers = async () => {
        try {
            const res = await getExistingChats()
            console.log(res.val())
            var users = []
            const keys = Object.keys(res.val())
            keys.forEach(obj => {
                var data = {
                    ...res.val()[obj],
                    id: obj
                }
                users.push(data)
            })
            setExisitingChats(users)
        } catch (err) {
            console.log(err)
        }
    }

    const retrieveUserChats = async () => {
        try {
            var mes = []
            const res = await getChats(selectedUserId)
            console.log(res.val().chats)
            const keys = Object.keys(res.val().chats)
            keys.forEach(obj => {
                mes.push(res.val().chats[obj])
            })
            setSelectedUserMsgs(mes)
        } catch (err) {
            console.log(err)
        }

    }

    const setCurrentUser = async () => {
        try {
            const res = await getUser(selectedUserId)
            // console.log(res.data.data)
            setSelectedUser(res.data.data)
        } catch (err) {
            console.log(err)
        }
    } 

    useEffect(() => {
        setCurrentUser()
        retrieveUserChats()
    }, [selectedUserId])

    useEffect(() => {
        retrieveChatUsers()
        // setSelectedUserId('61ed320383b29391c338d7c7')
        setIsLoading(false)
    }, [])

    if(isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    return(
        <ChatContext.Provider value={{
            existingChats,
            selectedUser,
            setSelectedUser,
            selectedUserMsgs,
            setSelectedUserMsgs,
            selectedUserId,
            setSelectedUserId
        }}>
            {/* {console.log(existingChats)} */}
            {!isLoading && children}
        </ChatContext.Provider>
    )
}

export const ChatConsumer = ChatContext.Consumer

export default ChatProvider