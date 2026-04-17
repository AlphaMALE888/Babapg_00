import { motion } from 'framer-motion';
import { Phone, Calendar, MessageCircle, MapPin, Star } from 'lucide-react';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1721739232537-c66523d1c14d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdHVkZW50JTIwaG9zdGVsJTIwcm9vbSUyMHNpbmdsZSUyMGJlZCUyMGRlc2slMjBzdHVkeXxlbnwwfHx8fDE3NzY0NDQwODR8MA&ixlib=rb-4.1.0&q=85';

export default function HeroSection() {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden hero-blob"
    >
      {/* Background gradient circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-tag"
            >
              <MapPin className="w-3.5 h-3.5" />
              Near Galgotias &amp; NIU University
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-tight tracking-tighter"
            >
              Comfortable &amp;{' '}
              <span className="text-primary">Affordable</span>{' '}
              PG Living
              <span className="block text-secondary">Just 200m Away</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg"
            >
              Modern rooms, homely food, high-speed WiFi &amp; 24/7 security — everything a student needs, all under one roof.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-6 mt-6"
            >
              {[
                { value: '200m', label: 'From Campus' },
                { value: '100+', label: 'Happy Students' },
                { value: '4.8', label: 'Rating', icon: <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 inline" /> },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-black text-foreground" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {s.value} {s.icon}
                  </p>
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3 mt-8"
            >
              <a
                href="tel:7290008205"
                data-testid="hero-call-now-btn"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3.5 rounded-full font-bold text-sm hover:bg-[#1D4ED8] transition-all hover:-translate-y-1 shadow-lg shadow-primary/30"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a
                href="#contact"
                data-testid="hero-book-visit-btn"
                className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3.5 rounded-full font-bold text-sm hover:bg-[#059669] transition-all hover:-translate-y-1 shadow-lg shadow-secondary/30"
              >
                <Calendar className="w-4 h-4" /> Book a Visit
              </a>
              <a
                href="https://wa.me/917290008205"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-whatsapp-btn"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded-full font-bold text-sm hover:bg-[#1ebe57] transition-all hover:-translate-y-1 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src={HERO_IMAGE}
                alt="Modern PG Room at Baba PG House"
                className="w-full h-full object-cover"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Starting from</p>
                <p className="text-2xl font-black text-primary">₹6,000<span className="text-sm text-muted-foreground font-medium">/mo</span></p>
              </div>
              <div className="absolute top-4 right-4 bg-secondary text-white text-xs font-bold px-3 py-1.5 rounded-full">
                3 Meals Included
              </div>
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 hidden md:flex bg-card border border-border rounded-2xl px-4 py-3 shadow-xl items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">200m Walk</p>
                <p className="text-xs text-muted-foreground">From Galgotias &amp; NIU</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
