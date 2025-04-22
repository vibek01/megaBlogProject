import React, { useEffect, useState } from 'react';
import appwriteService from '../appwrite/config';
import PostCard from '../components/PostCard';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const categories = ['JavaScript','React','CSS','Node.js','Python','DevOps'];
  const navigate = useNavigate();

  useEffect(() => {
    appwriteService.getPosts().then(res => {
      if (res) setPosts(res.documents);
    });
  }, []);

  return (
    <main className="w-full">
      {/* Hero (full‑width bg) */}
      <section className="w-full bg-gradient-to-r from-primary to-secondary text-primary-content">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold mb-4"
          >
            Welcome to MyBlog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl mb-8 animate-pulse"
          >
            Discover articles, tutorials & more.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="btn btn-accent btn-lg"
            onClick={() => navigate('/add-post')}
          >
            Get Started
          </motion.button>
        </div>
      </section>

      {/* Categories */}
      <section className="w-full bg-base-100">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map(cat => (
              <motion.div
                key={cat}
                whileHover={{ scale: 1.03 }}
                className="card bg-white shadow hover:shadow-lg transition p-4 text-center rounded-lg cursor-pointer"
              >
                <span className="font-medium text-gray-800">{cat}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="w-full bg-neutral">
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
      </section>

      {/* Newsletter CTA */}
      <section className="w-full bg-secondary-dark text-secondary-content">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
            <p className="mb-6">Subscribe for the latest posts and tutorials.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered w-full"
              />
              <button type="submit" className="btn btn-primary w-full sm:w-auto">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}