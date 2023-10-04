import React from 'react'
import '../Home/Home.css'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
// import { addProductasync } from '../../Services/Action/action';

function Home() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <>
    <Container>
            <section className='my-5 section-1'>
                <div className="container">
                    <div className="row">
                        <div className="main d-flex">
                            <div className="card col-3 align-items-center">
                                <h3 className='my-2'>Man Shirt</h3>
                                <button className='btn btn-primary Elebtn' onClick={()=> navigate('/Shirt')}>View All</button>
                            </div>
                            <div className="card1 col-3 d-none d-sm-block">
                                <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/g/c/v/40-10398377-roadster-original-imagkttmqzytbzhp.jpeg?q=70" alt="" />
                            </div>
                            <div className="card1 col-3 d-none d-sm-block">
                                <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/5/r/q/xxl-os-men-tshirt8-pockman-original-imagmh7zgzz8jazw.jpeg?q=70" alt="" />
                            </div>
                            <div className="card1 col-3 d-none d-sm-block">
                                <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/1/d/q/s-lvlup-silvergrey-voroxy-original-imagzjffhyknp7ju.jpeg?q=70" alt="" />
                            </div>
                           
                        </div>
                    </div>
                </div>
            </section>

            <section  className='my-5 section-1'>
                <div className="container">
                    <div className="row">
                        <div className="main d-flex">
                            <div className="card col-3  align-items-center">
                                <h3 className=' my-2'>Shoes </h3>
                                <button className='btn btn-primary' onClick={()=> navigate('/Shoes')}>View All</button>
                            </div>
                            <div className="card1 col-3 d-none d-sm-block" >
                                <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/68ae7ea7849b43eca70aac1e00f5146d_9366/Stan_Smith_Shoes_White_FX5502_01_standard.jpg" alt="" />
                            </div>
                            <div className="card1 col-3 d-none d-sm-block">
                                <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d0efe31f5fe4478aa9c1af46002e9f7d_9366/VS_Pace_2.0_Shoes_Grey_HP6007_01_standard.jpg" alt="" />
                            </div>
                            <div className="card1 col-3 d-none d-sm-block">
                                <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/069676a36a164de29337af8f009f726b_9366/HALICON_SHOES_Black_GC0607_01_standard.jpg" alt="" />
                            </div>
                          
                        </div>
                    </div>
                </div>
            </section>

            <section className='my-5 section-1'>
                <div className="container">
                    <div className="row">
                        <div className="main d-flex">
                            <div className="card col-3 align-items-center" >
                                <h3 className=' my-2'> Authentic Jersry</h3>
                                <button className='btn btn-primary' onClick={()=> navigate('/jersey')}>View All</button>
                            </div>
                            <div className="card1 col-3 d-none d-sm-block">
                                <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3a02e71e8c95420b91d1afc8010fd0f4_9366/Fortore_23_Jersey_Blue_IK5738_01_laydown.jpg" alt="" />
                            </div>
                            <div className="card1 col-3 d-none d-sm-block">
                                <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4490774625f540cfba39e586a088acfd_9366/Juventus_23-24_Home_Authentic_Jersey_Black_HR8248_HM4.jpg" alt="" />
                            </div>
                            <div className="card1 col-3 d-none d-sm-block">
                                <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c0e195494ec241c3bbafafbb00bb30ab_9366/Arsenal_Tiro_23_Training_Jersey_Black_HZ2181_01_laydown.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </Container>
        </>
    )
}

export default Home