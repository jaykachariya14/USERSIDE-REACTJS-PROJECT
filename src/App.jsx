import React from 'react'
import { Route, Routes } from 'react-router'
import Header from './assets/Componets/Header/Header'

import EditData from './assets/Componets/EditData/Edit'
import Home from './assets/Componets/Home/Home'
import Shirt from './assets/Componets/Shirt/Shirt'
import Shoes from './assets/Componets/Shoes/Shoes'
import Jersey from './assets/Componets/Jersey/Jersey'
import Signup from './assets/Componets/Signup/Signup'
import Signin from './assets/Componets/Signin/Signin'
import View from './assets/Componets/View/view'


function App() {

	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home/>}></Route>
				<Route path='/View' element={<View/>}></Route>
				<Route path='/shirt' element={<Shirt/>}></Route>
				<Route path='/shoes' element={<Shoes/>}></Route>
				<Route path='/jersey' element={<Jersey/>}></Route>
				<Route path='/editproduct/:id' element={<EditData/>}></Route>
				<Route path='/Signup' element={<Signup/>}></Route>
				<Route path='/Signin' element={<Signin/>}></Route>

				
			</Routes>
		</>
	)
}

export default App
