import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import adminPhoto from '../../assets/img/admin.png'

function Login() {

    const [admin, setAdmin] = useState({
        email: '',
        password : ''
    })

    
    const [val,setVal] = useState()


    const handlechange = (event) => {
        setAdmin({ ...admin, [event.target.name]: event.target.value })
        // console.log(admin)
    }

    function adminSignIn(event) {
        event.preventDefault()

        // console.log(admin)

        const url = 'http://localhost:5000/api/auth/admin/signin'

        axios.post(url, admin).then(res => {
            if(res.data.data){
                console.log(res.data.message)
                window.location = '/'
            }else{
                console.log(res.data.message)
                alert(res.data.message)
            }
            
            setAdmin({
                email : '',
                password : ''
            })
            
            setVal()
            // Navigate('/')
        }).catch(err => {
            // console.log(err)
        })
    }

    return (
        <>
            <div className="container">
                <div className="row vh-100 align-items-center">
                    <div className="col-md-8">
                        <img src={adminPhoto}  style={{width : "100%"}}/>
                    </div>
                    <div className="col-md-4 card border-2 py-5 px-5">
                        <h4 className="py-3">CeylonRuby | Admin Panel</h4>
                        <form onSubmit={e => adminSignIn(e)}>
                            <div className="input-group input-group-outline my-5">
                                {/* <label className="form-label">Default</label> */}
                                <input type="email" className="form-control" name="email" value={val} onChange={(e) => handlechange(e)} placeholder='Email' />
                            </div>
                            <div className="input-group input-group-outline my-5">
                                {/* <label className="form-label">Default</label> */}
                                <input type="password" name="password" className="form-control" value={val} onChange={(e) => handlechange(e)} placeholder='Password' />
                            </div>
                            <div className="row justify-content-center py-3">
                                <button className="btn addButton" style={{width: "40%"}}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;