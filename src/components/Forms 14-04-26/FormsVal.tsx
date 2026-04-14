import React, { useState } from 'react'
import Loginlogo from '../../assets/Login-page.png'
import './FormsVal.css'
import FetchApi from '../Fetch-10-04-26/FetchApi';
import { useNavigate } from 'react-router-dom';

export default function FormsVal() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Form submitted");
        sessionStorage.setItem("userLogged", username);
        navigate('/home')
    };


    return (
        <div className='container'>
            <div className="row">
                <div className="col-12 col-md-9">
                    <img className='img-logo' src={Loginlogo} alt="" />
                    <h2>Believe you can and you're halfway there.</h2>
                </div>
                <div className="col-12 col-md-3">
                    <form className='forms-main' onSubmit={handleSubmit}>
                        <div className='forms-div'>
                            <label>Username</label>
                            <input value={username}
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                                type='text' required></input>
                            {/* <label>Email</label>
                            <input type='email' required ></input> */}
                            <label>Password</label>
                            <input value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                                type='password' required></input>
                        </div>
                        <div>
                            <button className="" type='submit'>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
