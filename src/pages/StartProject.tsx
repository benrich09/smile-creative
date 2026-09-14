import { useState, FormEvent, ChangeEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  ArrowLeft,
  Code2,
  MessageSquare,
  Film,
  Handshake,
  CheckCircle2,
  Send,
} from 'lucide-react'
import { Link } from 'react-router-dom'

type Step = 1 | 2 | 3 | 4

interface FormState {
  category: string
  goals: string
  timeline: string
  budget: string
  collaboration: string
  name: string
  email: string
  phone: string
  company: string
  details: string
}

const initial: FormState = {
  category: '',
  goals: '',
  timeline: '',
  budget: '',
  collaboration: '',
  name: '',
  email: '',
  phone: '',
  company: '',
  details: '',
}

const categories = [
  {
    id: 'software',
    icon: Code2,
    title: 'Software',
    desc: 'Website, app, or custom system',
  },
  {
    id: 'sms',
    icon: MessageSquare,
    title: 'Bulk SMS',
    desc: 'Campaigns, OTP, alerts via our platform',
  },
  {
    id: 'film',
    icon: Film,
    title: 'Film & Media',
    desc: 'Video, photo, or full production',
  },
  {
    id: 'collaboration',
    icon: Handshake,
    title: 'Collaboration',
    desc: 'Partnership or joint project',
  },
  {
    id: 'multiple',
    icon: CheckCircle2,
    title: 'Multiple services',
    desc: 'A mix of the above',
  },
]

export default function StartProject() {
  const [step, setStep] = useState<Step>(1)
  const [form, setForm] = useState<FormState>(initial)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    update(e.target.name as keyof FormState, e.target.value)
  }

  const canNext = () => {
    if (step === 1) return !!form.category
    if (step === 2) return !!form.goals.trim()
    if (step === 3) return true
    return !!form.name.trim() && !!form.email.trim()
  }

  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (step < 4) {
      if (canNext()) setStep((s) => (s + 1) as Step)
      return
    }
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 1000)
  }

  if (submitted) {
    return (
      <div className="section-padding min-h-[70vh] flex items-center">
        <div className="container-custom max-w-lg mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card py-12"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="w-8 h-8 text-emerald-600" />
            </div>
            <h1 className="heading-display text-2xl text-navy mb-3">Request received</h1>
            <p className="text-navy/65 mb-6 leading-relaxed">
              Thank you. Our team will review your project request and contact you within one
              business day via email or WhatsApp.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/" className="btn-navy">
                Back to home
              </Link>
              <a href="https://wa.me/255689111616" className="btn-primary">
                WhatsApp us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <section className="gradient-navy pt-10 pb-10 md:pt-12 md:pb-12">
        <div className="container-custom max-w-2xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <h1 className="heading-display text-3xl md:text-4xl text-white mb-3 leading-tight">
              Start a project
            </h1>
            <p className="text-white/75 leading-relaxed">
              Answer a few questions so we can understand your needs — whether it’s a full build,
              SMS access, film production, or a collaboration.
            </p>
          </motion.div>

          {/* Progress */}
          <div className="mt-8 flex gap-2">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`h-1.5 flex-1 rounded-full transition-colors ${
                  s <= step ? 'bg-gold' : 'bg-white/15'
                }`}
              />
            ))}
          </div>
          <p className="text-white/50 text-xs mt-2">Step {step} of 4</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-2xl">
          <form onSubmit={submit}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="s1"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-semibold text-navy mb-2">
                    What are you looking for?
                  </h2>
                  <p className="text-navy/60 text-sm mb-6">
                    Choose the option that best matches your request.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {categories.map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => update('category', c.id)}
                        className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                          form.category === c.id
                            ? 'border-gold bg-gold/10 shadow-soft'
                            : 'border-navy/10 hover:border-gold/40 bg-white'
                        }`}
                      >
                        <c.icon
                          className={`w-5 h-5 mb-2 ${
                            form.category === c.id ? 'text-gold' : 'text-navy/50'
                          }`}
                        />
                        <p className="font-medium text-navy text-sm">{c.title}</p>
                        <p className="text-navy/55 text-xs mt-0.5">{c.desc}</p>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="s2"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  <div>
                    <h2 className="text-xl font-semibold text-navy mb-2">Tell us about the goal</h2>
                    <p className="text-navy/60 text-sm mb-4">
                      What should this project achieve for you or your organization?
                    </p>
                    <textarea
                      name="goals"
                      rows={4}
                      required
                      value={form.goals}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-navy/15 text-navy
                                 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">
                      Ideal timeline
                    </label>
                    <select
                      name="timeline"
                      value={form.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-navy/15 text-navy
                                 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    >
                      <option value="">Select</option>
                      <option value="asap">As soon as possible</option>
                      <option value="1month">Within 1 month</option>
                      <option value="1-3months">1–3 months</option>
                      <option value="3plus">3+ months / flexible</option>
                    </select>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="s3"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  <h2 className="text-xl font-semibold text-navy mb-2">Scope & collaboration</h2>
                  <p className="text-navy/60 text-sm mb-4">
                    Optional details that help us plan — you can skip any field.
                  </p>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">
                      Approximate budget range
                    </label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-navy/15 text-navy
                                 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    >
                      <option value="">Prefer not to say</option>
                      <option value="small">Starter / small project</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large / ongoing</option>
                      <option value="discuss">Let’s discuss</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">
                      Open to collaboration or partnership?
                    </label>
                    <select
                      name="collaboration"
                      value={form.collaboration}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-navy/15 text-navy
                                 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    >
                      <option value="">Select</option>
                      <option value="yes">Yes, interested in collaborating</option>
                      <option value="client">No — client project only</option>
                      <option value="maybe">Open to discussing</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">
                      Extra details
                    </label>
                    <textarea
                      name="details"
                      rows={3}
                      value={form.details}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-navy/15 text-navy
                                 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    />
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="s4"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  <h2 className="text-xl font-semibold text-navy mb-2">Your contact details</h2>
                  <p className="text-navy/60 text-sm mb-4">
                    We’ll use these to follow up on your request.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">
                        Full name *
                      </label>
                      <input
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-navy/15 text-navy
                                   focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">Email *</label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-navy/15 text-navy
                                   focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-navy/15 text-navy
                                   focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">
                        Company / organization
                      </label>
                      <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-navy/15 text-navy
                                   focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between gap-4">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep((s) => (s - 1) as Step)}
                  className="inline-flex items-center gap-2 text-navy/70 hover:text-navy text-sm font-medium"
                >
                  <ArrowLeft size={16} /> Back
                </button>
              ) : (
                <span />
              )}
              <button
                type="submit"
                disabled={!canNext() || submitting}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {step < 4 ? (
                  <>
                    Continue <ArrowRight size={16} />
                  </>
                ) : submitting ? (
                  'Submitting...'
                ) : (
                  <>
                    Submit request <Send size={16} />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
