import React, { useState } from 'react';
import authService from '../appwrite/auth';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../store/authSlice';
import { Button, Input, Logo } from './index';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [err, setErr] = useState("");

  const onSubmit = async data => {
    setErr("");
    try {
      await authService.createAccount(data);
      const userData = await authService.getCurrentUser();
      dispatch(login(userData));
      navigate('/');
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
        <h2 className="text-center text-3xl font-semibold text-primary mb-1">Create Account</h2>
        <p className="text-center text-sm text-neutral-content mb-4">
          Already a member? <Link to="/login" className="text-secondary font-medium hover:underline">Sign In</Link>
        </p>
        {err && <p className="text-red-500 text-sm text-center mb-4">{err}</p>}

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Full Name"
            {...register('name', { required: "Name is required" })}
            error={errors.name?.message}
          />
          <Input
            label="Email"
            type="email"
            {...register('email', {
              required: "Email is required",
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: "Invalid email address"
              }
            })}
            error={errors.email?.message}
          />
          <Input
            label="Password"
            type="password"
            {...register('password', { required: "Password is required" })}
            error={errors.password?.message}
          />
          <Button type="submit" className="w-full mt-2">
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}