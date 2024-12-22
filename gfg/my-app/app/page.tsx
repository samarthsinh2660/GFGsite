'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AchievementsSection />
      <EventsSection />
    </>
  )
}

function HeroSection() {
  return (
    <section className="bg-[#0f9d58] text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Welcome to GeeksforGeeks Chapter
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl mb-8"
          >
            Empowering students through technology and knowledge sharing
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="/join" className="bg-white text-[#0f9d58] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#f1f3f4] transition-colors duration-200">
              Join Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function AchievementsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const achievements = [
    { title: "1000+ Members", description: "Growing community of tech enthusiasts", icon: "👥" },
    { title: "50+ Events", description: "Workshops, hackathons, and tech talks", icon: "🎉" },
    { title: "100+ Projects", description: "Innovative solutions developed by our members", icon: "💡" },
  ]

  return (
    <section ref={ref} className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AchievementCard({ achievement, index, inView }: { achievement: { title: string; description: string; icon: string }; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-lg shadow-md text-center"
    >
      <div className="text-4xl mb-4">{achievement.icon}</div>
      <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
      <p className="text-gray-600">{achievement.description}</p>
    </motion.div>
  )
}

function EventsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const events = [
    { title: "Web Development Workshop", date: "May 15, 2023", description: "Learn the basics of HTML, CSS, and JavaScript" },
    { title: "Competitive Programming Contest", date: "June 1, 2023", description: "Test your coding skills and win exciting prizes" },
    { title: "Machine Learning Seminar", date: "June 10, 2023", description: "Explore the world of AI and machine learning" },
  ]

  return (
    <section ref={ref} className="bg-[#f1f3f4] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} event={event} index={index} inView={inView} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/events" className="bg-[#0f9d58] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#00563f] transition-colors duration-200">
            View All Events
          </Link>
        </div>
      </div>
    </section>
  )
}

function EventCard({ event, index, inView }: { event: { title: string; date: string; description: string }; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
      <p className="text-[#0f9d58] font-medium mb-2">{event.date}</p>
      <p className="text-gray-600 mb-4">{event.description}</p>
      <Link href="/events" className="text-[#0f9d58] font-medium hover:underline">
        Learn More
      </Link>
    </motion.div>
  )
}

