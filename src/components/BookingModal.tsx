import React, { useState, useEffect } from 'react';
import { X, Calendar, User, Phone, Mail, CheckCircle2, Send, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { MembershipPlanType, BookingFormData } from '../types';
import { siteConfig } from '../config/siteConfig';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: MembershipPlanType;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialPlan = 'general',
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    mobileNumber: '',
    email: '',
    preferredMembership: initialPlan,
    preferredVisitDate: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialPlan) {
      setFormData((prev) => ({ ...prev, preferredMembership: initialPlan }));
    }
  }, [initialPlan]);

  const todayStr = new Date().toISOString().split('T')[0];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    const cleanPhone = formData.mobileNumber.replace(/[\s-+()]/g, '');
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (cleanPhone.length < 10) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number';
    }

    if (formData.email && formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    if (!formData.preferredVisitDate) {
      newErrors.preferredVisitDate = 'Please select a preferred visit date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      if (siteConfig.formApiEndpoint && siteConfig.formApiEndpoint.trim()) {
        await fetch(siteConfig.formApiEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      } else {
        console.info('[Urbanfarmz Frontend Form Submission]', formData);
        await new Promise((resolve) => setTimeout(resolve, 600));
      }

      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#22c55e', '#84cc16', '#ffffff'],
        });
      } catch (err) {
        // Confetti optional
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Could not submit form. Please enquire directly via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppFastTrack = () => {
    const planLabels: Record<MembershipPlanType, string> = {
      starter: 'Starter Patch (250 sq.ft)',
      family: 'Family Patch (500 sq.ft)',
      pro: 'Pro Patch (1,000 sq.ft)',
      general: 'General Farm Visit',
    };

    const text = `Hi Urbanfarmz! I just booked a farm visit on the website:
• Name: ${formData.fullName}
• Mobile: ${formData.mobileNumber}
• Preferred Date: ${formData.preferredVisitDate}
• Preferred Patch: ${planLabels[formData.preferredMembership]}
${formData.message ? `• Note: ${formData.message}` : ''}
Please confirm my visit schedule!`;

    const url = `https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      mobileNumber: '',
      email: '',
      preferredMembership: 'general',
      preferredVisitDate: '',
      message: '',
    });
    setErrors({});
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-gradient-to-b from-[#0c2417] via-[#07190f] to-[#040e07] rounded-2xl sm:rounded-3xl border border-farm-bright/40 shadow-2xl p-5 sm:p-8 my-6 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-[10px] font-mono text-farm-bright uppercase tracking-wider mb-2">
                <Calendar className="w-3 h-3" />
                <span>EXPERIENCE URBANFARMZ</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Book Your Farm Visit
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-gray-300 font-normal">
                Tour our net houses on Kanakapura Road and choose your personal growing patch.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Full Name */}
              <div>
                <label className="block text-[11px] font-semibold text-gray-300 uppercase tracking-wider mb-1">
                  Full Name <span className="text-farm-bright">*</span>
                </label>
                <div className="relative">
                  <User className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-farm-bright"
                  />
                </div>
                {errors.fullName && <p className="text-[11px] text-red-400 mt-0.5">{errors.fullName}</p>}
              </div>

              {/* Mobile Number & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 uppercase tracking-wider mb-1">
                    Mobile Number <span className="text-farm-bright">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={formData.mobileNumber}
                      onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                      placeholder="10-digit number"
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-farm-bright"
                    />
                  </div>
                  {errors.mobileNumber && <p className="text-[11px] text-red-400 mt-0.5">{errors.mobileNumber}</p>}
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 uppercase tracking-wider mb-1">
                    Email <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-farm-bright"
                    />
                  </div>
                  {errors.email && <p className="text-[11px] text-red-400 mt-0.5">{errors.email}</p>}
                </div>
              </div>

              {/* Preferred Membership & Preferred Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 uppercase tracking-wider mb-1">
                    Preferred Membership
                  </label>
                  <select
                    value={formData.preferredMembership}
                    onChange={(e) => setFormData({ ...formData, preferredMembership: e.target.value as MembershipPlanType })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#08180f] border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-farm-bright"
                  >
                    <option value="general">General Farm Walkthrough</option>
                    <option value="starter">Starter Patch (250 sq. ft.)</option>
                    <option value="family">Family Patch (500 sq. ft.)</option>
                    <option value="pro">Pro Patch (1,000 sq. ft.)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 uppercase tracking-wider mb-1">
                    Visit Date <span className="text-farm-bright">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    min={todayStr}
                    value={formData.preferredVisitDate}
                    onChange={(e) => setFormData({ ...formData, preferredVisitDate: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#08180f] border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-farm-bright"
                  />
                  {errors.preferredVisitDate && <p className="text-[11px] text-red-400 mt-0.5">{errors.preferredVisitDate}</p>}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[11px] font-semibold text-gray-300 uppercase tracking-wider mb-1">
                  Message <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Any questions or crops of interest..."
                  className="w-full px-3 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-farm-bright resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-farm-bright via-emerald-400 to-farm-bright text-farm-darkest font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-glow hover:scale-101 active:scale-99 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Confirm Farm Visit Booking</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[10px] text-gray-400 text-center">
                🔒 Private & secure. We will reach out via WhatsApp/Call to confirm your visiting slot.
              </p>
            </form>
          </div>
        ) : (
          /* Confirmation Success State */
          <div className="text-center py-4 space-y-4">
            <div className="w-12 h-12 rounded-full bg-farm-bright/20 border border-farm-bright flex items-center justify-center mx-auto text-farm-bright shadow-glow">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono tracking-widest text-emerald-400 uppercase">
                REQUEST RECEIVED
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                We're Excited to Host You!
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-normal">
                Thank you <strong className="text-white">{formData.fullName}</strong>. We have logged your request for{' '}
                <strong className="text-farm-bright">{formData.preferredVisitDate}</strong>.
              </p>
            </div>

            {/* Fast Track WhatsApp Button */}
            <div className="space-y-2 pt-2">
              <button
                onClick={handleWhatsAppFastTrack}
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Fast-Track & Confirm on WhatsApp</span>
              </button>

              <button
                onClick={resetForm}
                className="w-full py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-xs transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
