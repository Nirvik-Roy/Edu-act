import { useState } from 'react'
import './App.css'
import Header from './Layout/Header'
import Banner from './View/Home/Banner'
import Home from './View/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './MainLayout/MainLayout'
import Course from './View/Course/Course'
import About from './View/About/About'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route path='' element={<Home/>}/>
          <Route path='/course' element={<Course/>}/>
          <Route path='/about' element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
