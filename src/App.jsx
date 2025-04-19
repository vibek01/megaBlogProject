import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css'
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom';


function App() {

  return (
    <>
      <h1 className=''>BLOG PROJECT</h1>
      <Button className={`bg-red-500 cursor-pointer`}>Click me</Button>
    </>
  )
}

export default App