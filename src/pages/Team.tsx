import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Linkedin, Mail } from 'lucide-react'

interface TeamMember {
  name: string
  role: string
  bio: string
  initials: string
  color: string
}

const team: TeamMember[] = [
  {
    name: 'Michael Richard',
    role: 'Founder / Creative Director',
    bio: 'Leads company vision, creative direction and major projects. Passionate about blending technology with storytelling.',
    initials: 'MR',
    color: 'bg-gold text-navy',
  },
  {
    name: 'Benson Richard',
    role: 'Software Developer',
    bio: 'Designs and develops digital products and systems. Expert in full-stack development and scalable architectures.',
    initials: 'BR',
    color: 'bg-blue-500 text-white',
  },
  {
    name: 'Michael Richard',
    role: 'Film Director / Producer',
    bio: 'Oversees storytelling, production and creative execution. Brings cinematic vision to every project.',
    initials: 'MR',
    color: 'bg-violet-500 text-white',
  },
  {
    name: 'Octavian Mbeki',
    role: 'Photographer',
    bio: 'Handles camera, lighting, composition and visual production with an eye for emotion and detail.',
    initials: 'OM',
    color: 'bg-rose-500 text-white',
  },
  {
    name: 'Mosses Togo',
    role: 'Editor / Post-Production',
    bio: 'Handles editing, color grading and finishing to bring stories to life with polish and clarity.',
    initials: 'MT',
    color: 'bg-amber-500 text-white',
  },
  {
    name: 'Pares Lucian',
    role: 'Graphics Design',
    bio: 'Creates motion graphics, visual design and brand assets that support film, digital and event work.',
    initials: 'PL',
    color: 'bg-emerald-500 text-white',
  },
  {
    name: 'Victor Mmari',
    role: 'eCard and Events',
    bio: 'Designs digital eCards and supports event invitations, RSVPs and celebration messaging for clients.',
    initials: 'VM',
    color: 'bg-pink-500 text-white',
  },
  {
    name: 'Ben Rich',
    role: 'SMS and Digital Solutions',
    bio: 'Manages messaging solutions, campaigns and communication platforms for maximum reach and impact.',
    initials: 'BR',
    color: 'bg-teal-600 text-white',
  },
]

export default function Team() {
  return (
    <div>
      <section className="gradient-navy pt-10 pb-12 md:pt-12 md:pb-14 relative overflow-hidden">
        <div className="container-custom relative z-10 max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="heading-display text-3xl md:text-5xl text-white mb-4 leading-tight">
              The people behind the work
            </h1>
            <p className="text-white/75 text-lg leading-relaxed">
              A multidisciplinary team of developers, producers, photographers, designers and
              communication specialists united by craft and client success.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
            {team.map((member, i) => (
              <motion.div
                key={`${member.name}-${member.role}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="card group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-14 h-14 rounded-2xl ${member.color} flex items-center justify-center
                                text-lg font-semibold shrink-0 group-hover:scale-105 transition-transform`}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy">{member.name}</h3>
                    <p className="text-gold text-sm font-medium mt-0.5">{member.role}</p>
                  </div>
                </div>
                <p className="text-navy/60 text-sm leading-relaxed mb-4">{member.bio}</p>
                <div className="flex gap-2">
                  <a
                    href="#"
                    aria-label={`${member.name} LinkedIn`}
                    className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center
                               text-navy/50 hover:bg-gold hover:text-navy transition-all"
                  >
                    <Linkedin size={14} />
                  </a>
                  <a
                    href="mailto:info@smilecreative.co.tz"
                    aria-label={`Email ${member.name}`}
                    className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center
                               text-navy/50 hover:bg-gold hover:text-navy transition-all"
                  >
                    <Mail size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy/[0.03]">
        <div className="container-custom text-center">
          <h2 className="heading-display text-3xl text-navy mb-3">Want to join the team?</h2>
          <p className="text-navy/65 mb-7 max-w-lg mx-auto">
            We’re always interested in talented people who care about craft and impact.
          </p>
          <Link to="/contact" className="btn-navy">
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
