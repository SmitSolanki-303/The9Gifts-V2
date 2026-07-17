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
    a: 'We specialize in high-quality, artisan-grade custom printing and meticulously curated gift hampers. Our focus is on premium materials and unforgettable presentation, whether for a single bespoke t-shirt or a bulk corporate order.',
  },
  {
    q: 'Do you handle bulk corporate gifting?',
    a: 'Yes, we specialize in corporate hampers and bulk custom printed products. Contact us directly for personalized business solutions, branded packaging, and volume pricing.',
  },
  {
    q: 'Can I customize the items in a gift hamper?',
    a: 'Absolutely. While we offer beautifully pre-curated festive and seasonal hampers, we also provide options to fully customize the contents and branding to suit your specific occasion.',
  },
  {
    q: 'How long does custom printing take?',
    a: 'Most custom printed apparel, books, and bottles are crafted and ready within 3-5 business days. Bulk or highly specialized orders may require additional time. You can easily track your order status in your account.',
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
