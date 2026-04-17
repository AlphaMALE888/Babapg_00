import { useState } from 'react';
import { MessageCircle, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const numbers = [
  { label: '+91 72900 08205', href: 'https://wa.me/917290008205', name: 'Manager 1' },
  { label: '+91 72900 08206', href: 'https://wa.me/917290008206', name: 'Manager 2' },
];

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="whatsapp-popup"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="bg-card border border-border rounded-2xl shadow-2xl p-4 w-64"
          >
            <p className="text-sm font-bold text-foreground mb-1">Chat on WhatsApp</p>
            <p className="text-xs text-muted-foreground mb-3">Select a number to chat:</p>
            {numbers.map((n) => (
              <a
                key={n.href}
                href={n.href}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`whatsapp-number-${n.name.toLowerCase().replace(' ', '-')}`}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors mb-1.5"
              >
                <div className="w-9 h-9 bg-[#25D366] rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">{n.name}</p>
                  <p className="text-xs text-muted-foreground">{n.label}</p>
                </div>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        data-testid="whatsapp-float-btn"
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl shadow-[#25D366]/40 flex items-center justify-center"
        aria-label="WhatsApp"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
