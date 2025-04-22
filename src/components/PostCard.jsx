// src/components/PostCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function PostCard({
  $id, title, featuredImage, excerpt, createdAt
}) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="group card card-compact bg-base-100 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 duration-300">
        <figure className="h-48 overflow-hidden">
          <img
            src={featuredImage}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </figure>
        <div className="card-body p-4">
          <h3 className="card-title text-xl text-gray-800 group-hover:text-primary transition-colors">
            {title}
          </h3>
          {excerpt && <p className="text-sm text-gray-600 line-clamp-3">{excerpt}</p>}
          <div className="card-actions justify-between items-center text-xs text-gray-500 mt-4">
            {createdAt && <span>{new Date(createdAt).toLocaleDateString()}</span>}
            <span className="text-accent font-medium">Read More →</span>
          </div>
        </div>
      </div>
    </Link>
  );
}