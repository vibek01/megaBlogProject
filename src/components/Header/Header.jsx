import React from 'react';
import { Logo, LogoutBtn } from '../index';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const auth = useSelector(s => s.auth.status);
  const navigate = useNavigate();
  const nav = [
    { name: 'Home', slug: '/', active: true },
    { name: 'Login', slug: '/login', active: !auth },
    { name: 'Signup', slug: '/signup', active: !auth },
    { name: 'All Posts', slug: '/all-posts', active: auth },
    { name: 'Add Post', slug: '/add-post', active: auth },
  ];

  return (
    <header className="w-full bg-primary text-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        <Link to="/" className="flex items-center">
          <Logo width="80px" />
        </Link>
        <div className="flex space-x-4">
          {nav.map(item =>
            item.active && (
              <button
                key={item.name}
                onClick={() => navigate(item.slug)}
                className="text-sm hover:text-accent transition"
              >
                {item.name}
              </button>
            )
          )}
          {auth && (
            <LogoutBtn className="text-sm hover:text-accent transition" />
          )}
        </div>
      </div>
    </header>
  );
}