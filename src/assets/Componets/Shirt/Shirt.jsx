import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import { addcart, getAllAsyncData } from '../../Action/Action';
import './Shirt.css'
import { Container } from 'react-bootstrap';


function Shirt() {

	const Allcartproduct = useSelector(state => state.productreducer.products);
	const isLogin = useSelector(state => state.productreducer.isLogin);


	// console.log(Allcartproduct, "ljkjjjjj");

	const [sercgData, setSearchData] = useState({
        search: ''
    });

	const allshirt = Allcartproduct.filter((data) => {
		if (data.category == "shirt") {
			return data
		}
	})

    const [proData, setProData] = useState(allshirt);
    const [option, setOption] = useState([]);
	

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const getdata = () => {
		dispatch(getAllAsyncData())
	}

	const handlefilter = (e) => {

        let value = e.target.value;
        // let ndata = product;
        const product = allshirt;



        // let ndata = getData();
        if (value != -1) {
            const filterdata = product.filter((pro) => {
                return pro.category == value
            })
            console.log(filterdata, "filterdata");
            setProData(filterdata);
        }
        else {
            setProData(allshirt);

        }
    }
	const handleSearch = (e) => {
        let name = e.target.name;
        let val = e.target.value;

        setSearchData({ [name]: val })

        // let mydata = getData();
        const product = allshirt



        let serchdata = product.filter((data) => {
            return data.title.toLowerCase().indexOf(val.toLowerCase()) > -1;
        })

        setProData(serchdata);
    }


	useEffect(() => {
		getdata()
	}, [])

	const handlecart = (id, data) => {
		dispatch(addcart(id, data));
		// navigate('/view')
	}

	useEffect(() => {
        // let alldata = getData()
        const product = allshirt;
       const allData = [...new Set(product.map(data => data.category))]
        setOption(allData);
    }, [])

	return (
		<>

			<Container>
				

				<div className="menu d-flex justify-content-evenly align-items-center">

				<div class="input-group w-50 my-4">
					<input type="text" class="form-control" placeholder="Search for products, brands and more" onChange={(e) => handleSearch(e)} />
					<button class="btn bg-white" type="button" id="button-addon2"><i class="fa-solid fa-magnifying-glass"></i></button>
				</div>

                                    <div className="span">
                                        <select onChange={(e) => handlefilter(e)}>
                                            <option value={"-1"}>All</option>
                                            {
                                                option.map((opt) => {
                                                    return (
                                                        <>
                                                            <option value={opt}>{opt}</option>
                                                        </>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>

                                </div>


				<div className="allboxes">
					<div className="row">
						{
							proData.map((data) => {
								return (
									<>

										<div class="product-card">
											<div class="badge">{data.rating}</div>
											<div class="product-tumb">
												<img src={data.image} alt="" />
											</div>
											<div class="product-details">
												<span class="product-catagory">Man shirt</span>
												<h4>{data.title}</h4>
												<p>{data.category}</p>
												<p>{data.qty}</p>
												<p>{data.description}</p>
												<div class="product-bottom-details">
													<div class="product-price">$ {data.price}</div>
													<div class="product-links">
													{
							isLogin ? <button onClick={() => handlecart(data.id,data)}className='addcartbtn'><i class="fa fa-shopping-cart"></i></button> :
							<>
								<button onClick={() => handlecart(data.id,data)}className='addcartbtn1 ' disabled><i class="fa fa-shopping-cart"></i></button>
								<h6 className='text-danger' >Please Login !!!</h6>
							</>
						}
													</div>
												</div>
											</div>
										</div>

									</>
								)
							})
						}
					</div>

				</div>
			</Container>

		</>
	)
}

export default Shirt