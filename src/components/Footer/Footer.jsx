import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../index';

export default function Footer() {
  return (
    <footer className="w-full bg-secondary text-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2">
          <Logo width="100px" />
          <span className="text-sm">&copy; {new Date().getFullYear()} MyBlog</span>
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="/about"   className="hover:text-accent">About</Link>
          <Link to="/contact" className="hover:text-accent">Contact</Link>
          <Link to="/privacy" className="hover:text-accent">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}