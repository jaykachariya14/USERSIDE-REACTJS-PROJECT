import React, { useState } from 'react'
import './Signup.css'
import { useNavigate } from 'react-router'
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { singUpasync } from '../../Action/Action';


function Signup() {
 
    const [inputvalue , setinputvalue] = useState({
        email : '',
        password : ''
    })

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handlechange=(e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setinputvalue({...inputvalue,[name]: value});
    }

    const handlesubmit = (e) => {

        e.preventDefault();
        console.log("inputvalue",inputvalue);

        dispatch(singUpasync(inputvalue));

        setinputvalue(
            {
                email : '',
                password : ''
            }
        )
    }
  return (
    <>
<Container className='d-flex justify-content-center'>
<main>
        <section class="section-login">
            <div class="section-main">
                {/* <div class="section-login-1">
                    <div class="section-login-1-main">

                        <h1 class="section-login-1-title">Gradie</h1>
                        <p class="section-login-1-text">Beautiful gradients in seconds.</p>
                        <div class="section-login-1-img">
                            <img src="https://rvs-gradie-signup-page.vercel.app/Assets/iPhone-Mockup.png" alt=""/>
                        </div>
                        
                    </div>
                </div> */}
                <div class="section-login-2">
                    <div className="form">


                    <div class="section-login-2-main">
                        
                        <h1 class="section-login-2-title" >Signup</h1>
                        <form class="section-login-2-form" onSubmit={(e) => handlesubmit(e)}>
                            <div class="login-form-1">
                                <label for="input-email">Email</label>
                                <input type="text" id="input-email" name='email' onChange={handlechange} value={inputvalue.email} placeholder="john@example.com" required/>
                            </div>
                      
                            <div class="login-form-3">
                                <label for="input-password">Password</label>
                                <input type="password" id="input-password" name='password' onChange={handlechange}  value={inputvalue.password} placeholder="At least 8 characters" required/>
                            </div>
                            <div class="login-form-4">
                                <input type="checkbox" id="input-checkbox"/>
                                <p>By creating an account, you agree to the <a href="#">Terms & Conditions.</a></p>
                            </div>
                            <div class="login-form-submit-btn">
                                <button >Create an Account</button>
                            </div>
                            <div class="login-form-5">
                                <p>Already have an account? <a  onClick={()=>navigate('/Signin')}>Sign In</a></p>
                            </div>
                        </form>
                        
                    </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</Container>
  
  
    </>
  )
}

export default Signup