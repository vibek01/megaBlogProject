import React, { useState, useEffect } from 'react';
import { PostCard } from '../components';
import appwriteService from '../appwrite/config';

export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPosts().then(res => {
      if (res) setPosts(res.documents);
    });
  }, []);

  return (
    <div className="w-full bg-neutral py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-primary mb-6">All Posts</h1>
        {posts.length === 0 ? (
          <p className="text-gray-500">No posts to display.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {posts.map(post => (
              <PostCard key={post.$id} {...post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}