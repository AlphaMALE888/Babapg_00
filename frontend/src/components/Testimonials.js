import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    course: 'B.Tech CSE, Galgotias University',
    review: 'Best PG near college! The food is absolutely amazing and feels just like home. The WiFi is super fast and the security makes me feel safe. Highly recommend Baba PG to all freshers!',
    rating: 5,
    initials: 'RS',
    color: 'bg-primary',
  },
  {
    name: 'Priya Singh',
    course: 'MBA, NIU University',
    review: 'I have been staying here for 2 years and I love it. The staff is very cooperative, rooms are clean, and the study room helps a lot during exams. The 200m distance from NIU is a huge plus!',
    rating: 5,
    initials: 'PS',
    color: 'bg-secondary',
  },
  {
    name: 'Arjun Patel',
    course: 'B.Tech ECE, Galgotias University',
    review: 'Very comfortable rooms with all facilities. The meals are fresh and hygienic. Power backup ensures no study breaks. Worth every rupee — this is better than most hostels I visited!',
    rating: 5,
    initials: 'AP',
    color: 'bg-purple-500',
  },
  {
    name: 'Neha Verma',
    course: 'BCA, NIU University',
    review: 'Peaceful environment, very clean. The management is responsive and listens to every concern. I feel absolutely safe here, especially with the CCTV everywhere. 10/10 experience!',
    rating: 5,
    initials: 'NV',
    color: 'bg-amber-500',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" data-testid="testimonials-section" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="section-tag mx-auto">Student Reviews</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            What Students Say
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            Hear directly from our happy residents.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-testid={`testimonial-card-${i}`}
              className="bg-card border border-border rounded-3xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-2xl ${t.color} flex items-center justify-center text-white font-black text-sm flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.course}</p>
                  <div className="flex gap-0.5 mt-1.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <Quote className="w-8 h-8 text-primary/20 ml-auto flex-shrink-0" />
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{t.review}</p>
            </motion.div>
          ))}
        </div>

        {/* Rating summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 bg-card border border-border rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-center"
        >
          <div>
            <p className="text-5xl font-black text-foreground">4.9</p>
            <div className="flex justify-center gap-1 mt-1">
              {[1,2,3,4,5].map((s) => <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
            </div>
            <p className="text-xs text-muted-foreground mt-1">Average Rating</p>
          </div>
          <div className="hidden sm:block w-px h-16 bg-border" />
          <div>
            <p className="text-5xl font-black text-foreground">100+</p>
            <p className="text-xs text-muted-foreground mt-2">Students Reviewed</p>
          </div>
          <div className="hidden sm:block w-px h-16 bg-border" />
          <div>
            <p className="text-5xl font-black text-foreground">98%</p>
            <p className="text-xs text-muted-foreground mt-2">Would Recommend</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
