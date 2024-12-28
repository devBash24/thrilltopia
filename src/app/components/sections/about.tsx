"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  return (
    <section id='about' className='section py-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-12'
        >
          <h2 className='text-4xl font-bold mb-4 text-primary'>Welcome to Thrilltopia Park</h2>
          <p className='text-xl text-gray-600 dark:text-gray-300'>Where Magic Comes to Life!</p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Image Carousel Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className='relative'
          >
            <div className='aspect-video relative rounded-2xl overflow-hidden'>
              <Image
                src="/assets/about.webp" // Replace with your park image
                alt="Wonderland Park Overview"
                fill
                className='object-cover'
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative element */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              className='absolute -z-10 top-4 left-4 w-full h-full bg-primary/20 rounded-2xl'
            />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className='space-y-6'
          >
            <h3 className='text-2xl font-bold text-primary'>
              Experience the Adventure
            </h3>
            
            <p className='text-gray-600 dark:text-gray-300'>
              Discover a world of excitement at Thrilltopia Park! Our award-winning amusement park 
              offers thrilling rides, magical attractions, and unforgettable experiences for the 
              whole family.
            </p>

            {/* Park Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className='grid grid-cols-2 gap-4 pt-4'
            >
              {[
                { icon: '🎢', title: 'Thrilling Rides' },
                { icon: '🎪', title: 'Live Shows' },
                { icon: '🍽️', title: 'Dining Options' },
                { icon: '🎮', title: 'Game Zones' }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className='bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md'
                >
                  <div className='text-3xl mb-2'>{feature.icon}</div>
                  <div className='font-semibold text-white'>{feature.title}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Park Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className='grid grid-cols-3 gap-4 pt-6'
            >
              {[
                { number: '30+', label: 'Attractions' },
                { number: '15+', label: 'Restaurants' },
                { number: '1M+', label: 'Yearly Visitors' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className='text-center bg-primary/10 rounded-lg p-4'
                >
                  <div className='text-2xl font-bold text-primary'>{stat.number}</div>
                  <div className='text-sm text-gray-600 dark:text-gray-400'>{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className='pt-6'
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors'
              >
                Book Your Visit Now
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About