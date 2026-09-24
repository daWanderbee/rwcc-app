'use client';

/**
 * "Why join the community" — the RWCC WhatsApp community pitch as a full
 * section, for visitors who never click the floating plate.
 *
 * The perks are rendered as the thing they actually live in: a chat thread.
 * ponytail: one staggered reveal, no chat engine — the messages are static
 * markup, because nothing here is ever sent or received.
 */

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  CheckCheck,
  ChevronLeft,
  MoreVertical,
  Send,
  Smile,
  Video,
} from 'lucide-react';
import { WavyDivider } from '@/components/ui/wavy-divider';
import { COMMUNITY_URL } from '@/lib/community';

type Message =
  | { kind: 'text'; body: React.ReactNode; time: string }
  | {
      kind: 'photo';
      src: string;
      alt: string;
      body: React.ReactNode;
      time: string;
    };

const THREAD: Message[] = [
  {
    kind: 'text',
    time: '9:41',
    body: (
      <>
        <strong className="font-black">Premium content. Completely free.</strong> No paywall, no
        subscription.
      </>
    ),
  },
  {
    kind: 'text',
    time: '9:42',
    body: (
      <>
        Practical tips to{' '}
        <strong className="font-black">grow your restaurant &amp; retain customers</strong> — the
        kind you can use on the next shift.
      </>
    ),
  },
  {
    kind: 'photo',
    time: '9:44',
    src: '/images/chuk_meal_tray_biryani.png',
    alt: 'Biryani, raita and salad served in a CHUK 4-compartment meal tray',
    body: <>Festive-season ideas, trends and restaurant hacks, before the rush starts.</>,
  },
  {
    kind: 'text',
    time: '9:46',
    body: (
      <>
        <strong className="font-black">Business, marketing &amp; customer experience</strong>{' '}
        insights — what is working for restaurants right now, and why.
      </>
    ),
  },
  {
    kind: 'text',
    time: '9:48',
    body: (
      <>
        A room full of operators solving the same problems.{' '}
        <strong className="font-black">Connect and learn from fellow restaurants.</strong>
      </>
    ),
  },
];

/** What the group has shared — the CHUK range, as a media grid. */
const MEDIA = [
  '/images/chuk_meal_tray_biryani.png',
  '/images/chuk_container_chaat.png',
  '/images/explain_meal_tray.png',
  '/images/explain_square_bowl.png',
  '/images/explain_delivery_container.png',
  '/images/explain_beverage_cup.png',
];

export default function CommunityInvite() {
  const reduceMotion = useReducedMotion();
  const rise = (i: number) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { delay: reduceMotion ? 0 : i * 0.09, duration: 0.4, ease: 'easeOut' as const },
  });

  return (
    <section
      id="community"
      className="relative z-10 w-full bg-[#ED544B] text-[#F2DABB] font-['Karbon'] pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36 px-4 sm:px-8 lg:px-12 xl:px-16 overflow-x-clip"
    >
      <WavyDivider fill="#ED544B" variant={3} />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_minmax(0,30rem)] gap-12 lg:gap-16 lg:items-start">
        {/* The pitch */}
        <div className="flex flex-col items-start text-left lg:sticky lg:top-24 lg:self-start">
          <motion.h2
            {...rise(0)}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[0.95] mb-4"
          >
            RWCC just got a <span className="text-[#942A45]">new address.</span>
          </motion.h2>

          <motion.p
            {...rise(1)}
            className="text-base sm:text-lg lg:text-xl text-[#F2DABB]/90 font-medium leading-relaxed max-w-xl mb-7"
          >
            A space where restaurants learn, connect and grow — with access to things that actually
            help you run the place better.
          </motion.p>

          <motion.div
            {...rise(2)}
            className="w-full max-w-xl rounded-3xl bg-[#F2DABB] text-[#942A45] p-5 sm:p-7 shadow-2xl"
          >
            <p className="flex items-start gap-3 text-base sm:text-lg font-medium leading-relaxed mb-1">
              <Check className="mt-1 h-5 w-5 shrink-0 text-[#95CC2E]" strokeWidth={3.5} />
              <span>
                You&apos;re already part of RWCC, so you get{' '}
                <strong className="font-black">free access</strong> to the community.
              </span>
            </p>
            <p className="text-xl sm:text-2xl font-black mb-5 pl-8">Ready to step inside?</p>

            <a
              href={COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#942A45] px-5 sm:px-6 py-4 text-center leading-snug text-[1.05rem] sm:text-lg font-black text-[#F2DABB] shadow-lg transition-all hover:bg-[#7A1F36] hover:scale-[1.02] active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#942A45] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F2DABB]"
            >
              Join the RWCC WhatsApp Community
              <ArrowRight className="h-5 w-5 shrink-0" strokeWidth={2.5} />
            </a>
          </motion.div>
        </div>

        {/* Two phones: the chat in front, the group's media behind it. */}
        <motion.div
          {...rise(2)}
          className="relative mx-auto w-full max-w-[30rem] lg:mx-0 pb-6"
          style={{ perspective: '1400px' }}
        >
          {/* Back phone — group media */}
          <motion.div
            initial={{ opacity: 0, x: reduceMotion ? 0 : -20, rotate: -12 }}
            whileInView={{ opacity: 1, x: 0, rotate: -9 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.15 }}
            whileHover={reduceMotion ? undefined : { rotate: -6, y: -8 }}
            className="absolute left-[9%] bottom-2 z-0 w-[11.5rem] sm:w-[13rem] overflow-hidden rounded-[1.6rem] border-[5px] border-[#1F1F1F] bg-[#111B21] shadow-[0_24px_50px_-12px_rgba(74,21,37,0.65)]"
          >
            <div className="flex items-center gap-1.5 bg-[#075E54] px-2.5 py-2 text-white">
              <ChevronLeft className="h-3.5 w-3.5 shrink-0 opacity-90" strokeWidth={2.5} />
              <span className="truncate text-[0.68rem] font-semibold">Media, links and docs</span>
            </div>
            <div className="grid grid-cols-2 gap-[2px] bg-[#111B21] p-[2px]">
              {MEDIA.map((src) => (
                <span key={src} className="relative block aspect-square overflow-hidden">
                  <Image src={src} alt="" fill sizes="120px" className="object-cover" />
                </span>
              ))}
            </div>
            <p className="bg-[#111B21] px-2.5 pb-2.5 pt-1.5 text-[0.6rem] font-medium text-white/50">
              Shared by the group
            </p>
          </motion.div>

          {/* Front phone — the chat */}
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 24, rotate: 6 }}
            whileInView={{ opacity: 1, y: 0, rotate: 3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.25 }}
            whileHover={reduceMotion ? undefined : { rotate: 0, y: -10 }}
            className="relative z-10 ml-auto w-[17rem] sm:w-[19.5rem] overflow-hidden rounded-[2rem] border-[7px] border-[#1F1F1F] bg-[#ECE5DD] shadow-[0_35px_60px_-15px_rgba(74,21,37,0.75)]"
          >
            {/* Notch */}
            <div className="relative bg-[#075E54] pt-2">
              <span className="absolute left-1/2 top-1 h-1.5 w-14 -translate-x-1/2 rounded-full bg-black/35" />
              <div className="flex items-center gap-2 px-2.5 pb-2 pt-1.5 text-white">
                <ChevronLeft className="h-4 w-4 shrink-0 opacity-90" strokeWidth={2.5} />
                <span className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full bg-white">
                  <Image src="/images/rwcc.png" alt="" fill sizes="28px" className="object-contain p-0.5" />
                </span>
                <span className="min-w-0 flex-1 leading-tight">
                  <span className="block truncate text-[0.78rem] font-semibold">
                    Restaurants Who Care Club
                  </span>
                  <span className="block truncate text-[0.62rem] text-white/70">
                    tap here for group info
                  </span>
                </span>
                <Video className="h-4 w-4 shrink-0 opacity-90" strokeWidth={2} />
                <MoreVertical className="h-3.5 w-3.5 shrink-0 opacity-90" strokeWidth={2} />
              </div>
            </div>

            <ul className="flex flex-col gap-1 px-2 py-2">
              <li className="mx-auto mb-0.5 rounded-md bg-[#E1F3FB] px-2 py-0.5 text-[0.58rem] font-medium text-[#5A6B73] shadow-sm">
                TODAY
              </li>

              {THREAD.map((m, i) => (
                <motion.li
                  key={m.time}
                  {...rise(i + 1)}
                  className="relative ml-1 max-w-[90%] self-start rounded-lg rounded-tl-none bg-white px-1.5 py-1 shadow-[0_1px_0.5px_rgba(0,0,0,0.13)]"
                >
                  <span
                    aria-hidden
                    className="absolute -left-[6px] top-0 h-0 w-0"
                    style={{ borderTop: '7px solid #fff', borderLeft: '7px solid transparent' }}
                  />
                  <span className="mb-0.5 block text-[0.6rem] font-semibold text-[#E542A3]">CHUK</span>

                  {m.kind === 'photo' && (
                    <span className="relative mb-1 block aspect-[16/10] overflow-hidden rounded-md">
                      <Image src={m.src} alt={m.alt} fill sizes="20rem" className="object-cover" />
                    </span>
                  )}

                  <span className="block pr-9 text-[0.68rem] leading-[1.32] text-[#111B21]">
                    {m.body}
                  </span>
                  <span className="absolute bottom-0.5 right-1.5 text-[0.55rem] text-[#8696A0]">
                    {m.time}
                  </span>
                </motion.li>
              ))}

              <motion.li
                {...rise(THREAD.length + 1)}
                className="relative mr-1 max-w-[90%] self-end rounded-lg rounded-tr-none bg-[#D9FDD3] px-1.5 py-1 shadow-[0_1px_0.5px_rgba(0,0,0,0.13)]"
              >
                <span
                  aria-hidden
                  className="absolute -right-[6px] top-0 h-0 w-0"
                  style={{ borderTop: '7px solid #D9FDD3', borderRight: '7px solid transparent' }}
                />
                <span className="block pr-10 text-[0.68rem] leading-[1.32] text-[#111B21]">
                  Count us in.
                </span>
                <span className="absolute bottom-0.5 right-1.5 flex items-center gap-0.5 text-[0.55rem] text-[#8696A0]">
                  9:49
                  <CheckCheck className="h-2.5 w-2.5 text-[#53BDEB]" strokeWidth={3} />
                </span>
              </motion.li>
            </ul>

            <a
              href={COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 bg-[#F0F2F5] px-1.5 py-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#25D366]"
            >
              <span className="flex flex-1 items-center gap-1.5 rounded-full bg-white px-2.5 py-1.5 text-[0.68rem] text-[#8696A0]">
                <Smile className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
                Join to start chatting
              </span>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform group-hover:scale-110">
                <Send className="h-3.5 w-3.5 translate-x-[1px]" strokeWidth={2.5} />
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
