// src/Header/LogoutBtn.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

export default function LogoutBtn({ className = '' }) {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => dispatch(logout()));
  };

  return (
    <button
      onClick={logoutHandler}
      className={`inline-block px-4 py-2 rounded-full transition-all duration-300 hover:bg-secondary-dark focus:ring-2 focus:ring-accent ${className}`}
    >
      Logout
    </button>
  );
}