import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Login() {
    const navigate=useNavigate();
    const[login,setlogin]=useState({email:'',password:''})
    function handlelogin() {
        axios.post('http://127.0.0.1:2000/login',login).then((res,err)=>{
            if(res.data.status==="success"){
                toast("login successfull")
                navigate('/page1')
            }else{
                toast("Please write valid email and password")
            }
        })
    }
    return (
        <>
            <div className='login'>
                <input type='email' placeholder='Enter your Email' onInput={(e)=>setlogin({...login,email:e.target.value})} />
                <input type='password' placeholder='Enter your password' onInput={(e)=>setlogin({...login,password:e.target.value})} />
                <button onClick={() => handlelogin()}>Login</button>
                Don`t have an Account:<Link to='/registration'>Register now</Link>
            </div>
            <ToastContainer />
        </>
    )
}
