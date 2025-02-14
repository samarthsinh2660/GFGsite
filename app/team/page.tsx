'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

const teamMembers = [
  {
    name: 'Archie shah',
    role: 'President',
    image: '/images/archie-shah.jpeg',
    bio: 'Computer Science enthusiast with a passion for AI and machine learning.',
    social: {
      linkedin: 'https://www.linkedin.com/in/aarchishah/'
    }
  },
  {
    name: 'Prayag Thaker',
    role: 'Vice President',
    image: '/images/prayag.jpeg',
    bio: 'Full-stack developer and open-source contributor.',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    name: 'Mann Patel',
    role: 'Technical Head',
    image: '/images/mann.jpg',
    bio: 'Passion for innovations in technology and mathematics behind ML.',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    }
  },
  {
    name: 'Aarav Desai',
    role: 'Technical Head',
    image: '/images/aarav.jpg',
    bio: 'Passionate tinkerer with the love for AI and ML.',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    }
  },
  {
    name: 'Shrey Bansal',
    role: 'Technical Head',
    image: '/placeholder.svg?height=300&width=300',
    bio: 'A master of competitive programming and algorithms.',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    }
  },
  {
    name: 'Vishwam Modi',
    role: 'Publicity Head',
    image: '/images/vishwam.jpg',
    bio: 'Bring the mentality of Cristiano to the marketing arena.',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    name: 'Aarav Sheth',
    role: 'Digital Marketing Head',
    image: '/images/aarav sheth.jpg',
    bio: 'Passionate for digital trends and innovative strategies.',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      youtube: 'https://youtube.com'
    }
  },
  {
    name: 'Muskan Dalsania',
    role: 'Graphic Design Head',
    image: '/images/muskan.jpeg?height=300&width=300',
    bio: 'Turning code into creativity.',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    }
  },
  {
    name: 'Moksh Lalwani',
    role: 'Graphic Design Head',
    image: '/images/moksh.jpg?height=200&width=300',
    bio: 'Apassionate leader in graphic design with an eye for detail and innovation.',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    }
  },
  {
    name: 'Het Patel',
    role: 'Event Management Head',
    image: '/placeholder.svg?height=300&width=300',
    bio: 'Bringing visions to life.',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
    
  },
  {
    name: 'Ansh Bhimani',
    role: 'Advisor',
    image: '/placeholder.svg?height=300&width=300',
    bio: 'Community builder and STEM education advocate.',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
    
  },
  {
    name: 'Abhisht',
    role: 'Advisor',
    image: '/placeholder.svg?height=300&width=300',
    bio: 'Cybersecurity expert and competitive programmer.',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    }
  }
]

export default function TeamPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-[#0f9d58] mb-12"
        >
          Our Team
        </motion.h1>
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </div>
  )
}

function TeamMemberCard({ member, index, inView }: { member: typeof teamMembers[0]; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative">
        <Image
          src={member.image}
          alt={member.name}
          width={300}
          height={300}
          className="w-full h-64 object-cover"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-[#0f9d58] bg-opacity-80 flex flex-col justify-center items-center p-4 text-white"
        >
          <p className="text-center mb-4">{member.bio}</p>
          <div className="flex space-x-4">
            {Object.entries(member.social).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#f1f3f4] transition-colors duration-200"
              >
                <SocialIcon platform={platform} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-[#0f9d58]">{member.name}</h2>
        <p className="text-gray-600">{member.role}</p>
      </div>
    </motion.div>
  )
}

function SocialIcon({ platform }: { platform: string }) {
  switch (platform) {
    case 'linkedin':
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case 'github':
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.467-1.334-5.467-5.93 0-1.31.467-2.382 1.235-3.222-.123-.302-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.403c1.018.004 2.045.137 3.003.403 2.29-1.552 3.3-1.23 3.3-1.23.653 1.653.241 2.874.118 3.176.77.84 1.235 1.912 1.235 3.222 0 4.609-2.807 5.625-5.478 5.921.429.37.812 1.102.812 2.222 0 1.605-.014 2.896-.014 3.286 0 .322.217.694.825.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" />
        </svg>
      );
    default:
      return null;
  }
}