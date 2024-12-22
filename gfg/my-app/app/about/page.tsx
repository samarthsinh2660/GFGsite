import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const events = [
    { year: 2020, title: "Chapter Founding", description: "Established the Geeks for Geeks Student Chapter" },
    { year: 2021, title: "First Hackathon", description: "Organized our inaugural 24-hour coding competition" },
    { year: 2022, title: "Community Growth", description: "Reached 500+ active members" },
    { year: 2023, title: "Industry Partnerships", description: "Collaborated with leading tech companies for workshops and internships" },
  ];

  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-12"
          >
            About Our Chapter
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-6">
                The Geeks for Geeks Student Chapter is dedicated to fostering a community of passionate tech enthusiasts. 
                Our mission is to provide students with opportunities to enhance their coding skills, collaborate on 
                innovative projects, and stay updated with the latest trends in technology.
              </p>
              <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
              <ul className="list-disc list-inside text-gray-700 mb-6">
                <li>Organize workshops and coding competitions</li>
                <li>Host tech talks and seminars</li>
                <li>Facilitate networking opportunities</li>
                <li>Provide mentorship and guidance</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Geeks for Geeks Student Chapter"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#f1f3f4] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-8"
              >
                <div className="bg-white rounded-lg shadow-lg px-6 py-4">
                  <h3 className="font-bold text-[#0f9d58] text-xl mb-2">{event.year}: {event.title}</h3>
                  <p className="text-sm text-gray-700">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
