import React, { useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'
import ChatCard from '../../Components/ChatCard/ChatCard';
import Navbar from "../../Components/Navbar/Navbar";
import chatImg from '../../assets/img/chat.png'
import './Chat.css'
import ChatInterface from '../../Components/ChatInterface/ChatInterface';
import SideNav from '../../Components/sideNav/sideNav';

const Chat = () => {
    const ref = useRef();
    const [msgs, setMsgs] = useState([])
    const [msg, setMsg] = useState('');

    const sendMsg = () => {
        setMsgs([...msgs, {
            msg,
            time: Date.now()
        }]);
        setMsg('')
    }

    useEffect(() => {
        ref.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest'
        });
    }, [msgs])

    return (
        <div className='d-flex'>
            <SideNav />
            <main style={{ display: 'flex', flexGrow: 1 }}>
                <div className='container-fluid chat'>
                    <div className='row' style={{ minHeight: '85vh' }}>
                        <div className='col-md-5'>
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
                                        <h4>Ranul Navojith</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='chat-body' style={{ flex: 8, paddingRight: 20, paddingLeft: 10, overflowY: 'scroll', maxHeight: 650 }}>
                                {
                                    msgs.map((e, idx) => (
                                        <div className={`row single-${idx % 2 === 0 ? 'guest' : 'user'}-message`}>
                                            <p>{e.msg}</p>
                                            <p className='time'>{new Date(e.time).toString()}</p>
                                        </div>
                                    ))
                                }
                                <div ref={ref} />
                            </div>
                            <div className='row chat-footer pl-4 pl-sm-5 pr-0 pr-sm-4 mt-0' style={{ flex: 1 }}>
                                <div className='form-inline' style={{ width: 'calc(100% - 50px)' }}>
                                    <input className='form-control mr-sm-2' type='text' value={msg} onChange={(e) => setMsg(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && sendMsg()} placeholder='Write your message...' aria-label='Search' style={{ width: '100%', border: 'none' }} />
                                </div>
                                <div className='send-btn' role='button' onClick={() => { }}>
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