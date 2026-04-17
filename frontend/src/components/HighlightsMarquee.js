import Marquee from 'react-fast-marquee';
import { Wifi, ShieldCheck, Zap, Utensils, MapPin, Droplets } from 'lucide-react';

const items = [
  { icon: <MapPin className="w-4 h-4" />, text: '200m from Galgotias & NIU' },
  { icon: <Wifi className="w-4 h-4" />, text: '100 Mbps High-Speed WiFi' },
  { icon: <Utensils className="w-4 h-4" />, text: 'Pure Veg Homely Food' },
  { icon: <ShieldCheck className="w-4 h-4" />, text: '24/7 Security & CCTV' },
  { icon: <Zap className="w-4 h-4" />, text: 'Power Backup' },
  { icon: <Droplets className="w-4 h-4" />, text: 'RO Water 24/7' },
  { icon: <MapPin className="w-4 h-4" />, text: 'Near Greater Noida Campus' },
  { icon: <Wifi className="w-4 h-4" />, text: 'High-Speed Internet' },
];

export default function HighlightsMarquee() {
  return (
    <div data-testid="highlights-marquee" className="bg-muted border-y border-border py-4 overflow-hidden">
      <Marquee gradient={false} speed={45} pauseOnHover>
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2.5 mx-8">
            <span className="text-primary">{item.icon}</span>
            <span className="text-sm font-semibold text-foreground whitespace-nowrap">{item.text}</span>
            <span className="text-primary/40 text-lg font-light mx-2">•</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
