import { motion } from 'framer-motion';
import { Utensils, Leaf, Clock, Star } from 'lucide-react';

const FOOD_IMAGE = 'https://static.prod-images.emergentagent.com/jobs/72061c2e-4561-4e14-b4bf-392ca1be0314/images/5894b67c721bfa296bf88af88ce50bb59e4b81867429b2c5c9af87e1c3f1217c.png';

const weekMenu = [
  { day: 'Mon', items: 'Dal Tadka, Sabzi, Rice, Roti' },
  { day: 'Tue', items: 'Rajma, Aloo Matar, Rice, Paratha' },
  { day: 'Wed', items: 'Chhole, Paneer Bhurji, Rice, Roti' },
  { day: 'Thu', items: 'Dal Makhani, Mix Veg, Rice, Roti' },
  { day: 'Fri', items: 'Kadhi Pakoda, Sabzi, Jeera Rice, Roti' },
  { day: 'Sat', items: 'Matar Paneer, Dal, Pulao, Roti' },
  { day: 'Sun', items: 'Special Sunday Feast + Dessert' },
];

const mealTimes = [
  { name: 'Breakfast', time: '7:30 – 9:30 AM', items: 'Bread, Butter, Egg/Sprouts, Tea, Juice' },
  { name: 'Lunch', time: '12:00 – 2:00 PM', items: 'Dal, Sabzi, Rice, Roti, Salad' },
  { name: 'Snacks', time: '5:00 – 6:00 PM', items: 'Tea, Biscuits / Seasonal Snack' },
  { name: 'Dinner', time: '8:00 – 9:30 PM', items: 'Dal, Sabzi, Rice, Roti, Dessert on Sundays' },
];

export default function FoodSection() {
  return (
    <section id="food" data-testid="food-section" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="section-tag mx-auto">
            <Leaf className="w-3.5 h-3.5" />
            Pure Veg Kitchen
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Homely Food, Every Day
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            Nutritious, fresh, and delicious vegetarian meals — cooked with love in our hygienic kitchen.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Food Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
              <img src={FOOD_IMAGE} alt="Homely PG Meals" className="w-full h-full object-cover" />
            </div>

            {/* Meal times */}
            <div className="grid grid-cols-2 gap-3">
              {mealTimes.map((m) => (
                <div key={m.name} className="bg-card border border-border rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="font-bold text-foreground text-sm">{m.name}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{m.time}</p>
                  <p className="text-xs text-foreground mt-1">{m.items}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="bg-card border border-border rounded-3xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Utensils className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Weekly Menu Sample</h3>
                  <p className="text-xs text-muted-foreground">Rotating seasonal menu</p>
                </div>
              </div>

              <div className="space-y-2">
                {weekMenu.map((day) => (
                  <div
                    key={day.day}
                    data-testid={`menu-day-${day.day.toLowerCase()}`}
                    className={`flex gap-3 items-start p-3 rounded-xl transition-colors ${day.day === 'Sun' ? 'bg-secondary/10 border border-secondary/20' : 'hover:bg-muted'}`}
                  >
                    <span className={`text-xs font-black w-8 flex-shrink-0 ${day.day === 'Sun' ? 'text-secondary' : 'text-primary'}`}>
                      {day.day}
                    </span>
                    <span className="text-sm text-foreground">{day.items}</span>
                    {day.day === 'Sun' && <Star className="w-3.5 h-3.5 text-secondary flex-shrink-0 mt-0.5 fill-current" />}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { value: '3+', label: 'Meals/Day' },
                { value: '100%', label: 'Pure Veg' },
                { value: '0', label: 'Compromise' },
              ].map((s) => (
                <div key={s.label} className="bg-primary text-white rounded-2xl p-4 text-center">
                  <p className="text-2xl font-black">{s.value}</p>
                  <p className="text-xs font-semibold mt-1 opacity-90">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
