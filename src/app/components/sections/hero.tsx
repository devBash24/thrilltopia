"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useCNavigation } from '@/hooks/useCNavigation'

const Hero = () => {
  const {onRouteChange} = useCNavigation()
  

  
  
  return (
    <section id='home' className='relative w-screen h-screen'>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <Image 
          src='/assets/hero.webp' 
          alt='Theme Park' 
          fill 
          priority
          className='object-cover brightness-50'
        />
      </div>

      {/* Content */}
      <div className='relative h-full flex items-center'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='max-w-2xl text-white'
          >
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>
              Welcome to the World of Adventure
            </h1>
            <p className='text-xl md:text-2xl mb-8 text-gray-200'>
              Experience thrilling rides, magical moments, and unforgettable memories.
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => onRouteChange({event: e, options: {location: "/auth", action: "push"}})}
                className='bg-primary px-8 py-4 rounded-lg font-bold text-white hover:bg-primary/90 transition-colors'
              >
                Book Tickets Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-white/10 backdrop-blur-sm px-8 py-4 rounded-lg font-bold text-white hover:bg-white/20 transition-colors'
              >
                View Attractions
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className='absolute bottom-8 left-1/2 -translate-x-1/2'
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className='text-white text-4xl'
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero