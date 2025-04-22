// src/pages/EditPost.jsx
import React, { useEffect, useState } from 'react';
import { PostForm } from '../components';
import appwriteService from '../appwrite/config';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (!slug) return navigate('/');
    appwriteService.getPost(slug).then(p => {
      if (!p) return navigate('/');
      setPost(p);
    });
  }, [slug, navigate]);

  return post ? (
    <div className="w-full bg-neutral py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-6">Edit Post</h1>
        <PostForm post={post} />
      </div>
    </div>
  ) : null;
}
