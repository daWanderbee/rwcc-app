'use client';

/**
 * Floating "flip to reveal" Chuk plate, bottom-right. Closed it is a small
 * plate badge; clicking flips it and opens the RWCC WhatsApp community card.
 *
 * ponytail: one rotating element, no back face — the plate is a cut-out PNG so
 * it keeps its own shape and simply turns over. The 3D transform properties are
 * written inline rather than leaning on Tailwind v4's 3D utility set.
 */

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import { COMMUNITY_URL } from '@/lib/community';

const PERKS = [
  { key: 'premium', text: <><strong className="font-bold">Premium content.</strong> Completely free.</> },
  { key: 'grow', text: <>Practical tips to <strong className="font-bold">grow your restaurant &amp; retain customers</strong></> },
  { key: 'insights', text: <><strong className="font-bold">Business, marketing &amp; customer experience</strong> insights</> },
  { key: 'festive', text: <>Festive-season ideas, trends &amp; restaurant hacks</> },
  { key: 'community', text: <>A community to <strong className="font-bold">connect and learn from fellow restaurants</strong></> },
];

export default function CommunityPlate() {
  const [open, setOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const reduceMotion = useReducedMotion();

  // Phones only: the hero fills the screen there, so the plate waits until the
  // reader has scrolled past it. From sm up there is room for both, and the
  // plate is visible from page load. Tracks resize so crossing the breakpoint
  // does not leave it stuck hidden.
  useEffect(() => {
    const update = () => {
      const gated = window.innerWidth < 640;
      const past = !gated || window.scrollY > window.innerHeight * 0.75;
      setPastHero(past);
      if (!past) setOpen(false);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  if (!pastHero) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[110] flex flex-col items-end gap-3 font-['Karbon']">
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Join the RWCC WhatsApp Community"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: reduceMotion ? 0 : 0.25, ease: 'easeOut' }}
            className="w-[min(32rem,calc(100vw-2rem))] max-h-[calc(100vh-7rem)] sm:max-h-[calc(100vh-8.5rem)] overflow-y-auto rounded-3xl bg-[#F2DABB] text-[#942A45] shadow-2xl ring-2 ring-[#942A45]/15"
          >
            <div className="relative bg-[#942A45] text-[#F2DABB] px-5 pt-4 pb-3 rounded-t-3xl">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute top-2.5 right-2.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#F2DABB] text-[#942A45] shadow-md ring-2 ring-[#942A45]/20 transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F2DABB]"
              >
                <X className="h-4 w-4" strokeWidth={3} />
              </button>
              <p className="text-2xl font-bold leading-tight pr-12">
                RWCC just got a new address.
              </p>
            </div>

            <div className="px-5 pt-3 pb-2">
              <p className="text-sm font-bold uppercase tracking-wide text-[#942A45]/60">
                Here&apos;s what&apos;s waiting inside
              </p>
              <ul className="mt-2 flex flex-col gap-2">
                {PERKS.map((perk) => (
                  <li key={perk.key} className="flex gap-3 text-base leading-snug">
                    <span
                      aria-hidden
                      className="mt-[0.5rem] h-2 w-2 shrink-0 rounded-full bg-[#ED544B]"
                    />
                    <span>{perk.text}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-3 rounded-2xl bg-[#82B74B]/15 px-4 py-2.5 text-base leading-snug ring-1 ring-[#82B74B]/30">
                And because you&apos;re already part of RWCC, you get{' '}
                <strong className="font-bold">FREE access</strong> to this exclusive community.
              </p>

              {/* Pinned to the card's foot: the perks scroll past it on short
                  screens, but the way in never leaves the view. */}
              <div className="sticky bottom-0 -mx-5 mt-4 bg-[#F2DABB] px-5 pb-1 pt-3">
                <p className="text-center text-base font-bold">Ready to step inside?</p>
                <a
                  href={COMMUNITY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2.5 flex w-full items-center justify-center gap-2 rounded-full bg-[#ED544B] px-4 py-3.5 text-center leading-snug text-[0.95rem] sm:text-base font-bold text-[#F2DABB] shadow-lg transition-transform hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#942A45]"
                >
                  Join the RWCC WhatsApp Community
                  <ArrowRight className="h-5 w-5 shrink-0" strokeWidth={2.5} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'Close the RWCC community invite' : 'Reveal the RWCC community invite'}
        className="group relative rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#942A45] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F2DABB]"
        style={{ perspective: '600px' }}
      >
        {/* The four-compartment Chuk plate, cut from its studio white onto
            transparency, so it keeps its own silhouette — no circular mask, and
            the shadow follows the rim rather than a box. */}
        <motion.span
          className="relative block h-16 w-16 sm:h-20 sm:w-20 transition-transform group-hover:scale-105"
          animate={{ rotateY: open ? 180 : 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.6, ease: [0.4, 0, 0.2, 1] }}
          style={{ filter: 'drop-shadow(0 6px 10px rgba(74,21,37,0.35))' }}
        >
          <Image
            src="/images/chuk-plate-badge.png"
            alt=""
            fill
            sizes="80px"
            className="object-contain"
            priority={false}
          />
        </motion.span>

        {/* Keyed off the pointer device, not the viewport: a touchscreen laptop
            at desktop width should still read "Tap". The button carries its own
            aria-label, so neither copy is announced twice. */}
        {!open && (
          <span
            aria-hidden
            className="pointer-events-none absolute -top-1.5 right-0 -translate-y-full whitespace-nowrap rounded-full bg-[#942A45] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#F2DABB] shadow-md"
          >
            <span className="pointer-fine:hidden">Tap to reveal</span>
            <span className="hidden pointer-fine:inline">Click to reveal</span>
          </span>
        )}
      </button>
    </div>
  );
}
