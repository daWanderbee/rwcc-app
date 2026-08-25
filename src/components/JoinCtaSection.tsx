'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, Globe, CheckCircle2, Gift, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { WavyDivider } from '@/components/ui/wavy-divider';

export default function JoinCtaSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'join' | 'talk'>('join');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    restaurantName: '',
    contactName: '',
    phone: '',
    email: '',
    outlets: '1',
    isChukCustomer: 'yes',
  });

  const handleOpenModal = (type: 'join' | 'talk') => {
    setModalType(type);
    setFormSubmitted(false);
    setSubmitError('');
    setModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    setSubmitting(true);
    try {
      const res = await fetch('/api/join', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ ...formData, modalType }),
      });
      if (!res.ok) {
        const { error } = await res.json().catch(() => ({ error: '' }));
        throw new Error(error || 'Something went wrong. Please try again.');
      }
      setFormSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="join-cta"
      className="relative z-10 w-full bg-[#ED544B] text-[#F2DABB] font-['Karbon'] pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 lg:pb-32 px-4 sm:px-8 lg:px-12 xl:px-16"
    >
      <WavyDivider fill="#ED544B" variant={1} />
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#F2DABB] tracking-tight mb-3 sm:mb-5 leading-tight max-w-4xl"
        >
          Already switched? You&apos;ve earned your spot.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xs sm:text-xl lg:text-2xl font-medium text-[#F2DABB] max-w-3xl leading-relaxed mb-8 sm:mb-16"
        >
          Join the Restaurants Who Care Club, get your impact calculated, and put your recognition block where your diners can see it. Free for every Chuk customer.
        </motion.p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 w-full max-w-lg mb-10 sm:mb-16">
          <Button
            size="lg"
            onClick={() => handleOpenModal('join')}
            className="w-full sm:w-auto px-8 sm:px-10 py-5 sm:py-6 bg-[#F2DABB] text-[#942A45] font-black text-sm sm:text-lg shadow-xl hover:bg-[#F3B343] hover:text-[#942A45] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Join the Club</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#942A45]" />
          </Button>

          <Button
            size="lg"
            variant="outlinePlum"
            onClick={() => handleOpenModal('talk')}
            className="w-full sm:w-auto px-8 sm:px-10 py-5 sm:py-6 border-2 border-[#FFF2E0] text-[#FFF2E0] font-black text-sm sm:text-lg bg-transparent hover:bg-[#FFF2E0] hover:text-[#942A45] transition-all hover:scale-105 active:scale-95"
          >
            <span>Talk to Us</span>
          </Button>
        </div>

        {/* Contact Line */}
        <div className="pt-6 sm:pt-8 border-t-2 border-[#FFF2E0]/30 w-full flex flex-wrap items-center justify-center gap-4 sm:gap-10 text-xs sm:text-sm lg:text-base font-semibold text-[#FFF2E0]">
          <a
            href="mailto:hello@chuk.in"
            className="flex items-center gap-2 hover:underline bg-[#FFF2E0]/15 px-3.5 sm:px-4 py-2 rounded-full border border-[#FFF2E0]/25 text-xs sm:text-sm"
          >
            <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFF2E0]" />
            hello@chuk.in
          </a>
          <a
            href="tel:+917800034448"
            className="flex items-center gap-2 hover:underline bg-[#FFF2E0]/15 px-3.5 sm:px-4 py-2 rounded-full border border-[#FFF2E0]/25 text-xs sm:text-sm"
          >
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFF2E0]" />
            +91 78000-34448
          </a>
          <a
            href="https://chuk.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline bg-[#FFF2E0]/15 px-3.5 sm:px-4 py-2 rounded-full border border-[#FFF2E0]/25 text-xs sm:text-sm"
          >
            <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFF2E0]" />
            chuk.in
          </a>
        </div>
      </div>

      {/* Modal using shadcn Dialog */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-lg max-h-[92vh] overflow-y-auto p-4 sm:p-6">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-1">
              <Image
                src="/images/rwcc.png"
                alt="RWCC Logo"
                width={28}
                height={28}
                className="w-7 h-7 object-contain shrink-0"
              />
              <DialogTitle className="text-lg sm:text-xl font-black text-[#942A45]">
                {modalType === 'join' ? 'Claim Your Spot & Welcome Kit' : 'Talk to the Chuk Team'}
              </DialogTitle>
            </div>
            <DialogDescription className="text-xs font-semibold text-[#942A45]/80">
              {modalType === 'join'
                ? 'Fill in your restaurant details to calculate your impact numbers and claim your free 7-piece kit.'
                : "Have questions about switching or joining? Send us your message and we'll get right back."}
            </DialogDescription>
          </DialogHeader>

          {formSubmitted ? (
            <div className="py-6 sm:py-8 text-center flex flex-col items-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#95CC2E] text-[#942A45] flex items-center justify-center mb-3 sm:mb-4 shadow-md">
                <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#942A45] mb-2">
                Welcome to the Club!
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#942A45] mb-6 max-w-xs">
                We&apos;ve received your details. Our team will verify your Chuk order volume and dispatch your welcome kit shortly.
              </p>
              <Button
                onClick={() => setModalOpen(false)}
                className="px-6 py-2.5 rounded-full bg-[#942A45] text-[#F2DABB] font-black text-sm"
              >
                Back to Website
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-2">
              <div className="flex flex-col gap-1 text-left">
                <Label htmlFor="restaurantName" className="text-xs font-bold">Restaurant / Brand Name *</Label>
                <Input
                  id="restaurantName"
                  required
                  value={formData.restaurantName}
                  onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
                  placeholder="e.g. Green Leaf Kitchen"
                  className="text-base sm:text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                <div className="flex flex-col gap-1">
                  <Label htmlFor="contactName" className="text-xs font-bold">Contact Person *</Label>
                  <Input
                    id="contactName"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    placeholder="Your Name"
                    className="text-base sm:text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1 text-left">
                  <Label htmlFor="phone" className="text-xs font-bold">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="text-base sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1 text-left">
                <Label htmlFor="email" className="text-xs font-bold">Work Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="hello@restaurant.com"
                  className="text-base sm:text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                <div className="flex flex-col gap-1">
                  <Label htmlFor="outlets" className="text-xs font-bold">Number of Outlets</Label>
                  <select
                    id="outlets"
                    value={formData.outlets}
                    onChange={(e) => setFormData({ ...formData, outlets: e.target.value })}
                    className="flex h-11 w-full rounded-xl border-2 border-[#F2DABB] bg-[#F2DABB]/40 px-3 py-2 text-base sm:text-sm font-semibold text-[#942A45] focus-visible:outline-none focus-visible:border-[#942A45]"
                  >
                    <option value="1">1 Outlet</option>
                    <option value="2-5">2 - 5 Outlets</option>
                    <option value="6-15">6 - 15 Outlets</option>
                    <option value="15+">15+ Outlets</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1 text-left">
                  <Label htmlFor="chukCustomer" className="text-xs font-bold">Are you using Chuk?</Label>
                  <select
                    id="chukCustomer"
                    value={formData.isChukCustomer}
                    onChange={(e) => setFormData({ ...formData, isChukCustomer: e.target.value })}
                    className="flex h-11 w-full rounded-xl border-2 border-[#F2DABB] bg-[#F2DABB]/40 px-3 py-2 text-base sm:text-sm font-semibold text-[#942A45] focus-visible:outline-none focus-visible:border-[#942A45]"
                  >
                    <option value="yes">Yes, active customer</option>
                    <option value="switching">Planning to switch</option>
                    <option value="info">Want pricing info</option>
                  </select>
                </div>
              </div>

              {submitError && (
                <p className="text-xs font-bold text-[#ED544B] text-left">{submitError}</p>
              )}

              <Button
                type="submit"
                variant="coral"
                size="lg"
                disabled={submitting}
                className="w-full mt-2 font-black bg-[#942A45] text-[#F2DABB] hover:bg-[#7A1F36] py-3.5 text-sm sm:text-base disabled:opacity-70"
              >
                {submitting
                  ? 'Sending...'
                  : modalType === 'join'
                    ? 'Submit & Claim Free Kit'
                    : 'Send Message'}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
