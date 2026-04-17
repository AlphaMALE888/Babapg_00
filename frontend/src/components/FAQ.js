import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'Is food included in the rent?',
    a: 'Yes! All room types include 3 full vegetarian meals per day — breakfast, lunch, and dinner. We also provide an evening snack. The mess operates 7 days a week including weekends and holidays.',
  },
  {
    q: 'Are visitors allowed?',
    a: 'Visitors are allowed in common areas between 9:00 AM and 7:00 PM. For security reasons, visitors are not allowed in rooms. All visitors must register at the reception. This policy ensures safety for all residents.',
  },
  {
    q: 'Is WiFi free or charged separately?',
    a: 'High-speed WiFi (100 Mbps) is completely free and included in your rent. No additional charges. The connection is available in all rooms and common areas including the study room.',
  },
  {
    q: 'What is the security system like?',
    a: 'We have 24/7 professional security guards, full CCTV coverage of all corridors, rooms, and entry/exit points, biometric entry for residents, and regular security rounds. Your safety is our top priority.',
  },
  {
    q: 'What is the deposit and notice period?',
    a: 'A refundable security deposit of 1 month\'s rent is required at the time of admission. A 1-month notice period is required before vacating. The deposit is fully refundable upon timely notice and room handover.',
  },
  {
    q: 'Is there a curfew?',
    a: 'We have a flexible late-entry policy with biometric access available till midnight. After midnight, entry is available via the security guard. We prioritize your safety while respecting your academic needs including late-night study sessions.',
  },
  {
    q: 'Is laundry service available?',
    a: 'Yes, laundry service is available at a nominal extra charge. You can also access washing machines in the common laundry area. Daily housekeeping service is included in all room types.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" data-testid="faq-section" className="py-20 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="section-tag mx-auto">FAQ</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            Everything you need to know before moving in.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="space-y-3" data-testid="faq-accordion">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                data-testid={`faq-item-${i}`}
                className="bg-card border border-border rounded-2xl px-6 overflow-hidden"
              >
                <AccordionTrigger
                  data-testid={`faq-trigger-${i}`}
                  className="text-left font-semibold text-foreground py-5 hover:no-underline text-sm md:text-base"
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center bg-muted/50 rounded-3xl p-8"
        >
          <p className="text-foreground font-semibold mb-2">Have more questions?</p>
          <p className="text-sm text-muted-foreground mb-5">We're happy to answer — just give us a call or send a message.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="tel:7290008205"
              data-testid="faq-call-btn"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#1D4ED8] transition-all hover:-translate-y-0.5"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/917290008205"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="faq-whatsapp-btn"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#1ebe57] transition-all hover:-translate-y-0.5"
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
