'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function JoinPage() {
  const [formState, setFormState] = useState({
    name: '',
    collegeId: '',
    yearOfStudy: '',
    email: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulating an API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Replace this with your actual form submission logic
    if (Math.random() > 0.5) {
      setSubmitMessage('Thank you for joining! We\'ll be in touch soon.')
      setFormState({ name: '', collegeId: '', yearOfStudy: '', email: '' })
    } else {
      setSubmitMessage('Oops! There was an error submitting the form. Please try again.')
    }

    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center text-[#0f9d58] mb-8">Join Our Chapter</h1>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0f9d58]"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="collegeId" className="block text-gray-700 font-bold mb-2">College ID</label>
              <input
                type="text"
                id="collegeId"
                name="collegeId"
                value={formState.collegeId}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0f9d58]"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="yearOfStudy" className="block text-gray-700 font-bold mb-2">Year of Study</label>
              <select
                id="yearOfStudy"
                name="yearOfStudy"
                value={formState.yearOfStudy}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0f9d58]"
              >
                <option value="">Select Year</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
                <option value="5">5th Year</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0f9d58]"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#0f9d58] text-white font-bold py-2 px-4 rounded-md hover:bg-[#0c8c4d] transition-colors duration-200 disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Join Now'}
            </button>
            {submitMessage && (
              <p className="mt-4 text-center text-[#0f9d58]">{submitMessage}</p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  )
}

