import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import React from 'react'

const faqs = [
  {
    q: 'What makes The9Gifts different?',
    a: 'We curate a focused collection rather than an endless catalog. Each gift is chosen for material quality, presentation, and emotional presence — the feeling of a private atelier, not a marketplace.',
  },
  {
    q: 'Do you ship internationally?',
    a: 'Yes. Orders ship worldwide with careful packaging designed to protect both the object and the unboxing experience. Shipping options are shown at checkout.',
  },
  {
    q: 'Can I request bespoke packaging?',
    a: 'Select pieces can be prepared with elevated presentation. Contact us through your account or order notes to discuss ceremony-ready packing for special occasions.',
  },
  {
    q: 'How do I manage my order?',
    a: 'Create an account to track orders and save addresses, or use Find my order with your order ID and email for guest purchases.',
  },
]

export function LandingFAQ() {
  return (
    <section className="container py-20 md:py-28" id="faq">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-[11px] uppercase tracking-atelier text-primary">Guidance</p>
          <h2 className="font-serif text-3xl text-foreground md:text-5xl">Questions of craft</h2>
        </div>

        <Accordion type="single" collapsible className="w-full border-t border-border">
          {faqs.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="font-serif text-left text-base text-foreground hover:no-underline hover:text-primary md:text-lg">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
