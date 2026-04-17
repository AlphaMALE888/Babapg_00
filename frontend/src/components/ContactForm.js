import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const roomOptions = ['Single Room (₹12,000/mo)', 'Double Sharing (₹8,000/mo)', 'Triple Sharing (₹6,000/mo)', 'Not sure yet'];

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', room_type: '', message: '' });
  const [status, setStatus] = useState(null); // 'loading' | 'success' | 'error'
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.room_type) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setStatus('loading');
    try {
      await axios.post(`${BACKEND_URL}/api/contact`, form);
      setStatus('success');
      setForm({ name: '', phone: '', room_type: '', message: '' });
    } catch (err) {
      setStatus('error');
      setError('Something went wrong. Please call us directly.');
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-tag">Book a Visit</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Start Your Journey <br />
              <span className="text-primary">Today</span>
            </h2>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              Fill out the form and our team will reach out within hours to schedule a free visit. Come see why hundreds of students call Baba PG House their home.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Call Us Directly</p>
                  <a href="tel:7290008205" className="text-primary font-bold text-lg hover:underline block">+91 72900 08205</a>
                  <a href="tel:7290008206" className="text-primary font-bold text-base hover:underline block">+91 72900 08206</a>
                </div>
              </div>

              <div className="bg-primary rounded-2xl p-5 text-white">
                <p className="font-bold mb-1">Free Room Visit</p>
                <p className="text-sm opacity-90">Come visit us anytime Mon–Sun, 9 AM to 7 PM. No appointment needed — walk in anytime!</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-3xl p-7 shadow-lg"
            data-testid="contact-form-card"
          >
            {status === 'success' ? (
              <div data-testid="success-message" className="text-center py-10">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Enquiry Submitted!</h3>
                <p className="text-muted-foreground text-sm mb-5">
                  Thank you! We've received your enquiry and will call you back within a few hours.
                </p>
                <button
                  onClick={() => setStatus(null)}
                  className="text-primary text-sm font-semibold hover:underline"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} data-testid="contact-form">
                <h3 className="text-xl font-bold text-foreground mb-6">Send an Enquiry</h3>

                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1.5">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      data-testid="contact-name-input"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1.5">
                      Phone Number <span className="text-destructive">*</span>
                    </label>
                    <input
                      data-testid="contact-phone-input"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="e.g. 9876543210"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1.5">
                      Room Type <span className="text-destructive">*</span>
                    </label>
                    <select
                      data-testid="contact-room-type-select"
                      name="room_type"
                      value={form.room_type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select room type</option>
                      {roomOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1.5">
                      Message (Optional)
                    </label>
                    <textarea
                      data-testid="contact-message-textarea"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Any questions or specific requirements..."
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                    />
                  </div>
                </div>

                {error && (
                  <div data-testid="form-error" className="mt-3 flex items-center gap-2 text-destructive text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {error}
                  </div>
                )}

                <button
                  data-testid="contact-submit-btn"
                  type="submit"
                  disabled={status === 'loading'}
                  className="mt-5 w-full flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-xl font-bold text-sm hover:bg-[#1D4ED8] transition-all hover:-translate-y-0.5 shadow-lg shadow-primary/25 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {status === 'loading' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Enquiry
                    </>
                  )}
                </button>

                <p className="text-xs text-muted-foreground text-center mt-3">
                  We'll call you back within 2–4 hours
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
