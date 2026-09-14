import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, X, Code2, MessageSquare, Film } from 'lucide-react'

type Category = 'All' | 'Software' | 'SMS' | 'Film'

interface Project {
  id: number
  title: string
  summary: string
  description: string
  category: Category
  services: string[]
  outcomes: string[]
  color: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Enterprise Operations Platform',
    summary:
      'Custom web application for workflow management, reporting, and team collaboration across departments.',
    description:
      'We designed and built a full operations platform that replaced spreadsheets and email chains with clear workflows, role-based access, and live dashboards. The system integrates with existing tools and scales as the organization grows.',
    category: 'Software',
    services: ['Web App', 'Dashboard', 'API Integration'],
    outcomes: ['Faster approvals', 'Single source of truth', 'Reduced manual work'],
    color: 'bg-gradient-to-br from-blue-600 to-cyan-700',
  },
  {
    id: 2,
    title: 'Retail Loyalty Messaging',
    summary:
      'Bulk SMS campaigns and transactional alerts that increased customer retention and repeat purchases.',
    description:
      'Using our SMS platform, we set up promotional campaigns, birthday offers, and order updates for a retail brand. Contact lists, scheduling, and delivery reports were managed from one dashboard.',
    category: 'SMS',
    services: ['Marketing SMS', 'OTP', 'Campaigns'],
    outcomes: ['Higher repeat visits', 'Reliable OTP delivery', 'Clear campaign analytics'],
    color: 'bg-gradient-to-br from-emerald-600 to-teal-700',
  },
  {
    id: 3,
    title: 'Brand Documentary Series',
    summary:
      'Multi-episode corporate documentary capturing company culture, leadership, and customer stories.',
    description:
      'From concept and interviews to shoot and final grade, we produced a documentary series that the client used for internal culture and external brand storytelling across digital channels.',
    category: 'Film',
    services: ['Documentary', 'Interview', 'Color Grade'],
    outcomes: ['Strong brand narrative', 'Reusable content assets', 'Professional finish'],
    color: 'bg-gradient-to-br from-violet-600 to-purple-800',
  },
  {
    id: 4,
    title: 'Fintech Mobile Experience',
    summary:
      'Secure mobile banking experience with real-time transactions, biometric auth, and clean UI.',
    description:
      'We worked on the product layer — flows, UI, and integrations — so customers could manage accounts and payments with clarity and trust. Security and performance were priorities throughout.',
    category: 'Software',
    services: ['Mobile App', 'UX/UI', 'Security'],
    outcomes: ['Smoother onboarding', 'Trusted transactions', 'Consistent brand UI'],
    color: 'bg-gradient-to-br from-indigo-600 to-blue-800',
  },
  {
    id: 5,
    title: 'School Communication System',
    summary:
      'Institution-wide alerts for parents and staff — attendance, events, emergencies, and announcements.',
    description:
      'Schools use our SMS software to reach parents and staff quickly. Groups, templates, and scheduled messages keep communication clear without extra admin load.',
    category: 'SMS',
    services: ['Alerts', 'Bulk Messaging', 'Scheduling'],
    outcomes: ['Faster parent reach', 'Fewer missed notices', 'Simple admin tools'],
    color: 'bg-gradient-to-br from-teal-600 to-emerald-800',
  },
  {
    id: 6,
    title: 'Product Launch Commercial',
    summary:
      'High-impact TVC and digital ads for a consumer product launch across broadcast and social.',
    description:
      'We handled creative direction, production, and post — delivering cuts optimized for TV and social so the launch felt consistent everywhere the brand showed up.',
    category: 'Film',
    services: ['Commercial', 'Motion Graphics', 'Edit'],
    outcomes: ['Launch-ready assets', 'Multi-format delivery', 'Clear product story'],
    color: 'bg-gradient-to-br from-rose-600 to-orange-700',
  },
  {
    id: 7,
    title: 'Healthcare Patient Portal',
    summary:
      'Patient-facing portal with appointment booking, records access, and secure messaging.',
    description:
      'A secure web portal that helps patients book visits, view key information, and stay in touch with the clinic — designed for clarity and compliance-minded workflows.',
    category: 'Software',
    services: ['Web App', 'Integration', 'Compliance'],
    outcomes: ['Fewer phone queues', 'Better patient self-service', 'Clear audit trails'],
    color: 'bg-gradient-to-br from-sky-600 to-blue-700',
  },
  {
    id: 8,
    title: 'Music Video Production',
    summary:
      'Full production for an independent artist — concept, shoot, edit, and color grading.',
    description:
      'We partnered on concept, cinematography, and post-production to deliver a music video that matched the artist’s sound and visual identity.',
    category: 'Film',
    services: ['Music Video', 'Cinematography', 'Post'],
    outcomes: ['Strong visual identity', 'Platform-ready masters', 'Creative collaboration'],
    color: 'bg-gradient-to-br from-fuchsia-600 to-pink-800',
  },
]

const filters: Category[] = ['All', 'Software', 'SMS', 'Film']

const categoryIcon = {
  Software: Code2,
  SMS: MessageSquare,
  Film: Film,
}

export default function Projects() {
  const [active, setActive] = useState<Category>('All')
  const [selected, setSelected] = useState<Project | null>(null)

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active)

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
              Selected projects & collaborations
            </h1>
            <p className="text-white/75 text-lg leading-relaxed">
              A look at the software products, messaging campaigns, and film productions we’ve
              delivered for clients across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 mb-8 sticky top-16 z-20 bg-white/90 backdrop-blur-sm py-2.5 -mx-1 px-1">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === f
                    ? 'bg-navy text-white shadow-md'
                    : 'bg-navy/5 text-navy/70 hover:bg-navy/10 hover:text-navy'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.28 }}
                  className="group card overflow-hidden p-0 cursor-pointer"
                  onClick={() => setSelected(project)}
                >
                  <div className={`h-40 ${project.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="inline-block px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-navy mb-2 group-hover:text-gold transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-navy/60 text-sm leading-relaxed mb-4 line-clamp-2">
                      {project.summary}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.services.map((s) => (
                        <span
                          key={s}
                          className="text-xs px-2 py-0.5 rounded-md bg-navy/5 text-navy/65"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-gold text-sm font-medium">
                      View details <ExternalLink size={14} />
                    </span>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Detail modal / panel */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6"
            onClick={() => setSelected(null)}
          >
            <div className="absolute inset-0 bg-navy/60 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`h-36 sm:h-44 ${selected.color} relative`}>
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-navy/40 text-white flex items-center justify-center hover:bg-navy/60 transition-colors"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
                <div className="absolute bottom-4 left-5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur text-white text-xs font-medium">
                    {(() => {
                      const Icon = categoryIcon[selected.category as keyof typeof categoryIcon]
                      return Icon ? <Icon size={12} /> : null
                    })()}
                    {selected.category}
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h2 className="heading-display text-2xl text-navy mb-3">{selected.title}</h2>
                <p className="text-navy/70 leading-relaxed mb-6">{selected.description}</p>

                <h3 className="text-sm font-semibold text-navy uppercase tracking-wide mb-2">
                  Focus areas
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selected.services.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 rounded-md bg-navy/5 text-navy/70"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <h3 className="text-sm font-semibold text-navy uppercase tracking-wide mb-2">
                  Outcomes
                </h3>
                <ul className="space-y-2 mb-8">
                  {selected.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2 text-sm text-navy/70">
                      <span className="text-gold mt-0.5">✓</span>
                      {o}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/start-project"
                  className="btn-navy w-full sm:w-auto"
                  onClick={() => setSelected(null)}
                >
                  Start a similar project <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="section-padding bg-navy/[0.03]">
        <div className="container-custom text-center">
          <h2 className="heading-display text-3xl text-navy mb-3">Have a project in mind?</h2>
          <p className="text-navy/65 mb-7 max-w-lg mx-auto">
            Let’s create something remarkable together.
          </p>
          <Link to="/start-project" className="btn-navy">
            Start a Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
