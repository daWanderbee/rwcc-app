'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

const faqs = [
  {
    id: 'item-1',
    question: 'What does membership cost?',
    answer: 'Nothing. If you serve on Chuk, the Club, the calculations and the welcome kit are all included.',
    tag: 'Free Membership',
    accentColor: '#95CC2E',
    tagVariant: 'green' as const,
  },
  {
    id: 'item-2',
    question: 'Where do our numbers come from?',
    answer:
      'From your verified Chuk order volumes, converted using a published methodology. No self-reporting, and nothing you\'d struggle to defend to a diner or a journalist.',
    tag: 'Verified Data',
    accentColor: '#33A8C3',
    tagVariant: 'teal' as const,
  },
  {
    id: 'item-3',
    question: "We've only just switched. Won't we rank last?",
    answer:
      'New members enter with a projected first-year figure, and every member gets a recognition block whatever the rank. The board refreshes each season, so there is always a next climb.',
    tag: 'New Members',
    accentColor: '#F3B343',
    tagVariant: 'gold' as const,
  },
  {
    id: 'item-4',
    question: "We're not a Chuk customer yet. Can we join?",
    answer:
      "The Club is for restaurants serving on Chuk compostable tableware. Switch, and your first season's projection and welcome kit come with it. Talk to us and we'll set up both together.",
    tag: 'Switching to Chuk',
    accentColor: '#ED544B',
    tagVariant: 'coral' as const,
  },
  {
    id: 'item-5',
    question: 'Can we use the numbers in our own marketing?',
    answer:
      'Yes. The kit includes print and social assets carrying your name and your numbers, sized for your outlets and your feed.',
    tag: 'Marketing Assets',
    accentColor: '#942A45',
    tagVariant: 'plum' as const,
  },
];

export default function FaqSection() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      className="relative z-10 w-full bg-[#F2DABB] text-[#3A2A2F] font-['Karbon'] py-16 sm:py-24 lg:py-32 xl:py-36 px-4 sm:px-8 lg:px-12 xl:px-16"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Inject FAQPage Schema for Search & AI Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18 lg:mb-22">
          <Badge
            variant="default"
            className="text-xs sm:text-sm font-black uppercase tracking-widest mb-4 px-4 py-1.5 bg-[#942A45] text-[#F2DABB]"
          >
            FAQ
          </Badge>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#942A45] tracking-tight mb-3"
          >
            Frequently Asked{' '}
            <span className="text-[#ED544B]">Questions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg lg:text-xl text-[#3A2A2F]/85 font-medium leading-relaxed max-w-xl mx-auto"
          >
            Everything you need to know about joining the Club, calculating your impact, and getting your recognition kit.
          </motion.p>
        </div>

        {/* Colourful Accordion List with Desktop Padding */}
        <Accordion type="single" collapsible defaultValue="item-1" className="w-full flex flex-col divide-y divide-[#942A45]/20 border-y border-[#942A45]/25">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.id} value={faq.id} className="border-0 rounded-none bg-transparent shadow-none">
              <AccordionTrigger className="py-6 sm:py-7 lg:py-8 px-3 sm:px-6 lg:px-8 hover:no-underline text-lg sm:text-xl lg:text-2xl xl:text-3xl">
                <span className="flex items-center gap-4 sm:gap-6">
                  <span
                    style={{ backgroundColor: faq.accentColor, color: faq.accentColor === '#F3B343' ? '#942A45' : '#F2DABB' }}
                    className="text-xs sm:text-sm lg:text-base font-black w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 shadow-xs"
                  >
                    {index + 1}
                  </span>
                  <span className="hover:text-[#ED544B] transition-colors">{faq.question}</span>
                </span>
                
                <div className="flex items-center gap-3 shrink-0 mr-2">
                  <Badge variant={faq.tagVariant} className="hidden sm:inline-block text-xs font-black uppercase px-3 py-1 shadow-xs">
                    {faq.tag}
                  </Badge>
                </div>
              </AccordionTrigger>

              <AccordionContent className="px-3 sm:px-6 lg:px-8 pb-7 pt-0 border-0">
                <div className="flex items-start gap-4 text-base sm:text-lg lg:text-xl text-[#3A2A2F] leading-relaxed bg-[#E5C7A3]/40 p-5 sm:p-7 rounded-2xl border border-[#942A45]/15">
                  <CheckCircle2 className="w-6 h-6 lg:w-7 lg:h-7 text-[#059669] shrink-0 mt-0.5" />
                  <div>{faq.answer}</div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
