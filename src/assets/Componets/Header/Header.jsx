import React from 'react'
import './Header.css'
import img from './Flipkart-logo.png'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { LogoutAsync } from '../../Action/Action';

function Header() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cartproduct = useSelector(state => state.productreducer.product)


    const {isLogin} = useSelector(state => state.productreducer);
    const handleLogin = () =>{
        navigate('/')
    }
    const logout= () =>{
        dispatch(LogoutAsync());
    }
     
    return (
        <>
            <section className='bg-header'>
                <header>
                    <div className="container">
                        <div className="row-1 align-items-center justify-content-between">
                            <div className="logo">
                                <img src={img} alt="" onClick={() => navigate('/')}/>
                            </div>
 
     <div className="menu1">
                            
     <div className="login-btn ms-5">
                               {
                                isLogin ?
                                <button type="button" onClick={() => logout()}>Logout</button>
                                :
                                <button type="button" onClick={() => navigate('/Signup')}>Login</button>
                               }
                            </div>


                          

                            <div className="add-cart">
                                <h6 onClick={()=>navigate('/View')} ><i class="fa-solid fa-cart-shopping me-2"><span className='bg-danger px-2 ms-1 rounded-pill'>{cartproduct.length}</span></i></h6>
                            </div>
     </div>

                        </div>
                    </div>
                </header>
            </section>

        </>
    )
}

export default Header