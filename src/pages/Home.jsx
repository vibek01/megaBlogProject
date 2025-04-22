// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import appwriteService from '../appwrite/config';
import PostCard from '../components/PostCard';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const sectionFade = {
  hidden: { opacity: 0, y: 30 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
  })
};

export default function Home() {
  const [posts, setPosts] = useState([]);
  const categories = ['JavaScript','React','CSS','Node.js','Python','DevOps'];
  const navigate = useNavigate();

  useEffect(() => {
    appwriteService.getPosts().then(res => res && setPosts(res.documents));
  }, []);

  return (
    <main className="w-full">
      {/* Hero */}
      <motion.section
        className="w-full bg-gradient-to-r from-primary to-secondary text-primary-content"
        initial="hidden"
        animate="visible"
        variants={sectionFade}
        custom={0}
      >
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold mb-4"
          >
            Welcome to MyBlog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl mb-8"
          >
            Discover articles, tutorials & more.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="btn btn-accent btn-lg transition-all duration-300"
            onClick={() => navigate('/add-post')}
          >
            Get Started
          </motion.button>
        </div>
      </motion.section>

      {/* Categories */}
      <motion.section
        className="w-full bg-base-100"
        initial="hidden"
        animate="visible"
        variants={sectionFade}
        custom={1}
      >
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat}
                custom={idx}
                variants={sectionFade}
                whileHover={{ scale: 1.03 }}
                className="card bg-white shadow-md hover:shadow-lg transition-transform duration-300 p-4 text-center rounded-lg cursor-pointer"
              >
                <span className="font-medium text-gray-800">{cat}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Latest Posts */}
      <motion.section
        className="w-full bg-neutral"
        initial="hidden"
        animate="visible"
        variants={sectionFade}
        custom={2}
      >
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Latest Posts</h2>
          {posts.length === 0 ? (
            <p className="text-center text-gray-600">Login to read posts</p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {posts.map(post => (
                <PostCard key={post.$id} {...post} />
              ))}
            </div>
          )}
        </div>
      </motion.section>

      {/* Newsletter CTA */}
      <motion.section
        className="w-full bg-secondary-dark text-secondary-content"
        initial="hidden"
        animate="visible"
        variants={sectionFade}
        custom={3}
      >
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
            <p className="mb-6">Subscribe for the latest posts and tutorials.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered w-full bg-white text-black transition-all duration-300"
              />
              <button
                type="submit"
                className="btn btn-primary w-full sm:w-auto transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </motion.section>
    </main>
  );
}