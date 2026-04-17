import { motion } from 'framer-motion';
import { CheckCircle2, Users, Award } from 'lucide-react';

const ABOUT_IMAGE = 'https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxjb2xsZWdlJTIwc3R1ZGVudHMlMjBsYXVnaGluZ3xlbnwwfHx8fDE3NzY0NDM2ODV8MA&ixlib=rb-4.1.0&q=85';

const features = [
  'Safe & secure gated campus with 24/7 guards',
  'Home-cooked vegetarian meals, 3 times daily',
  'High-speed WiFi across all rooms & common areas',
  'Just a 2-minute walk to Galgotias & NIU campus',
];

export default function AboutSection() {
  return (
    <section id="about" data-testid="about-section" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img src={ABOUT_IMAGE} alt="Students at Baba PG House" className="w-full h-full object-cover" />
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-6 -right-4 bg-card border border-border rounded-2xl p-5 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-black text-foreground">100+</p>
                  <p className="text-xs text-muted-foreground font-semibold">Happy Students</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-black text-foreground">5+ Yrs</p>
                  <p className="text-xs text-muted-foreground font-semibold">Of Trusted Service</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-tag">About Us</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
              Your Home Away <br />
              <span className="text-primary">From Home</span>
            </h2>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              Baba PG House offers a safe, comfortable and student-friendly living environment just steps away from your university. We understand the needs of students — from a quiet study space to timely meals and round-the-clock security. Our mission is to make your academic journey stress-free by providing everything you need in one place.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Trusted by hundreds of students from Galgotias University and NIU, we've built a community where you can focus on learning while we take care of the rest.
            </p>

            <ul className="mt-6 space-y-3">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-foreground font-medium">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              data-testid="about-book-visit-btn"
              className="inline-flex items-center gap-2 mt-8 bg-primary text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-[#1D4ED8] transition-all hover:-translate-y-1 shadow-lg shadow-primary/25"
            >
              Book a Free Visit
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
