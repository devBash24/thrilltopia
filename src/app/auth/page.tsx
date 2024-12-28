"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { useCNavigation } from '@/hooks/useCNavigation'

type AuthData = {
  email: string
  password: string
  name?: string
}

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const {onRouteChange} = useCNavigation()
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<AuthData>()

  const onSubmit = async (data: AuthData) => {
    setIsLoading(true)
    try {
      // Replace with your actual auth endpoint
      const endpoint = isLogin ? '/api/login' : '/api/register'
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      
      if (response.ok) {
        // Handle successful auth
        window.location.href = '/'
      } else {
        throw new Error('Auth failed')
      }
    } catch (error) {
      console.error('Auth error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-primary/20 to-gray-900 flex items-center justify-center p-4'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-md w-full p-8'
      >
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-bold text-primary mb-2'>
            {isLogin ? 'Welcome Back!' : 'Create Account'}
          </h1>
          <p className='text-gray-600 dark:text-gray-300'>
            {isLogin 
              ? 'Enter your details to access your account' 
              : 'Join us for exclusive theme park benefits'}
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          {!isLogin && (
            <div>
              <label className='block text-sm font-medium mb-2'>Name</label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                {...register('name', { required: !isLogin })}
                className={`w-full p-3 rounded-lg border ${
                  errors.name ? 'border-red-500' : 'border-gray-200'
                } focus:outline-none focus:border-primary`}
                placeholder="John Doe"
              />
              {errors.name && (
                <span className='text-red-500 text-sm mt-1'>Name is required</span>
              )}
            </div>
          )}

          <div>
            <label className='block text-sm font-medium mb-2 text-white'>Email</label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              className={`w-full p-3 rounded-lg border ${
                errors.email ? 'border-red-500' : 'border-gray-200'
              } focus:outline-none focus:border-primary`}
              placeholder="you@example.com"
            />
            {errors.email && (
              <span className='text-red-500 text-sm mt-1'>{errors.email.message}</span>
            )}
          </div>

          <div>
            <label className='block text-sm font-medium mb-2 text-white'>Password</label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters'
                }
              })}
              className={`w-full p-3 rounded-lg border ${
                errors.password ? 'border-red-500' : 'border-gray-200'
              } focus:outline-none focus:border-primary`}
              placeholder="••••••••"
            />
            {errors.password && (
              <span className='text-red-500 text-sm mt-1'>{errors.password.message}</span>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isLoading}
            onClick={(e) => onRouteChange({event: e, options: {location: "/park", action: "push"}})}
            className='w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50'
          >
            {isLoading ? 'Processing...' : isLogin ? 'Sign In' : 'Create Account'}
          </motion.button>
        </form>

        <div className='mt-6 text-center'>
          <button
            onClick={() => {
              setIsLogin(!isLogin)
              reset()
            }}
            className='text-primary hover:underline'
          >
            {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
          </button>
        </div>

        {/* Social Login Options */}
        <div className='mt-8'>
          <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-gray-200'></div>
            </div>
            <div className='relative flex justify-center text-sm'>
              <span className='px-2 bg-white dark:bg-gray-800 text-gray-500'>
                Or continue with
              </span>
            </div>
          </div>

          <div className='mt-6 grid grid-cols-2 gap-4'>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className='flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-white'
            >
              <span className='mr-2 '>🌐</span> Google
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className='flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-white'
            >
              <span className='mr-2'>📘</span> Facebook
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default AuthPage
