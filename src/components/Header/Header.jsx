// src/Header/Header.jsx
import React from 'react'
import { Logo, LogoutBtn } from '../index'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
  const auth = useSelector(s => s.auth.status)
  const navigate = useNavigate()
  const nav = [
    { name: 'Home', slug: '/', active: true },
    { name: 'All Posts', slug: '/all-posts', active: auth },
    { name: 'Add Post', slug: '/add-post', active: auth },
    { name: 'Login', slug: '/login', active: !auth },
    { name: 'Signup', slug: '/signup', active: !auth },
  ]

  return (
    <header className="w-full bg-primary text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <Link to="/" className="flex items-center">
          <Logo width="80px" />
        </Link>

        {/* desktop nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          {nav.filter(i => i.active).map(item => (
            <button
              key={item.name}
              onClick={() => navigate(item.slug)}
              className="text-sm hover:text-accent transition-colors duration-300"
            >
              {item.name}
            </button>
          ))}
          {auth && <LogoutBtn />}
        </nav>

        {/* mobile dropdown */}
        <div className="md:hidden dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-2 p-4 shadow-lg bg-base-100 text-base-content rounded-box w-40 z-50"
          >
            {nav.filter(i => i.active).map(item => (
              <li key={item.name}>
                <button
                  onClick={() => navigate(item.slug)}
                  className="w-full text-left text-base-content hover:text-accent transition"
                >
                  {item.name}
                </button>
              </li>
            ))}
            {auth && (
              <li>
                <LogoutBtn className="w-full text-left text-base-content" />
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  )
}