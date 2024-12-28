"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'

type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset() // Clear form
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <section id='contact' className='py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-12'
        >
          <h2 className='text-4xl font-bold mb-4 text-primary'>Get in Touch</h2>
          <p className='text-xl text-gray-600 dark:text-gray-300'>
            Have questions? We'd love to hear from you! 🎡
          </p>
        </motion.div>
        
        <div className='max-w-[800px] mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className='space-y-4'
            >
              {[
                {
                  icon: '📞',
                  title: 'Call Us',
                  info: '+1 (555) 123-4567',
                  subInfo: 'Mon-Fri: 9AM - 6PM'
                },
                {
                  icon: '📍',
                  title: 'Location',
                  info: '123 Adventure Lane',
                  subInfo: 'Thrilltopia City, TP 12345'
                },
                {
                  icon: '📧',
                  title: 'Email',
                  info: 'info@thrilltopia.com',
                  subInfo: 'We reply within 24 hours'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md'
                >
                  <div className='text-3xl mb-2'>{item.icon}</div>
                  <h3 className='font-bold text-lg mb-1 text-white'>{item.title}</h3>
                  <p className='text-primary'>{item.info}</p>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>{item.subInfo}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className='bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg'
            >
              <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                <div>
                  <label className='block text-sm font-medium mb-2 text-white'>Your Name</label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    placeholder="John Doe"
                    className={`w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border ${
                      errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                    } focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all`}
                  />
                  {errors.name && (
                    <span className='text-red-500 text-sm mt-1'>{errors.name.message}</span>
                  )}
                </div>

                <div>
                  <label className='block text-sm font-medium mb-2 text-white'>Email Address</label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    type="email"
                    placeholder="john@example.com"
                    className={`w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border ${
                      errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                    } focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all`}
                  />
                  {errors.email && (
                    <span className='text-red-500 text-sm mt-1'>{errors.email.message}</span>
                  )}
                </div>

                <div>
                  <label className='block text-sm font-medium mb-2 text-white'>Subject</label>
                  <motion.select
                    whileFocus={{ scale: 1.01 }}
                    {...register('subject', { required: 'Please select a subject' })}
                    className={`w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border text-white ${
                      errors.subject ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                    } focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all`}
                  >
                    <option value="">Select a topic</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="group">Group Visits</option>
                    <option value="special">Special Events</option>
                    <option value="other">Other</option>
                  </motion.select>
                  {errors.subject && (
                    <span className='text-red-500 text-sm mt-1'>{errors.subject.message}</span>
                  )}
                </div>

                <div>
                  <label className='block text-sm font-medium mb-2 text-white'>Message</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    {...register('message', {
                      required: 'Message is required',
                      minLength: {
                        value: 10,
                        message: 'Message must be at least 10 characters'
                      }
                    })}
                    rows={4}
                    placeholder="How can we help you?"
                    className={`w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border text-primary ${
                      errors.message ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                    } focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none`}
                  />
                  {errors.message && (
                    <span className='text-red-500 text-sm mt-1'>{errors.message.message}</span>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className='w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className='text-green-500 text-center p-3 bg-green-50 rounded-lg'
                  >
                    Message sent successfully! We'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className='text-red-500 text-center p-3 bg-red-50 rounded-lg'
                  >
                    There was an error sending your message. Please try again.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact