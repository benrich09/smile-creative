import { motion } from 'framer-motion'
import {
  Target,
  Eye,
  Heart,
  Lightbulb,
  Shield,
  Users,
  RefreshCw,
  Award,
  ArrowRight,
  Code2,
  MessageSquare,
  Film,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const values = [
  {
    icon: Lightbulb,
    title: 'Creativity',
    desc: 'We approach every challenge with fresh ideas and imaginative solutions.',
  },
  {
    icon: Award,
    title: 'Innovation',
    desc: 'We continuously explore new technologies and methods to stay ahead.',
  },
  {
    icon: Shield,
    title: 'Professionalism',
    desc: 'We deliver high-quality work with integrity and attention to detail.',
  },
  {
    icon: Heart,
    title: 'Reliability',
    desc: 'Clients can count on us to deliver on time and exceed expectations.',
  },
  {
    icon: Users,
    title: 'Integrity',
    desc: 'Honesty and transparency guide every relationship we build.',
  },
  {
    icon: Target,
    title: 'Customer Focus',
    desc: 'Your goals drive our process — we listen, adapt, and deliver.',
  },
  {
    icon: RefreshCw,
    title: 'Continuous Improvement',
    desc: 'We never stop learning, refining, and growing with our clients.',
  },
]

const pillars = [
  {
    icon: Code2,
    title: 'Software',
    text: 'Digital products and systems that help businesses run smarter.',
  },
  {
    icon: MessageSquare,
    title: 'SMS',
    text: 'Our own messaging platform for campaigns, OTPs, and alerts.',
  },
  {
    icon: Film,
    title: 'Film',
    text: 'Stories that look and feel professional — from shoot to final cut.',
  },
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-navy pt-10 pb-14 md:pt-12 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-16 right-12 w-64 h-64 rounded-full border border-gold" />
        </div>
        <div className="container-custom relative z-10 max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="heading-display text-3xl md:text-5xl text-white mb-5 leading-tight">
              Creative technology. Real impact.
            </h1>
            <p className="text-white/75 text-lg leading-relaxed">
              Smile Creative is a creative technology company based in Dar es Salaam. We develop
              digital solutions, enable effective communication through our bulk SMS platform, and
              produce high-quality visual content — helping clients build stronger brands and
              achieve their goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-5">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-navy/8 bg-navy/[0.02] p-6 hover:border-gold/30 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-gold/15 flex items-center justify-center mb-4">
                  <p.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-semibold text-navy text-lg mb-1.5">{p.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-navy/[0.03]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card border-l-4 border-l-gold"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-xl bg-gold/15 flex items-center justify-center">
                  <Target className="w-5 h-5 text-gold" />
                </div>
                <h2 className="text-xl font-semibold text-navy">Our Mission</h2>
              </div>
              <p className="text-navy/65 leading-relaxed">
                To deliver innovative technology, communication, and creative media solutions that
                create meaningful value for our clients and their audiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="card border-l-4 border-l-navy"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-xl bg-navy/10 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-navy" />
                </div>
                <h2 className="text-xl font-semibold text-navy">Our Vision</h2>
              </div>
              <p className="text-navy/65 leading-relaxed">
                To become a trusted and innovative creative technology company recognized for
                transforming ideas into impactful digital products, communication solutions, and
                visual stories.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-10"
          >
            <h2 className="heading-display text-3xl md:text-4xl text-navy mb-3">
              What guides everything we do
            </h2>
            <p className="text-navy/60">
              These values shape how we work with clients and how we build every project.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                className="bg-white rounded-2xl p-5 shadow-soft border border-navy/5
                           hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center mb-3">
                  <v.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-semibold text-navy mb-1">{v.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-navy">
        <div className="container-custom text-center">
          <h2 className="heading-display text-3xl text-white mb-3">Ready to work together?</h2>
          <p className="text-white/70 mb-7 max-w-lg mx-auto">
            Let’s discuss how Smile Creative can help you connect, engage, and grow.
          </p>
          <Link to="/start-project" className="btn-primary">
            Start a Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
