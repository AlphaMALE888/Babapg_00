import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1721739232537-c66523d1c14d?crop=entropy&cs=srgb&fm=jpg&q=85', alt: 'Single Room', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1774161321754-439bd8613f56?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBiZWRyb29tJTIwZGVza3xlbnwwfHx8fDE3NzY0NDM2ODR8MA&ixlib=rb-4.1.0&q=85', alt: 'Room with Desk', span: 'col-span-1 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1776348065117-02285a905b0b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwZGVza3xlbnwwfHx8fDE3NzY0NDM2ODR8MA&ixlib=rb-4.1.0&q=85', alt: 'Modern Bedroom', span: 'col-span-1 row-span-1' },
  { src: 'https://static.prod-images.emergentagent.com/jobs/72061c2e-4561-4e14-b4bf-392ca1be0314/images/5894b67c721bfa296bf88af88ce50bb59e4b81867429b2c5c9af87e1c3f1217c.png', alt: 'Food', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxjb2xsZWdlJTIwc3R1ZGVudHMlMjBsYXVnaGluZ3xlbnwwfHx8fDE3NzY0NDM2ODV8MA&ixlib=rb-4.1.0&q=85', alt: 'Student Life', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1722650364857-f72657581ddc?crop=entropy&cs=srgb&fm=jpg&q=85', alt: 'Study Room', span: 'col-span-1 row-span-1' },
];

export default function Gallery() {
  return (
    <section id="gallery" data-testid="gallery-section" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="section-tag mx-auto">Gallery</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Life at Baba PG House
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            Take a visual tour of our premium facilities and comfortable living spaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`rounded-2xl overflow-hidden ${img.span} group relative`}
              style={{ minHeight: i === 1 ? '320px' : '200px' }}
              data-testid={`gallery-image-${i}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8"
          data-testid="video-section"
        >
          <div className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent rounded-3xl overflow-hidden border border-border">
            <div className="aspect-video flex flex-col items-center justify-center gap-4 p-8">
              <div
                data-testid="video-play-button"
                className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 hover:scale-110 transition-transform cursor-pointer hover:bg-[#1D4ED8]"
              >
                <Play className="w-8 h-8 ml-1 fill-current" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground">PG Tour</h3>
                <p className="text-muted-foreground mt-2 text-base">
                  Take a full tour of Baba PG House — rooms, facilities, and more.
                </p>
              </div>
              <p className="text-xs text-muted-foreground bg-muted px-4 py-2 rounded-full">
                Video tour coming soon — call us for a live visit!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
