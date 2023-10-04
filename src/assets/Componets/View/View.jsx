import React, { useEffect } from 'react'
import { Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import {getAllAsyncData,  productremove } from '../../Action/Action';
import { useNavigate } from 'react-router';

function View() {
    const cartproduct = useSelector(state => state.productreducer.product)
        console.log("ProductData",cartproduct);

        const dispatch = useDispatch();
        const navigate = useNavigate();
        // let totalprice = 0;

 
     

        const getdata = () => {
          dispatch(getAllAsyncData());
        }
       
        let totalprice = 0;
  
        
        
        const handleRemove = (id) =>{
          dispatch(productremove(id))
        }
        
        useEffect(() => {
          getdata();
        })

  return (
    <>
    <Container>
        <h1 className='text-center my-3'>View Cart</h1>

        <Table striped bordered hover>
        <thead >
            <tr className='me-4'>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Rating</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody >
            {
              cartproduct.map((data) => {
                totalprice += data.price * data.qty
                return (
                  <tr>
                    <td>
                      <div style={{width:"100px", height:"100px"}}>
                        <img src={data.image} alt="" style={{width:"100%", height:"100%",objectFit:"cover"}} />
                      </div>
                    </td>
                    <td>{data.title}</td>
                    <td>{data.category}</td>
                    <td>{data.rating}</td>
                    <td>
                      <button onClick={() => dec(data.id)} className='btn btn-danger me-2'>-</button>
                      {data.qty} 
                      <button className='btn btn-success ms-2' onClick={() => inc(data.id)}>+</button>
                    </td>
                    <td>{data.price}</td>
                    <td>
         
                      <button className='btn btn-danger' onClick={() => handleRemove(data.id)}>Remove</button></td>
                  </tr>
                )
              })
            }
          </tbody>
   
        </Table>
            <div className="d-flex justify-content-end" rowspan="4">
            <h5>Total : <span className='text-success'>₹{totalprice}</span></h5>
          </div>
    </Container>
    </>
  )
}

export default View