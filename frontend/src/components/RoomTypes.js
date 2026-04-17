import { motion } from 'framer-motion';
import { CheckCircle2, Star, Zap } from 'lucide-react';

const ROOM_SINGLE = 'https://images.unsplash.com/photo-1721739232537-c66523d1c14d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdHVkZW50JTIwaG9zdGVsJTIwcm9vbSUyMHNpbmdsZSUyMGJlZCUyMGRlc2slMjBzdHVkeXxlbnwwfHx8fDE3NzY0NDQwODR8MA&ixlib=rb-4.1.0&q=85';
const ROOM_DOUBLE = 'https://images.unsplash.com/photo-1774161321754-439bd8613f56?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBiZWRyb29tJTIwZGVza3xlbnwwfHx8fDE3NzY0NDM2ODR8MA&ixlib=rb-4.1.0&q=85';
const ROOM_TRIPLE = 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwZG9ybWl0b3J5JTIwc2hhcmVkJTIwcm9vbSUyMGNvbWZvcnRhYmxlfGVufDB8fHx8MTc3NjQ0NDA4NHww&ixlib=rb-4.1.0&q=85';

const rooms = [
  {
    name: 'Single Room',
    price: '₹12,000',
    image: ROOM_SINGLE,
    popular: false,
    badge: 'Best Privacy',
    badgeColor: 'bg-primary/10 text-primary',
    features: ['AC Fitted', 'Attached Bathroom', 'Study Table & Chair', 'Wardrobe', 'High-Speed WiFi', 'Daily Housekeeping'],
  },
  {
    name: 'Double Sharing',
    price: '₹8,000',
    image: ROOM_DOUBLE,
    popular: true,
    badge: 'Most Popular',
    badgeColor: 'bg-secondary text-white',
    features: ['AC Fitted', 'Shared Bathroom', 'Study Table & Chair', 'Wardrobe', 'High-Speed WiFi', 'Daily Housekeeping'],
  },
  {
    name: 'Triple Sharing',
    price: '₹6,000',
    image: ROOM_TRIPLE,
    popular: false,
    badge: 'Best Value',
    badgeColor: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
    features: ['Non-AC', 'Shared Bathroom', 'Study Table & Chair', 'Wardrobe', 'High-Speed WiFi', 'Daily Housekeeping'],
  },
];

export default function RoomTypes() {
  return (
    <section id="rooms" data-testid="rooms-section" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="section-tag mx-auto">Room Options</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Choose Your Perfect Room
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            All rooms include 3 meals/day, WiFi, power backup, and daily housekeeping.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {rooms.map((room, i) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-testid={`room-card-${room.name.toLowerCase().replace(/\s+/g, '-')}`}
              className={`relative bg-card rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border ${room.popular ? 'border-secondary ring-2 ring-secondary/20' : 'border-border'}`}
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${room.badgeColor}`}>
                  {room.popular && <Star className="w-3 h-3 inline mr-1 fill-current" />}
                  {room.badge}
                </span>
              </div>

              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground">{room.name}</h3>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl font-black text-primary">{room.price}</span>
                  <span className="text-sm text-muted-foreground font-medium">/month</span>
                </div>

                <ul className="mt-4 space-y-2">
                  {room.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  data-testid={`room-enquire-btn-${i}`}
                  className={`mt-5 w-full flex items-center justify-center gap-2 py-3 rounded-full font-bold text-sm transition-all hover:-translate-y-0.5 ${
                    room.popular
                      ? 'bg-secondary text-white hover:bg-[#059669] shadow-lg shadow-secondary/25'
                      : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  <Zap className="w-4 h-4" /> Enquire Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-sm text-muted-foreground"
        >
          All prices include 3 meals/day • Security deposit: 1 month refundable
        </motion.p>
      </div>
    </section>
  );
}
