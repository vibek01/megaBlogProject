// src/components/PostCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const cardVariants = {
  hover: { translateY: -8, boxShadow: '0 12px 24px rgba(0,0,0,0.15)' }
};

export default function PostCard({
  $id, title, featuredImage, excerpt, createdAt
}) {
  return (
    <Link to={`/post/${$id}`} className="group">
      <motion.div
        className="card card-compact bg-base-100 rounded-lg overflow-hidden cursor-pointer"
        whileHover="hover"
        variants={cardVariants}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <figure className="h-48 overflow-hidden">
          <img
            src={featuredImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </figure>
        <div className="card-body p-4">
          <h3 className="card-title text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          {excerpt && <p className="text-sm text-gray-600 line-clamp-3">{excerpt}</p>}
          <div className="card-actions justify-between items-center text-xs text-gray-500 mt-4">
            {createdAt && (
              <span>{new Date(createdAt).toLocaleDateString()}</span>
            )}
            <span className="text-accent font-medium">Read More →</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}