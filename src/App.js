import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'

import Header from './routes/Header'
import Main from './routes/Main'
import Details from './routes/Details'
import NotFound from './routes/NotFound'
import Login from './routes/Login'
import Search from './routes/Search'
import Signup from './routes/Signup'

function App() {
    const [backendData, setBData] = useState('')

    useEffect(() => {
        axios.get('http://localhost:8080/backend/test')
        .then(res => {
            setBData(res.data)
        })
        .catch(error => console.log(error))
    }, [])

    if (backendData === '') {
        setBData('Loading...')
    }

    return (
        <div className='App'>
            backendData@ResponseBody : {backendData} <br/>

            <BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Main />}></Route>
					<Route path='/details/*' element={<Details />}></Route>
					<Route path='/login' element={<Login />}></Route>
					<Route path='/signup' element={<Signup />}></Route>
					<Route path='/search' element={<Search />}></Route>
					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
					<Route path='*' element={<NotFound />}></Route>
				</Routes>
			</BrowserRouter>
        </div>
    )
}

export default App