import { Phone, Mail, MapPin, Home, Instagram, Facebook, Twitter } from 'lucide-react';

const quickLinks = [
  { label: 'Rooms', href: '#rooms' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Food & Mess', href: '#food' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer data-testid="footer" className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-black text-xl" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Baba <span className="text-primary">PG</span> House
                </span>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed max-w-sm">
              Your home away from home — just 200 meters from Galgotias &amp; NIU University. Premium student living with comfort, safety, and homely food.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" aria-label="Instagram" data-testid="footer-instagram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" data-testid="footer-facebook" className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Twitter" data-testid="footer-twitter" className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-5 text-sm uppercase tracking-wider opacity-60">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-5 text-sm uppercase tracking-wider opacity-60">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm opacity-70 leading-relaxed">
                  Near Galgotias University &amp; NIU University, Greater Noida, UP
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <div>
                  <a href="tel:7290008205" className="block text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                    +91 72900 08205
                  </a>
                  <a href="tel:7290008206" className="block text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                    +91 72900 08206
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:babapg001@gmail.com" className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                  babapg001@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs opacity-50">
            &copy; {new Date().getFullYear()} Baba PG House. All rights reserved.
          </p>
          <p className="text-xs opacity-50">
            Near Galgotias &amp; NIU University · Greater Noida
          </p>
        </div>
      </div>
    </footer>
  );
}
