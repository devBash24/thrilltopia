"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-gray-900 text-white pt-12 pb-6'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Park Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className='text-2xl font-bold text-primary mb-4'>Thrilltopia Park</h3>
            <p className='text-gray-400 mb-4'>Where magic comes to life! Experience thrilling rides and unforgettable moments.</p>
            <div className='flex space-x-4'>
              {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                <Link 
                  key={social} 
                  href={`https://${social}.com`}
                  className='text-gray-400 hover:text-primary transition-colors'
                >
                  <span className='text-xl'>
                    {social === 'facebook' && '📘'}
                    {social === 'twitter' && '📱'}
                    {social === 'instagram' && '📸'}
                    {social === 'youtube' && '📺'}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
            <ul className='space-y-2'>
              {[
                { name: 'Attractions', href: '/attractions' },
                { name: 'Tickets', href: '/tickets' },
                { name: 'Events', href: '/events' },
                { name: 'Park Map', href: '/map' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className='text-gray-400 hover:text-primary transition-colors'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h4 className='text-lg font-semibold mb-4'>Opening Hours</h4>
            <ul className='space-y-2 text-gray-400'>
              <li>Monday - Friday: 10:00 - 21:00</li>
              <li>Saturday: 09:00 - 22:00</li>
              <li>Sunday: 09:00 - 21:00</li>
              <li className='text-primary'>* Holiday hours may vary</li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h4 className='text-lg font-semibold mb-4'>Newsletter</h4>
            <p className='text-gray-400 mb-4'>Subscribe for special offers and updates!</p>
            <form className='flex gap-2'>
              <input
                type="email"
                placeholder="Your email"
                className='bg-gray-800 text-white px-4 py-2 rounded-lg flex-grow'
              />
              <button
                type="submit"
                className='bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors'
              >
                Join
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className='border-t border-gray-800 mt-12 pt-6 text-center text-gray-400'
        >
          <p>© {currentYear} Thrilltopia Park. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer