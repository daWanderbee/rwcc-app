'use client';

import React, { useEffect, useState } from 'react';
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
import { COMMUNITY_URL } from '@/lib/community';

export default function JoinCtaSection() {
  const [modalOpen, setModalOpen] = useState(false);
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

  const isActiveChukCustomer = formData.isChukCustomer === 'yes';

  // The confirmation answers the question they actually picked in "Are you using Chuk?".
  const confirmation = {
    yes: {
      heading: 'Welcome to the Club!',
      body: "We've received your details. Our team will verify your Chuk order volume and dispatch your welcome kit shortly.",
    },
    switching: {
      heading: 'Thanks — details received.',
      body: "We've received your details. Our team will get in touch with you shortly.\nIn the meantime, do check out our range of compostable products and explore how you can make the switch with CHUK.",
    },
    info: {
      heading: 'Thanks — details received.',
      body: "We've received your details. Our team will reach out to you shortly.",
    },
  }[formData.isChukCustomer] ?? {
    heading: 'Thanks — details received.',
    body: "We've received your details. Our team will reach out to you shortly.",
  };

  useEffect(() => {
    if (!formSubmitted || !isActiveChukCustomer) return;
    const t = setTimeout(() => {
      window.location.href = COMMUNITY_URL;
    }, 3000);
    return () => clearTimeout(t);
  }, [formSubmitted, isActiveChukCustomer]);

  const handleOpenModal = () => {
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
        body: JSON.stringify({ ...formData, modalType: 'join' }),
      });
      if (!res.ok) {
        const { error } = await res.json().catch(() => ({ error: '' }));
        throw new Error(error || 'Something went wrong. Please try again.');
      }
      setFormSubmitted(true);
      // GA4 key event: the only outcome this site has.
      (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.('event', 'generate_lead', {
        lead_source: 'RWCC kit',
      });
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
          className="text-base sm:text-xl lg:text-2xl font-medium text-[#F2DABB] max-w-3xl leading-relaxed mb-8 sm:mb-16"
        >
          Join the Restaurants Who Care Club, get your impact calculated, and put your recognition block where your diners can see it. Free for every Chuk customer.
        </motion.p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 w-full max-w-lg mb-6 sm:mb-8">
          <Button
            size="lg"
            onClick={handleOpenModal}
            className="w-full sm:w-auto px-8 sm:px-10 py-5 sm:py-6 bg-[#F2DABB] text-[#942A45] font-black text-sm sm:text-lg shadow-xl hover:bg-[#F3B343] hover:text-[#942A45] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Join the Club</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#942A45]" />
          </Button>

        </div>

        {/* Contact buttons — the way to reach a human, now that Talk to Us is gone. */}
        <div className="w-full flex flex-row items-stretch justify-center gap-2 sm:gap-4">
          <a
            href="mailto:hello@chuk.in"
            className="flex flex-1 sm:flex-none items-center justify-center gap-1.5 sm:gap-2.5 rounded-full border-2 border-[#FFF2E0] bg-transparent px-3 sm:px-6 py-3.5 sm:py-4 text-[0.95rem] sm:text-lg font-black text-[#FFF2E0] transition-all hover:bg-[#FFF2E0] hover:text-[#942A45] hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFF2E0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#ED544B]"
          >
            <Mail className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" strokeWidth={2.5} />
            <span className="sm:hidden">Email</span>
            <span className="hidden sm:inline">hello@chuk.in</span>
          </a>
          <a
            href="tel:+917800034448"
            className="flex flex-1 sm:flex-none items-center justify-center gap-1.5 sm:gap-2.5 rounded-full border-2 border-[#FFF2E0] bg-transparent px-3 sm:px-6 py-3.5 sm:py-4 text-[0.95rem] sm:text-lg font-black text-[#FFF2E0] transition-all hover:bg-[#FFF2E0] hover:text-[#942A45] hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFF2E0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#ED544B]"
          >
            <Phone className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" strokeWidth={2.5} />
            <span className="sm:hidden">Call</span>
            <span className="hidden sm:inline">+91 78000-34448</span>
          </a>
          <a
            href="https://chuk.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 sm:flex-none items-center justify-center gap-1.5 sm:gap-2.5 rounded-full border-2 border-[#FFF2E0] bg-transparent px-3 sm:px-6 py-3.5 sm:py-4 text-[0.95rem] sm:text-lg font-black text-[#FFF2E0] transition-all hover:bg-[#FFF2E0] hover:text-[#942A45] hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFF2E0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#ED544B]"
          >
            <Globe className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" strokeWidth={2.5} />
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
              <DialogTitle className="text-xl sm:text-2xl font-black text-[#942A45]">
                Claim Your Spot &amp; Welcome Kit
              </DialogTitle>
            </div>
            <DialogDescription className="text-sm font-semibold text-[#942A45]/80">
              Fill in your restaurant details to calculate your impact numbers and claim your free
              7-piece kit.
            </DialogDescription>
          </DialogHeader>

          {formSubmitted ? (
            <div className="py-6 sm:py-8 text-center flex flex-col items-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#95CC2E] text-[#942A45] flex items-center justify-center mb-3 sm:mb-4 shadow-md">
                <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#942A45] mb-2">
                {confirmation.heading}
              </h3>
              <p className="text-sm sm:text-base font-semibold text-[#942A45] mb-6 max-w-sm whitespace-pre-line">
                {confirmation.body}
              </p>

              {isActiveChukCustomer ? (
                <>
                  <Button
                    asChild
                    className="px-5 sm:px-6 py-3 rounded-full bg-[#ED544B] text-[#F2DABB] font-black text-center leading-snug text-[0.95rem] sm:text-base hover:bg-[#D9453C] whitespace-normal h-auto"
                  >
                    <a href={COMMUNITY_URL}>Join the RWCC WhatsApp Community</a>
                  </Button>
                  <p className="mt-3 text-xs font-bold text-[#942A45]/70">
                    Taking you there now — your Chuk account already includes it.
                  </p>
                </>
              ) : (
                <>
                  {formData.isChukCustomer === 'switching' && (
                    <Button
                      asChild
                      className="mb-3 px-6 py-2.5 rounded-full bg-[#ED544B] text-[#F2DABB] font-black text-base hover:bg-[#D9453C]"
                    >
                      <a href="https://chuk.in" target="_blank" rel="noopener noreferrer">
                        Explore the CHUK range
                      </a>
                    </Button>
                  )}
                  <Button
                    onClick={() => setModalOpen(false)}
                    className="px-6 py-2.5 rounded-full bg-[#942A45] text-[#F2DABB] font-black text-base"
                  >
                    Back to Website
                  </Button>
                </>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-2">
              <div className="flex flex-col gap-1 text-left">
                <Label htmlFor="restaurantName" className="text-sm font-bold">Restaurant / Brand Name *</Label>
                <Input
                  id="restaurantName"
                  required
                  value={formData.restaurantName}
                  onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
                  placeholder="e.g. Green Leaf Kitchen"
                  className="text-lg sm:text-base"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                <div className="flex flex-col gap-1">
                  <Label htmlFor="contactName" className="text-sm font-bold">Contact Person *</Label>
                  <Input
                    id="contactName"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    placeholder="Your Name"
                    className="text-lg sm:text-base"
                  />
                </div>

                <div className="flex flex-col gap-1 text-left">
                  <Label htmlFor="phone" className="text-sm font-bold">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="text-lg sm:text-base"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1 text-left">
                <Label htmlFor="email" className="text-sm font-bold">Work Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="hello@restaurant.com"
                  className="text-lg sm:text-base"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                <div className="flex flex-col gap-1">
                  <Label htmlFor="outlets" className="text-sm font-bold">Number of Outlets</Label>
                  <select
                    id="outlets"
                    value={formData.outlets}
                    onChange={(e) => setFormData({ ...formData, outlets: e.target.value })}
                    className="flex h-11 w-full rounded-xl border-2 border-[#F2DABB] bg-[#F2DABB]/40 px-3 py-2 text-lg sm:text-base font-semibold text-[#942A45] focus-visible:outline-none focus-visible:border-[#942A45]"
                  >
                    <option value="1">1 Outlet</option>
                    <option value="2-5">2 - 5 Outlets</option>
                    <option value="6-15">6 - 15 Outlets</option>
                    <option value="15+">15+ Outlets</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1 text-left">
                  <Label htmlFor="chukCustomer" className="text-sm font-bold">Are you using Chuk?</Label>
                  <select
                    id="chukCustomer"
                    value={formData.isChukCustomer}
                    onChange={(e) => setFormData({ ...formData, isChukCustomer: e.target.value })}
                    className="flex h-11 w-full rounded-xl border-2 border-[#F2DABB] bg-[#F2DABB]/40 px-3 py-2 text-lg sm:text-base font-semibold text-[#942A45] focus-visible:outline-none focus-visible:border-[#942A45]"
                  >
                    <option value="yes">Yes, active customer</option>
                    <option value="switching">Planning to switch</option>
                    <option value="info">Want pricing info</option>
                  </select>
                </div>
              </div>

              {submitError && (
                <p className="text-sm font-bold text-[#ED544B] text-left">{submitError}</p>
              )}

              <Button
                type="submit"
                variant="coral"
                size="lg"
                disabled={submitting}
                className="w-full mt-2 font-black bg-[#942A45] text-[#F2DABB] hover:bg-[#7A1F36] py-4 text-base sm:text-lg disabled:opacity-70"
              >
                {submitting ? 'Sending...' : 'Submit & Claim Free Kit'}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
