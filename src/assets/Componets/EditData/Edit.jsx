import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { ADDproductasync, UpdateProductasync } from '../../Action/Action';
import { useNavigate } from 'react-router';

function EditData() {

 const Product = useSelector(state=>state.productreducer.product)

console.log(Product,"Product");

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [inputValue, setinputValue] = useState(Product[0]);

    const handlechange = (e) =>{
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setinputValue({...inputValue, [name]:value})
    } 

    const handlesubmit =(e) =>{
        e.preventDefault();
        dispatch(UpdateProductasync(inputValue))
        setinputValue({
            title : '',
            category : '',
            price : '',
            qty : '',
            rating : '',
            image : '',
            description : ''
        });
        navigate('/View')
    }
    return (
        <>
            <Container>
                <Form onSubmit={(e)=>handlesubmit(e)}>
                    <Form.Group className="mb-3 col-6 mt-5" controlId="formBasicEmail">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Product" value={inputValue.title} onChange={handlechange} name='title'/>
                    </Form.Group>
                    <Form.Group className="mb-3 col-6" >
                        <Form.Label>Category</Form.Label>
                        <Form.Control type="text" placeholder="Add Category" value={inputValue.category} onChange={handlechange} name='category'/>
                    </Form.Group>
                    <Form.Group className="mb-3 col-6" >
                        <Form.Label>Price</Form.Label>
               <Form.Control type="text" placeholder="Price" value={inputValue.price} onChange={handlechange} name='price'/>
                    </Form.Group>
                    <Form.Group className="mb-3 col-6" >
                        <Form.Label>Rating</Form.Label>
                        <Form.Control type="text" placeholder="Add rating" value={inputValue.rating} onChange={handlechange} name='rating'/>
                    </Form.Group>
                    <Form.Group className="mb-3 col-6" >
                        <Form.Label>qty</Form.Label>
                        <Form.Control type="text" placeholder="Add qty" value={inputValue.qty} onChange={handlechange} name='qty'/>
                    </Form.Group>
                    <Form.Group className="mb-3 col-6" >
                        <Form.Label>Product Image</Form.Label>
                        <Form.Control type="text" placeholder="Add Image" value={inputValue.image} onChange={handlechange} name='image'/>
                    </Form.Group>

                    <Form.Group className="mb-3 col-6" >
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Product Description" value={inputValue.description} onChange={handlechange} name='description'/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default EditData