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

const COMMUNITY_URL = 'https://chat.whatsapp.com/EVTX6tj05Mj4dYHUnTyEkd?s=sh&p=i&mlu=4&ilr=4';

const PERKS = [
  { key: 'premium', text: <><strong className="font-bold">Premium content.</strong> Completely free.</> },
  { key: 'grow', text: <>Practical tips to <strong className="font-bold">grow your restaurant &amp; retain customers</strong></> },
  { key: 'masterclasses', text: <>Exclusive <strong className="font-bold">masterclasses &amp; webinars</strong> with industry experts</> },
  { key: 'festive', text: <>Festive-season ideas, trends &amp; restaurant hacks</> },
  { key: 'community', text: <>A community to <strong className="font-bold">connect and learn from fellow restaurants</strong></> },
];

export default function CommunityPlate() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3 font-['Karbon']">
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Join the RWCC WhatsApp Community"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: reduceMotion ? 0 : 0.25, ease: 'easeOut' }}
            className="w-[min(22rem,calc(100vw-2rem))] max-h-[min(32rem,calc(100vh-9rem))] overflow-y-auto rounded-3xl bg-[#F2DABB] text-[#942A45] shadow-2xl ring-2 ring-[#942A45]/15"
          >
            <div className="relative bg-[#942A45] text-[#F2DABB] px-5 pt-5 pb-4 rounded-t-3xl">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute top-3 right-3 rounded-full p-1.5 text-[#F2DABB]/80 hover:text-[#F2DABB] hover:bg-[#F2DABB]/15 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F2DABB]"
              >
                <X className="h-4 w-4" strokeWidth={2.5} />
              </button>
              <p className="text-lg font-bold leading-tight pr-7">
                RWCC just got a new address.
              </p>
              <p className="mt-2 text-sm leading-snug text-[#F2DABB]/90">
                A space where restaurants can{' '}
                <strong className="font-bold text-[#F2DABB]">learn, connect and grow</strong> — with
                access to things that can actually help you run your business better.
              </p>
            </div>

            <div className="px-5 py-4">
              <p className="text-xs font-bold uppercase tracking-wide text-[#942A45]/60">
                Here&apos;s what&apos;s waiting inside
              </p>
              <ul className="mt-3 flex flex-col gap-2.5">
                {PERKS.map((perk) => (
                  <li key={perk.key} className="flex gap-2.5 text-sm leading-snug">
                    <span
                      aria-hidden
                      className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED544B]"
                    />
                    <span>{perk.text}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 rounded-2xl bg-[#82B74B]/15 px-3 py-2.5 text-sm leading-snug ring-1 ring-[#82B74B]/30">
                And because you&apos;re already part of RWCC, you get{' '}
                <strong className="font-bold">FREE access</strong> to this exclusive community.
              </p>

              <p className="mt-4 text-center text-sm font-bold">Ready to step inside?</p>
              <a
                href={COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[#ED544B] px-4 py-3 text-sm font-bold text-[#F2DABB] shadow-lg transition-transform hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#942A45]"
              >
                Join the RWCC WhatsApp Community
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'Close the RWCC community invite' : 'Flip the plate to reveal the RWCC community invite'}
        className="group relative rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#942A45] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F2DABB]"
        style={{ perspective: '600px' }}
      >
        {/* The plate is cut out on transparency, so it keeps its own silhouette —
            no circular mask, and the shadow follows the rim rather than a box. */}
        <motion.span
          className="relative block h-[4.5rem] w-[4.5rem] sm:h-20 sm:w-20 transition-transform group-hover:scale-105"
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

        {!open && (
          <span className="pointer-events-none absolute -top-1 left-1/2 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-full bg-[#942A45] px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-[#F2DABB] shadow-md">
            Flip to reveal
          </span>
        )}
      </button>
    </div>
  );
}
