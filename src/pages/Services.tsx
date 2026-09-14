import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Code2,
  MessageSquare,
  Film,
  ArrowRight,
  Globe,
  Smartphone,
  Database,
  Settings,
  Server,
  Wrench,
  Megaphone,
  ShieldCheck,
  Bell,
  Calendar,
  Users,
  Building2,
  Video,
  Camera,
  Clapperboard,
  Music,
  FileVideo,
  Plane,
  MonitorPlay,
  Palette,
  Radio,
  Sparkles,
  CheckCircle2,
  Layers,
  Zap,
  BarChart3,
  Gift,
  PartyPopper,
  Image,
  Share2,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface ServiceItem {
  icon: LucideIcon
  name: string
}

const softwareItems: ServiceItem[] = [
  { icon: Globe, name: 'Website Design and Development' },
  { icon: Code2, name: 'Web Application Development' },
  { icon: Smartphone, name: 'Mobile Application Development' },
  { icon: Building2, name: 'Business and Management Systems' },
  { icon: Settings, name: 'Custom Software Solutions' },
  { icon: Database, name: 'Database Design and Integration' },
  { icon: Server, name: 'API and System Integration' },
  { icon: Wrench, name: 'Maintenance and Technical Support' },
]

const smsItems: ServiceItem[] = [
  { icon: Megaphone, name: 'Promotional and Marketing SMS' },
  { icon: MessageSquare, name: 'Transactional SMS' },
  { icon: ShieldCheck, name: 'OTP and Verification Messages' },
  { icon: Calendar, name: 'Event and Appointment Reminders' },
  { icon: Bell, name: 'Customer Notifications' },
  { icon: Users, name: 'School and Organization Alerts' },
  { icon: Settings, name: 'SMS Campaign Support' },
  { icon: Building2, name: 'Bulk Messaging for Businesses' },
]

const filmItems: ServiceItem[] = [
  { icon: Video, name: 'Corporate Videos' },
  { icon: MonitorPlay, name: 'Commercials and TVC' },
  { icon: Camera, name: 'Event Coverage' },
  { icon: Clapperboard, name: 'Wedding Photo and Video' },
  { icon: Music, name: 'Music Videos' },
  { icon: Film, name: 'Short and Creative Films' },
  { icon: FileVideo, name: 'Documentaries' },
  { icon: Radio, name: 'Live Streaming' },
  { icon: Plane, name: 'Drone Videography' },
  { icon: Palette, name: 'Editing and Color Grading' },
  { icon: Sparkles, name: 'Motion Graphics and VFX' },
  { icon: Camera, name: 'Photography' },
]


const ecardItems: ServiceItem[] = [
  { icon: Gift, name: 'Digital Invitation Cards' },
  { icon: PartyPopper, name: 'Wedding and Event eCards' },
  { icon: Image, name: 'Custom Design Templates' },
  { icon: Share2, name: 'Shareable Links and QR Codes' },
  { icon: Calendar, name: 'RSVP and Event Details' },
  { icon: Bell, name: 'Reminder Notifications' },
  { icon: Users, name: 'Guest List Support' },
  { icon: MessageSquare, name: 'SMS Delivery of eCards' },
]

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-navy pt-10 pb-12 md:pt-12 md:pb-14 relative overflow-hidden">
        <div className="container-custom relative z-10 max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="heading-display text-3xl md:text-5xl text-white mb-4 leading-tight">
              Four pillars. One partner.
            </h1>
            <p className="text-white/75 text-lg leading-relaxed">
              From custom software, bulk SMS and film production to digital eCards for events, we
              deliver end-to-end solutions that help you connect, engage and grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky nav */}
      <div className="sticky top-14 md:top-16 z-30 bg-white/95 backdrop-blur-md border-b border-navy/5">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-2.5">
            {[
              { id: 'software', label: 'Software' },
              { id: 'sms', label: 'Bulk SMS' },
              { id: 'film', label: 'Film and Media' },
              { id: 'ecard', label: 'eCard' },
            ].map((tab) => (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                className="px-4 py-2 rounded-lg text-sm font-medium text-navy/70 hover:text-navy
                           hover:bg-navy/5 whitespace-nowrap transition-colors"
              >
                {tab.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* SOFTWARE - full section */}
      <section id="software" className="section-padding bg-white scroll-mt-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start mb-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-500/15 text-blue-700 flex items-center justify-center mb-5">
                <Code2 className="w-7 h-7" />
              </div>
              <h2 className="heading-display text-3xl md:text-4xl text-navy mb-4">
                Software Development
              </h2>
              <p className="text-navy/65 text-lg leading-relaxed mb-6">
                We design and build digital products that solve real business problems, from
                polished websites and mobile apps to complex internal systems and integrations.
              </p>
              <Link
                to="/start-project"
                className="inline-flex items-center gap-1.5 text-gold font-medium text-sm hover:gap-2.5 transition-all"
              >
                Discuss a software project <ArrowRight size={15} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <div className="rounded-2xl border border-navy/8 p-5 bg-navy/[0.02]">
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="w-4 h-4 text-gold" />
                  <h3 className="font-semibold text-navy text-sm">Tech stack</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'REST APIs', 'Mobile (React Native)', 'Cloud hosting'].map(
                    (t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-md bg-white border border-navy/10 text-navy/70"
                      >
                        {t}
                      </span>
                    )
                  )}
                </div>
              </div>
              <div className="rounded-2xl border border-navy/8 p-5 bg-navy/[0.02]">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-4 h-4 text-gold" />
                  <h3 className="font-semibold text-navy text-sm">How we deliver</h3>
                </div>
                <ol className="space-y-2 text-sm text-navy/65">
                  <li className="flex gap-2">
                    <span className="text-gold font-semibold">1.</span> Discovery and requirements
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold font-semibold">2.</span> Design and architecture
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold font-semibold">3.</span> Build, test and iterate
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold font-semibold">4.</span> Launch, support and improve
                  </li>
                </ol>
              </div>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {softwareItems.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-3 p-4 rounded-xl bg-white border border-navy/5 shadow-soft
                           hover:shadow-soft-lg hover:border-gold/20 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-navy/5 flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-navy" />
                </div>
                <span className="text-sm font-medium text-navy leading-snug">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SMS - full section */}
      <section id="sms" className="section-padding bg-navy/[0.03] scroll-mt-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start mb-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 text-emerald-700 flex items-center justify-center mb-5">
                <MessageSquare className="w-7 h-7" />
              </div>
              <h2 className="heading-display text-3xl md:text-4xl text-navy mb-4">
                Bulk SMS Services
              </h2>
              <p className="text-navy/65 text-lg leading-relaxed mb-4">
                Reach your audience instantly with reliable, high-delivery messaging. Ideal for
                marketing campaigns, transactional alerts, OTPs and organizational communication.
              </p>
              <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/10 p-4 mb-6">
                <p className="text-navy text-sm leading-relaxed">
                  <strong className="text-emerald-800">Ready-made platform:</strong> We already have
                  our own SMS software that enables promotional campaigns, transactional messages,
                  OTPs, reminders, school alerts and bulk messaging for businesses, so you can
                  start sending without building from scratch.
                </p>
              </div>
              <Link
                to="/start-project"
                className="inline-flex items-center gap-1.5 text-gold font-medium text-sm hover:gap-2.5 transition-all"
              >
                Get SMS access <ArrowRight size={15} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <div className="rounded-2xl border border-navy/8 p-5 bg-white">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-gold" />
                  <h3 className="font-semibold text-navy text-sm">Platform capabilities</h3>
                </div>
                <ul className="space-y-2 text-sm text-navy/65">
                  <li className="flex gap-2">
                    <span className="text-gold">•</span> Web dashboard to create and send campaigns
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold">•</span> Contact lists and group management
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold">•</span> Delivery reports and analytics
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold">•</span> OTP and transactional API support
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold">•</span> Scheduling and recurring messages
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-navy/8 p-5 bg-white">
                <div className="flex items-center gap-2 mb-3">
                  <BarChart3 className="w-4 h-4 text-gold" />
                  <h3 className="font-semibold text-navy text-sm">Why teams use us</h3>
                </div>
                <p className="text-sm text-navy/65 leading-relaxed">
                  Fast setup, reliable delivery in Tanzania, clear pricing and support from a team
                  that also builds the software behind the messages.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {smsItems.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-3 p-4 rounded-xl bg-white border border-navy/5 shadow-soft
                           hover:shadow-soft-lg hover:border-gold/20 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-navy/5 flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-navy" />
                </div>
                <span className="text-sm font-medium text-navy leading-snug">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILM - full section */}
      <section id="film" className="section-padding bg-white scroll-mt-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start mb-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 rounded-2xl bg-violet-500/15 text-violet-700 flex items-center justify-center mb-5">
                <Film className="w-7 h-7" />
              </div>
              <h2 className="heading-display text-3xl md:text-4xl text-navy mb-4">
                Film and Media Production
              </h2>
              <p className="text-navy/65 text-lg leading-relaxed mb-6">
                From concept to final cut, we produce corporate films, commercials, event coverage,
                music videos, documentaries and more, with professional post-production.
              </p>
              <Link
                to="/start-project"
                className="inline-flex items-center gap-1.5 text-gold font-medium text-sm hover:gap-2.5 transition-all"
              >
                Plan a production <ArrowRight size={15} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <div className="rounded-2xl border border-navy/8 p-5 bg-navy/[0.02]">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-4 h-4 text-gold" />
                  <h3 className="font-semibold text-navy text-sm">Production process</h3>
                </div>
                <ol className="space-y-2 text-sm text-navy/65">
                  <li className="flex gap-2">
                    <span className="text-gold font-semibold">1.</span> Brief and creative concept
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold font-semibold">2.</span> Pre-production and planning
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold font-semibold">3.</span> Shoot (camera, lighting, drone)
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold font-semibold">4.</span> Edit, grade, graphics and delivery
                  </li>
                </ol>
              </div>
              <div className="rounded-2xl border border-navy/8 p-5 bg-navy/[0.02]">
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="w-4 h-4 text-gold" />
                  <h3 className="font-semibold text-navy text-sm">What we bring</h3>
                </div>
                <p className="text-sm text-navy/65 leading-relaxed">
                  Cinematography, direction, post-production, motion graphics and a team that
                  understands both storytelling and brand goals.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {filmItems.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-3 p-4 rounded-xl bg-white border border-navy/5 shadow-soft
                           hover:shadow-soft-lg hover:border-gold/20 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-navy/5 flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-navy" />
                </div>
                <span className="text-sm font-medium text-navy leading-snug">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ECARD - full section */}
      <section id="ecard" className="section-padding bg-navy/[0.03] scroll-mt-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start mb-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 rounded-2xl bg-pink-500/15 text-pink-700 flex items-center justify-center mb-5">
                <Gift className="w-7 h-7" />
              </div>
              <h2 className="heading-display text-3xl md:text-4xl text-navy mb-4">
                eCard and Event Invitations
              </h2>
              <p className="text-navy/65 text-lg leading-relaxed mb-6">
                Beautiful digital invitation cards for weddings, birthdays, corporate events and
                celebrations. Custom designs, shareable links, RSVP details and optional SMS
                delivery so every guest gets the message.
              </p>
              <Link
                to="/start-project"
                className="inline-flex items-center gap-1.5 text-gold font-medium text-sm hover:gap-2.5 transition-all"
              >
                Order an eCard <ArrowRight size={15} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <div className="rounded-2xl border border-navy/8 p-5 bg-white">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-4 h-4 text-gold" />
                  <h3 className="font-semibold text-navy text-sm">How it works</h3>
                </div>
                <ol className="space-y-2 text-sm text-navy/65">
                  <li className="flex gap-2">
                    <span className="text-gold font-semibold">1.</span> Share event details and style preferences
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold font-semibold">2.</span> We design your eCard
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold font-semibold">3.</span> You review and approve
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold font-semibold">4.</span> Share via link, social, or SMS
                  </li>
                </ol>
              </div>
              <div className="rounded-2xl border border-navy/8 p-5 bg-white">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-gold" />
                  <h3 className="font-semibold text-navy text-sm">Ideal for</h3>
                </div>
                <p className="text-sm text-navy/65 leading-relaxed">
                  Weddings, birthdays, graduations, corporate launches, church events and any
                  occasion that needs a polished digital invitation.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {ecardItems.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-3 p-4 rounded-xl bg-white border border-navy/5 shadow-soft
                           hover:shadow-soft-lg hover:border-gold/20 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-navy/5 flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-navy" />
                </div>
                <span className="text-sm font-medium text-navy leading-snug">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-navy">
        <div className="container-custom text-center">
          <h2 className="heading-display text-3xl text-white mb-3">Not sure where to start?</h2>
          <p className="text-white/70 mb-7 max-w-lg mx-auto">
            Tell us about your goals and we’ll recommend the right mix of software, messaging and
            media.
          </p>
          <Link to="/start-project" className="btn-primary">
            Start a Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
