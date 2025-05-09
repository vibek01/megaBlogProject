// src/pages/AddPost.jsx
import React from 'react';
import { PostForm } from '../components';

export default function AddPost() {
  return (
    <div className="w-full bg-neutral py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-6">New Post</h1>
        <PostForm />
      </div>
    </div>
  );
}