'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function About() {
  const images = [
    '/images/chapter-logo.png',
    '/images/club-g1.jpeg',
    '/images/club-g2.jpeg',
    '/images/club-g3.jpeg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

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
              <h2 className="text-2xl font-semibold mb-4">About Us</h2>
              <p className="text-gray-700 mb-6">
                The GeeksforGeeks Student Chapter at PDEU serves as a dynamic platform for students interested in technology and innovation. Founded to bridge the gap between theoretical knowledge and practical application, the chapter hosts workshops, coding competitions, and guest lectures to foster critical thinking, problem-solving, and leadership skills.
              </p>
              <p className="text-gray-700 mb-6">
                This academic year marks another milestone under the guidance of our faculty advisor Dr. Nitin Rajput and currently led by President Ms. Aarchi Shah and Vice President Mr. Prayag Thaker, along with a dedicated team of 60+ members, we continue to promote a culture of learning and collaboration.
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
              <div className="relative w-full h-[300px] overflow-hidden">
                <AnimatePresence>
                  <motion.div
                    key={images[currentIndex]}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 flex justify-center items-center"
                  >
                    <Image
                      src={images[currentIndex]}
                      alt="Chapter Slide"
                      priority
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
