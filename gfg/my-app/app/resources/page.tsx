'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const resources = [
  {
    title: 'Introduction to Data Structures',
    type: 'Article',
    link: 'https://www.geeksforgeeks.org/data-structures/',
    tags: ['data structures', 'beginner']
  },
  {
    title: 'Sorting Algorithms Explained',
    type: 'Tutorial',
    link: 'https://www.geeksforgeeks.org/sorting-algorithms/',
    tags: ['algorithms', 'sorting', 'intermediate']
  },
  {
    title: 'Learn Python Programming',
    type: 'Course',
    link: 'https://www.geeksforgeeks.org/python-programming-language/',
    tags: ['python', 'programming', 'beginner']
  },
  {
    title: 'Web Development Roadmap',
    type: 'Guide',
    link: 'https://www.geeksforgeeks.org/web-development/',
    tags: ['web development', 'frontend', 'backend']
  },
  {
    title: 'Machine Learning Basics',
    type: 'Article',
    link: 'https://www.geeksforgeeks.org/machine-learning/',
    tags: ['machine learning', 'AI', 'advanced']
  }
]

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredResources = resources.filter(resource =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-[#0f9d58] mb-8">Resources</h1>
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search resources..."
            className="w-full p-2 border border-gray-300 rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource, index) => (
            <ResourceCard key={index} resource={resource} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ResourceCard({ resource }: { resource: typeof resources[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="p-6">
        <h2 className="text-xl font-semibold text-[#0f9d58] mb-2">{resource.title}</h2>
        <p className="text-gray-600 mb-4">Type: {resource.type}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {resource.tags.map((tag, index) => (
            <span key={index} className="bg-[#f1f3f4] text-[#0f9d58] text-sm px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <a
          href={resource.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#0f9d58] text-white px-4 py-2 rounded-md hover:bg-[#0c8c4d] transition-colors duration-200"
        >
          View Resource
        </a>
      </div>
    </motion.div>
  )
}

