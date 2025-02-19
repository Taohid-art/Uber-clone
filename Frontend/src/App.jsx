import React from 'react'
import {Routes,Route} from 'react-router-dom'
import UserLogin from './pages/UserLogin'
import UserSingup from './pages/UserSingup'
import DriverLogin from './pages/DriverLogin'
import DriverSingup from './pages/DriverSingup'
import Home from './pages/Home'
const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<UserLogin /> } />
          <Route path='/user-singup' element={<UserSingup /> }/>
          <Route path='/driver-login' element={<DriverLogin /> }/>
          <Route path='/driver-singup' element={<DriverSingup /> }/>
          <Route path='/home' element={<Home/> } />
        </Routes>
    </div>
  )
}

export default App