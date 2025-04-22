import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
import { Button, Input, Logo } from './index';
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth';
import { useForm } from 'react-hook-form';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [err, setErr] = useState("");

  const onSubmit = async data => {
    setErr("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        dispatch(authLogin(userData));
        navigate('/');
      }
    } catch (e) {
      setErr(e.message);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-neutral">
      <div className="w-full max-w-lg bg-base-100 rounded-2xl shadow-lg p-10">
        <div className="flex justify-center mb-6">
          <Logo width="80px" />
        </div>
        <h2 className="text-center text-3xl font-semibold text-primary mb-1">Welcome Back</h2>
        <p className="text-center text-sm text-neutral-content mb-4">
          Don’t have an account? <Link to="/signup" className="text-secondary font-medium hover:underline">Sign Up</Link>
        </p>
        {err && <p className="text-red-500 text-sm text-center mb-4">{err}</p>}

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Email"
            type="email"
            placeholder="you@example.com"
            {...register('email', { required: "Email is required" })}
            error={errors.email?.message}
          />
          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            {...register('password', { required: "Password is required" })}
            error={errors.password?.message}
          />
          <Button type="submit" className="w-full mt-2">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}