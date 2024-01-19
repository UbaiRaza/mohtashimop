import React, { useState } from 'react'
import "./LoginSing.css"
import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { IoLockClosedSharp } from "react-icons/io5";

import { useNavigate } from 'react-router-dom';


const LoginSing = () => {

    const navigate = useNavigate();
    return (
        <div className="main">
            <div className="container">
                <div className="header">
                    <div className="text">Sing Up</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <div className="icon"> <CgProfile /></div>
                        <input type="text" placeholder='Name' />
                    </div>

                    <div className="input">
                        <div className="icon"><MdEmail /></div>
                        <input type="email" value="" placeholder="Email Id" />
                    </div>
                    <div className="input">
                        <div className="icon">
                            <IoLockClosedSharp />
                        </div>
                        <input type="password" value="" placeholder="Password" />
                    </div>
                </div>
                <div className="submit" onClick={() => { navigate('/Login') }}>Sing up</div>

            </div>
        </div>
        // </div >
    )
}

export default LoginSing
