import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import store from './store/store.js'
import { RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import { AuthLayout, Login } from './components';