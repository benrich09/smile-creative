import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, MessageCircle, Instagram } from 'lucide-react'

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Team', path: '/team' },
  { name: 'Contact', path: '/contact' },
] as const

const services = [
  { name: 'Software Development', path: '/services#software' },
  { name: 'Bulk SMS Services', path: '/services#sms' },
  { name: 'Film & Media Production', path: '/services#film' },
] as const

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white">
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-3">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <img
                src="/smile.png"
                alt="Smile Creative"
                className="h-10 w-10 object-contain rounded-lg"
                onError={(e) => {
                  const t = e.currentTarget
                  if (t.src.includes('smile.png')) t.src = '/smile.svg'
                }}
              />
              <span className="font-display text-xl font-semibold">Smile Creative</span>
            </Link>
            <p className="text-white/65 text-sm leading-relaxed max-w-xs">
              Creative technology company delivering software development, bulk SMS, and
              professional film production across Tanzania and beyond.
            </p>
            <div className="flex gap-2.5 pt-1">
              <a
                href="https://www.instagram.com/smilestudio.tz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Smile Studio Instagram"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center
                           text-white/65 hover:bg-gold hover:text-navy transition-all duration-300"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.instagram.com/smile.notify"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Smile Notify Instagram"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center
                           text-white/65 hover:bg-gold hover:text-navy transition-all duration-300"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://wa.me/255689111616"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center
                           text-white/65 hover:bg-gold hover:text-navy transition-all duration-300"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-gold mb-4 text-sm tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/65 hover:text-gold text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold text-gold mb-4 text-sm tracking-wide uppercase">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.path}>
                  <Link
                    to={s.path}
                    className="text-white/65 hover:text-gold text-sm transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/start-project"
                  className="text-white/65 hover:text-gold text-sm transition-colors"
                >
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact + Motto */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <h4 className="font-semibold text-gold mb-4 text-sm tracking-wide uppercase">
                Get in Touch
              </h4>
              <ul className="space-y-3 text-sm text-white/65">
                <li className="flex items-start gap-3">
                  <Mail size={16} className="text-gold mt-0.5 shrink-0" />
                  <a
                    href="mailto:info@smilecreative.co.tz"
                    className="hover:text-gold transition-colors"
                  >
                    info@smilecreative.co.tz
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={16} className="text-gold mt-0.5 shrink-0" />
                  <span>
                    <a href="tel:+255627812312" className="hover:text-gold transition-colors">
                      +255 627 812 312
                    </a>
                    {' / '}
                    <a href="tel:+255689111616" className="hover:text-gold transition-colors">
                      +255 689 111 616
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle size={16} className="text-gold mt-0.5 shrink-0" />
                  <a
                    href="https://wa.me/255689111616"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors"
                  >
                    WhatsApp: +255 689 111 616
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                  <span>Kinondoni, Dar es Salaam, Tanzania</span>
                </li>
              </ul>
            </div>

            {/* Motto on the right */}
            <div className="pt-2 border-t border-white/10">
              <p className="font-display text-lg text-gold tracking-wide">
                Connect · Engage · Grow
              </p>
              <p className="text-white/45 text-xs mt-1">
                Technology · Communication · Storytelling
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/45 text-sm">
            © {year} Smile Creative. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/45">
            <a href="#" className="hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
