'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

type Event = {
  id: number
  name: string
  date: string
  description: string
  type: string
  isPast: boolean
}

const events: Event[] = [
  {
    id: 1,
    name: "Web Development Workshop",
    date: "2023-05-15",
    description: "Learn the basics of HTML, CSS, and JavaScript",
    type: "workshop",
    isPast: false
  },
  {
    id: 2,
    name: "Competitive Programming Contest",
    date: "2023-06-01",
    description: "Test your coding skills and win exciting prizes",
    type: "contest",
    isPast: false
  },
  {
    id: 3,
    name: "Machine Learning Seminar",
    date: "2023-06-10",
    description: "Explore the world of AI and machine learning",
    type: "seminar",
    isPast: false
  },
  {
    id: 4,
    name: "Hackathon 2023",
    date: "2023-07-15",
    description: "48-hour coding challenge to build innovative solutions",
    type: "hackathon",
    isPast: false
  },
  {
    id: 5,
    name: "Python for Data Science",
    date: "2023-04-20",
    description: "Introduction to data analysis with Python",
    type: "workshop",
    isPast: true
  },
  {
    id: 6,
    name: "Tech Talk: Future of AI",
    date: "2023-03-05",
    description: "Industry experts discuss the future of artificial intelligence",
    type: "seminar",
    isPast: true
  }
]

export default function EventsPage() {
  const [filter, setFilter] = useState('all')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredEvents = events.filter(event => 
    filter === 'all' || event.type === filter
  )

  const upcomingEvents = filteredEvents.filter(event => !event.isPast)
  const pastEvents = filteredEvents.filter(event => event.isPast)

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-[#0f9d58] mb-8"
        >
          Events
        </motion.h1>

        <div className="mb-8 flex justify-center">
          <EventFilter currentFilter={filter} setFilter={setFilter} />
        </div>

        <div ref={ref}>
          <h2 className="text-2xl font-semibold mb-4 text-[#0f9d58]">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {upcomingEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} inView={inView} />
            ))}
          </div>

          <h2 className="text-2xl font-semibold mb-4 text-[#0f9d58]">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function EventFilter({ currentFilter, setFilter }: { currentFilter: string, setFilter: (filter: string) => void }) {
  const filters = ['all', 'workshop', 'seminar', 'contest', 'hackathon']

  return (
    <div className="flex space-x-2">
      {filters.map(filter => (
        <button
          key={filter}
          onClick={() => setFilter(filter)}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            currentFilter === filter
              ? 'bg-[#0f9d58] text-white'
              : 'bg-white text-[#0f9d58] hover:bg-[#f1f3f4]'
          } transition-colors duration-200`}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  )
}

function EventCard({ event, index, inView }: { event: Event, index: number, inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#0f9d58] mb-2">{event.name}</h3>
        <p className="text-gray-600 mb-2">{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <p className="text-gray-700 mb-4">{event.description}</p>
        <div className="flex justify-between items-center">
          <span className="inline-block bg-[#f1f3f4] text-[#0f9d58] text-sm px-3 py-1 rounded-full">
            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
          </span>
          {!event.isPast && (
            <button className="bg-[#0f9d58] text-white px-4 py-2 rounded-md hover:bg-[#0c8c4d] transition-colors duration-200">
              Register
            </button>
          )}
        </div>
      </div>
    </motion.div>
  )
}

