import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

export default function LocationSection() {
  return (
    <section id="location" data-testid="location-section" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="section-tag mx-auto">Location</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Find Us Easily
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            We are just <strong className="text-primary">200 meters</strong> from Galgotias University &amp; NIU — a 2-minute walk!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="bg-card border border-border rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground">Address</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Baba PG House, Near Galgotias University &amp; NIU University,<br />
                Greater Noida, Uttar Pradesh
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-bold text-foreground">Contact</h3>
              </div>
              <a href="tel:7290008205" className="block text-sm text-primary font-semibold hover:underline">+91 72900 08205</a>
              <a href="tel:7290008206" className="block text-sm text-primary font-semibold hover:underline mt-1">+91 72900 08206</a>
            </div>

            <div className="bg-card border border-border rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/30 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="font-bold text-foreground">Visit Hours</h3>
              </div>
              <p className="text-sm text-muted-foreground">Mon – Sat: 9:00 AM – 7:00 PM</p>
              <p className="text-sm text-muted-foreground">Sunday: 10:00 AM – 5:00 PM</p>
            </div>

            <div className="bg-primary text-white rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <Navigation className="w-5 h-5" />
                <h3 className="font-bold">Proximity</h3>
              </div>
              <p className="text-sm opacity-90">200m from Galgotias University</p>
              <p className="text-sm opacity-90">200m from NIU University</p>
              <p className="text-sm opacity-90 mt-2">~2 min walk to campus</p>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 rounded-3xl overflow-hidden border border-border shadow-xl"
            data-testid="google-map"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.606750117035!2d77.54582091121588!3d28.370736495819827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc79bc8c12ac9%3A0xfef8e17b723646c9!2sBaBa%20PG%20House!5e0!3m2!1sen!2sin!4v1776443045712!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Baba PG House Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
