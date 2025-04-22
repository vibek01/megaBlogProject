// src/pages/Post.jsx
import React, { useEffect, useState } from 'react';
import { Button, Container } from '../components';
import service from '../appwrite/config';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Post() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const user = useSelector(s => s.auth.userData);
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (!slug) return navigate('/');
    service.getPost(slug).then(p => {
      if (!p) return navigate('/');
      setPost(p);
    });
  }, [slug, navigate]);

  if (!post) return null;
  const isAuthor = user?.$id === post.userid;

  return (
    <div className="w-full bg-neutral py-12 px-4">
      <Container className="space-y-6">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full object-cover transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        {isAuthor && (
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <Link to={`/edit-post/${post.$id}`}>
              <Button>Edit</Button>
            </Link>
            <Button
              className="bg-red-500 hover:bg-red-600"
              onClick={() =>
                service.deletePost(post.$id).then(ok => ok && navigate('/'))
              }
            >
              Delete
            </Button>
          </div>
        )}

        <h1 className="text-4xl font-bold text-primary">{post.title}</h1>
        <div className="prose prose-slate max-w-none">
          {parse(post.content)}
        </div>
      </Container>
    </div>
  );
}