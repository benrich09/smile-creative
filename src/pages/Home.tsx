import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Code2,
  MessageSquare,
  Film,
  ArrowRight,
  Lightbulb,
  Users,
  Award,
  Shield,
  Headphones,
  Sparkles,
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
}

const services = [
  {
    icon: Code2,
    title: 'Software Development',
    desc: 'Custom websites, web apps, mobile applications, business systems and digital platforms built for growth.',
    path: '/services#software',
    accent: 'bg-blue-500/15 text-blue-700',
  },
  {
    icon: MessageSquare,
    title: 'Bulk SMS Services',
    desc: 'Our ready-made SMS platform delivers marketing, OTPs, alerts and organizational messaging at scale.',
    path: '/services#sms',
    accent: 'bg-emerald-500/15 text-emerald-700',
  },
  {
    icon: Film,
    title: 'Film and Media Production',
    desc: 'Corporate videos, commercials, events, music videos, documentaries and full post-production.',
    path: '/services#film',
    accent: 'bg-violet-500/15 text-violet-700',
  },
]

const reasons = [
  { icon: Lightbulb, text: 'Creative and technology-driven solutions' },
  { icon: Users, text: 'Client-focused project delivery' },
  { icon: Award, text: 'Professional production quality' },
  { icon: Sparkles, text: 'Practical solutions for real business needs' },
  { icon: Headphones, text: 'Reliable communication and support' },
  { icon: Shield, text: 'One partner for digital, SMS and media' },
]

export default function Home() {
  return (
    <div>
      {/* Hero  two column */}
      <section className="relative min-h-[calc(100vh-3.5rem)] md:min-h-[calc(100vh-4rem)] flex items-center gradient-navy overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-gold/[0.07] blur-3xl" />
          <div className="absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-gold/[0.05] blur-3xl" />
        </div>

        <div className="container-custom relative z-10 w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left */}
            <motion.div initial="hidden" animate="visible" className="max-w-xl">
              <motion.h1
                custom={0}
                variants={fadeUp}
                className=" text-centerheading-display text-3xl sm:text-4xl lg:text-[2.85rem] text-white leading-[1.15] mb-6"
              >
                Turning ideas into{' '}
                <span className="text-gold">digital experiences</span>, powerful
                communication and compelling stories.
              </motion.h1>

              <motion.div custom={1} variants={fadeUp} className="flex flex-wrap gap-3">
                <Link to="/services" className="btn-primary">
                  Explore Our Services
                  <ArrowRight size={18} />
                </Link>
                <Link to="/start-project" className="btn-secondary">
                  Start a Project
                </Link>
              </motion.div>

            </motion.div>

            {/* Right  description card */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-7 md:p-9 shadow-soft-lg">
                
                <p className="text-white/85 text-base md:text-lg leading-relaxed mt-2">
                  Smile Creative builds software, runs reliable bulk SMS campaigns and produces
                  professional film and media for businesses that want to{' '}
                  <span className="text-gold font-medium">connect, engage and grow</span>.
                </p>
                <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-gold font-display text-xl md:text-2xl font-semibold">3</p>
                    <p className="text-white/50 text-xs mt-0.5">Core services</p>
                  </div>
                  <div>
                    <p className="text-gold font-display text-xl md:text-2xl font-semibold">TZ</p>
                    <p className="text-white/50 text-xs mt-0.5">Based in DSM</p>
                  </div>
                  <div>
                    <p className="text-gold font-display text-xl md:text-2xl font-semibold">24/7</p>
                    <p className="text-white/50 text-xs mt-0.5">SMS platform</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            className="max-w-2xl mb-12"
          >
            <h2 className="heading-display text-3xl md:text-4xl text-navy mb-3">
              What we do
            </h2>
            <p className="text-navy/65 text-lg leading-relaxed">
              Technology and creativity working together so your brand can operate smarter and
              connect more effectively.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="card group flex flex-col"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${service.accent} flex items-center justify-center mb-4
                              group-hover:scale-105 transition-transform duration-300`}
                >
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2">{service.title}</h3>
                <p className="text-navy/65 leading-relaxed mb-5 text-[15px] flex-1">
                  {service.desc}
                </p>
                <Link
                  to={service.path}
                  className="inline-flex items-center gap-1.5 text-gold font-medium text-sm hover:gap-2.5 transition-all"
                >
                  Learn more <ArrowRight size={15} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-navy/[0.03]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-display text-3xl md:text-4xl text-navy mb-4 leading-tight">
                Your trusted creative technology partner
              </h2>
              <p className="text-navy/65 text-lg mb-7 leading-relaxed max-w-lg">
                We combine technical depth with creative craft to deliver solutions that drive
                results and stories that resonate.
              </p>
              <Link to="/about" className="btn-navy">
                About Smile Creative
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-3">
              {reasons.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="flex items-start gap-3.5 p-4 rounded-2xl bg-white shadow-soft border border-navy/5
                             hover:shadow-soft-lg hover:border-gold/25 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <p className="text-navy text-sm font-medium leading-snug pt-2">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
          <div className="absolute top-10 left-8 w-36 h-36 border border-gold rounded-full" />
          <div className="absolute bottom-10 right-10 w-56 h-56 border border-gold rounded-full" />
        </div>
        <div className="container-custom relative z-10 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-display text-3xl sm:text-4xl text-white mb-4 leading-tight">
              Have an idea, a challenge, or a story to tell?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-lg mx-auto leading-relaxed">
              We’ll help you turn it into something people can experience and remember.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/start-project" className="btn-primary px-7 py-3.5">
                Start a Project
                <ArrowRight size={18} />
              </Link>
              <Link to="/projects" className="btn-secondary px-7 py-3.5">
                View Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
