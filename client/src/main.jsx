import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/homePage.jsx'
import Login from './pages/login.jsx'
import Contacts from './pages/contacts.jsx'
import Diagnosis from './pages/diagnosis.jsx'
//import Register from './pages/register.jsx'

import {BrowserRouter, Routes, Route} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/login' element = {<Login/>}/>
      {/* <Route path='/register' element = {<Register/>}/> */}
      <Route path='/contacts' element = {<Contacts/>}/>
      <Route path='/diagnosis' element = {<Diagnosis/>}/>
    </Routes>
  </BrowserRouter>,
)
