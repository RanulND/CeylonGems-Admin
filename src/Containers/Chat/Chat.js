import React, { useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'
import ChatCard from '../../Components/ChatCard/ChatCard';
import Navbar from "../../Components/Navbar/Navbar";
import chatImg from '../../assets/img/chat.png'
import './Chat.css'
import ChatInterface from '../../Components/ChatInterface/ChatInterface';
import SideNav from '../../Components/sideNav/sideNav';
import { getChats, updateChats } from '../../Services/FirebaseService';
import { useChat } from '../../Context/ChatContext';

const Chat = () => {
    const ref = useRef();
    const [msgs, setMsgs] = useState([])
    const [msg, setMsg] = useState('')
    const { existingChats, selectedUserMsgs, setSelectedUserMsgs, setSelectedUserId, selectedUserId, selectedUser } = useChat()
    const [users, setUsers] = useState([])

    const sendMsg = () => {
        setSelectedUserMsgs([...selectedUserMsgs, {
            msg: msg,
            sentAt: Date.now(),
            isRead: false,
            sender: 'admin'
        }]);
        const payload = {
            chats: [...selectedUserMsgs, {
                msg: msg,
                sentAt: Date.now(),
                isRead: false,
                sender: 'admin'
            }],
            name : selectedUser.firstName + ' ' + selectedUser.lastName
        }
        updateChat(payload)
        setMsg('')
    }

    const handleChatCardClick = (id) => {
        setSelectedUserId(id)
        const newArray = selectedUserMsgs?.map(obj => {
            obj.isRead = true
        })
        setSelectedUserMsgs(newArray)
        const payload = {
            chats: newArray,
            name : selectedUser?.firstName + ' ' + selectedUser?.lastName
        }
        updateChat(payload)
    }

    useEffect(() => {
        ref.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest'
        });

        // updateChat()
    }, [selectedUserMsgs])

    const updateChat = async (payload) => {
        try {
            const res = await updateChats(selectedUserId, payload)

        } catch (err) {
            console.log(err)
        }
    }

    // const retrieveChats = async () => {
    //     try {
    //         var mes = []
    //         const res = await getChats('61ed320383b29391c338d7c7')
    //         // console.log(res.val().chats)
    //         const keys = Object.keys(res.val().chats)
    //         keys.forEach(obj => {
    //             mes.push(res.val().chats[obj])
    //         })
    //         setMsgs(mes)
    //     } catch (err) {
    //         console.log(err)
    //     }

    // }

    useEffect(() => {
        // retrieveChats()

    }, [])

    return (
        <div className='d-flex'>
            <SideNav />
            {
                console.log('msg', selectedUserMsgs)
            }
            <main style={{ display: 'flex', flexGrow: 1 }}>
                <div className='container-fluid chat'>
                    <div className='row' style={{ minHeight: '85vh' }}>
                        <div className='col-md-5'>
                            {
                                existingChats?.map(user => (
                                    <button className='btn chatcard p-0' onClick={() => handleChatCardClick(user.id)}>
                                        {/* {user.name} */}
                                        <ChatCard userX={user} key={user.name} />
                                        {/* {console.log('chat', user)} */}
                                    </button>
                                ))
                            }
                            <button className='btn chatcard p-0'>
                                <ChatCard />
                            </button>
                            <button className='btn chatcard p-0 m-0'>
                                <ChatCard />
                            </button>
                            <button className='btn chatcard p-0'>
                                <ChatCard />
                            </button>
                            <button className='btn chatcard p-0'>
                                <ChatCard />
                            </button>
                        </div>
                        <div className='col-md-7 border-start d-flex' style={{ flexDirection: 'column', overflowX: 'hidden' }}>
                            {/* <div className='row vh-100 justify-content-center align-items-center'>
                        <img src={chatImg} className='chat-img' />
                        <span style={{ fontWeight: 'bold', textAlign: 'center' }}>Ceylon Ruby</span>
                    </div> */}
                            {/* <ChatInterface /> */}
                            <div className='chat-header' style={{ flex: 1 }}>
                                <div className='row mt-0 align-items-center' >
                                    <img src={require('../../assets/img/team-2.jpg')} alt={'User'} className='p-0 m-2 user-image col-4' />
                                    <div className='chat-header-info col-6'>
                                        <h4>{selectedUser?.firstName + ' ' + selectedUser?.lastName}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='chat-body' style={{ flex: 8, paddingRight: 20, paddingLeft: 10, overflowY: 'scroll', maxHeight: 650 }}>
                                {
                                    selectedUserMsgs?.map((e) => (
                                        <div className={`row single-${e.sender === 'user' ? 'guest' : 'user'}-message`} key={e.sentAt}>
                                            <p>{e.msg}</p>
                                            <p className='time'>{new Date(e.sentAt).toUTCString().split(' ').slice(0, 4).join(' ')}</p>
                                        </div>
                                    ))
                                }
                                <div ref={ref} />
                            </div>
                            <div className='row chat-footer pl-4 pl-sm-5 pr-0 pr-sm-4 mt-0' style={{ flex: 1 }}>
                                <div className='form-inline' style={{ width: 'calc(100% - 50px)' }}>
                                    <input className='form-control mr-sm-2 p-2' type='text' value={msg} onChange={(e) => setMsg(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && sendMsg()} placeholder='Write your message and press enter to send' aria-label='Search' style={{ width: '100%', border: 'none' }} />
                                </div>
                                <div className='send-btn btn' role='button' onClick={() => { sendMsg() }}>
                                    <i className='fas fa-paper-plane' style={{ color: '#fff' }}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    )
}

export default Chat