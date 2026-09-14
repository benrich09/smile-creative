import { useState, FormEvent, ChangeEvent } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageCircle,
  Instagram,
  ArrowRight,
} from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  type: string
  message: string
}

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  type: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      setForm(initialForm)
    }, 900)
  }

  return (
    <div>
      <section className="gradient-navy pt-10 pb-12 md:pt-12 md:pb-14 relative overflow-hidden">
        <div className="container-custom relative z-10 max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className=" text-center heading-display text-3xl md:text-5xl text-white mb-4 leading-tight">
              Let’s start a conversation
            </h1>
            <p className="text-white/75 text-lg leading-relaxed">
              Projects, support, suggestions, or partnership, tell us what you need and we’ll get
              back to you shortly.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="card text-center py-14"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h2 className="heading-display text-2xl text-navy mb-3">Message sent</h2>
                  <p className="text-navy/65 mb-7 max-w-md mx-auto">
                    Thanks for reaching out. We’ll review your message and respond within one
                    business day.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-navy">
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={handleSubmit}
                  className="card space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-navy mb-1.5">
                        Full name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-navy/15 bg-white
                                   text-navy focus:outline-none focus:ring-2 focus:ring-gold/50
                                   focus:border-gold transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-navy/15 bg-white
                                   text-navy focus:outline-none focus:ring-2 focus:ring-gold/50
                                   focus:border-gold transition"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-navy/15 bg-white
                                   text-navy focus:outline-none focus:ring-2 focus:ring-gold/50
                                   focus:border-gold transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="type" className="block text-sm font-medium text-navy mb-1.5">
                        What is this about? *
                      </label>
                      <select
                        id="type"
                        name="type"
                        required
                        value={form.type}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-navy/15 bg-white
                                   text-navy focus:outline-none focus:ring-2 focus:ring-gold/50
                                   focus:border-gold transition"
                      >
                        <option value="">Select</option>
                        <option value="project">New project</option>
                        <option value="support">Support</option>
                        <option value="suggestion">Suggestion</option>
                        <option value="partnership">Partnership</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy mb-1.5">
                      Your message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-navy/15 bg-white
                                 text-navy focus:outline-none focus:ring-2 focus:ring-gold/50
                                 focus:border-gold transition resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message <Send size={16} />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </div>

            <div className="lg:col-span-2 space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.4 }}
                className="card space-y-4"
              >
                <h3 className="font-semibold text-navy text-lg">Contact details</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
                      <Mail size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-navy/50 text-xs uppercase tracking-wide mb-0.5">Email</p>
                      <a
                        href="mailto:info@smilecreative.co.tz"
                        className="text-navy font-medium hover:text-gold transition-colors"
                      >
                        info@smilecreative.co.tz
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
                      <Phone size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-navy/50 text-xs uppercase tracking-wide mb-0.5">Phone</p>
                      <p className="text-navy font-medium">
                        <a href="tel:+255627812312" className="hover:text-gold transition-colors">
                          +255 627 812 312
                        </a>
                        <br />
                        <a href="tel:+255689111616" className="hover:text-gold transition-colors">
                          +255 689 111 616
                        </a>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
                      <MessageCircle size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-navy/50 text-xs uppercase tracking-wide mb-0.5">WhatsApp</p>
                      <p className="text-navy font-medium">
                        <a
                          href="https://wa.me/255689111616"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-gold transition-colors"
                        >
                          +255 689 111 616
                        </a>
                        <br />
                        <a
                          href="https://wa.me/255627812312"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-gold transition-colors"
                        >
                          +255 627 812 312
                        </a>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-navy/50 text-xs uppercase tracking-wide mb-0.5">Location</p>
                      <p className="text-navy font-medium">Kinondoni, Dar es Salaam, Tanzania</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
                      <Clock size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-navy/50 text-xs uppercase tracking-wide mb-0.5">Hours</p>
                      <p className="text-navy font-medium">Mon – Fri · 9:00 AM – 6:00 PM</p>
                    </div>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.14, duration: 0.4 }}
                className="card space-y-3"
              >
                <h3 className="font-semibold text-navy text-lg">Social</h3>
                <a
                  href="https://www.instagram.com/smilestudio.tz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-navy/[0.03] hover:bg-gold/10 transition-colors"
                >
                  <Instagram size={18} className="text-gold" />
                  <div>
                    <p className="text-sm font-medium text-navy">@smilestudio.tz</p>
                    <p className="text-xs text-navy/50">Studio and film</p>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/smile.notify"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-navy/[0.03] hover:bg-gold/10 transition-colors"
                >
                  <Instagram size={18} className="text-gold" />
                  <div>
                    <p className="text-sm font-medium text-navy">@smile.notify</p>
                    <p className="text-xs text-navy/50">SMS and digital</p>
                  </div>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.4 }}
                className="card bg-navy text-white border-0"
              >
                <h3 className="font-semibold text-lg mb-2">Prefer WhatsApp?</h3>
                <p className="text-white/65 text-sm leading-relaxed mb-4">
                  Message us directly for a quick response.
                </p>
                <a
                  href="https://wa.me/255689111616"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold font-medium text-sm hover:gap-3 transition-all"
                >
                  Chat on WhatsApp <ArrowRight size={15} />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
