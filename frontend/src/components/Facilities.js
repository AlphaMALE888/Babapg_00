import { motion } from 'framer-motion';
import { Wifi, ShieldCheck, Shirt, Zap, Droplets, BookOpen, Car, Sun, Sparkles } from 'lucide-react';

const facilities = [
  { icon: <Wifi className="w-7 h-7" />, title: 'High-Speed WiFi', desc: '100 Mbps connection across all rooms', color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-950/30' },
  { icon: <ShieldCheck className="w-7 h-7" />, title: '24/7 CCTV Security', desc: 'Fully monitored premises, always safe', color: 'text-green-500', bg: 'bg-green-50 dark:bg-green-950/30' },
  { icon: <Sparkles className="w-7 h-7" />, title: 'Daily Cleaning', desc: 'Professional housekeeping every day', color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-950/30' },
  { icon: <Shirt className="w-7 h-7" />, title: 'Laundry Service', desc: 'Wash & fold service available', color: 'text-pink-500', bg: 'bg-pink-50 dark:bg-pink-950/30' },
  { icon: <Zap className="w-7 h-7" />, title: 'Power Backup', desc: '24/7 uninterrupted power supply', color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-950/30' },
  { icon: <Droplets className="w-7 h-7" />, title: 'RO Water', desc: 'Purified drinking water always', color: 'text-cyan-500', bg: 'bg-cyan-50 dark:bg-cyan-950/30' },
  { icon: <BookOpen className="w-7 h-7" />, title: 'Study Area', desc: 'Dedicated quiet reading room', color: 'text-indigo-500', bg: 'bg-indigo-50 dark:bg-indigo-950/30' },
  { icon: <Car className="w-7 h-7" />, title: 'Parking', desc: 'Secure bike & car parking available', color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-950/30' },
  { icon: <Sun className="w-7 h-7" />, title: '24/7 Water Supply', desc: 'Hot & cold water round the clock', color: 'text-red-500', bg: 'bg-red-50 dark:bg-red-950/30' },
];

export default function Facilities() {
  return (
    <section id="amenities" data-testid="facilities-section" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="section-tag mx-auto">World-Class Amenities</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Everything You Need
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            We've thought of every detail so you can focus on what matters — your studies.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5">
          {facilities.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              data-testid={`facility-card-${i}`}
              className="group bg-card border border-border rounded-2xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <span className={f.color}>{f.icon}</span>
              </div>
              <h3 className="font-bold text-foreground text-sm md:text-base">{f.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground mt-1 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
