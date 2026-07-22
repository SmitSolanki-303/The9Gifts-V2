import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import React from 'react'

type Props = {
  eyebrow?: string | null
  title?: string | null
  questions?: { question: string; answer: string; id?: string | null }[] | null
}

export const FaqBlock: React.FC<Props> = ({
  eyebrow = 'Guidance',
  title = 'Frequently Asked Questions',
  questions = [],
}) => {
  if (!questions?.length) return null

  return (
    <section className="w-full">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-[11px] uppercase tracking-atelier text-primary">
              {eyebrow || 'Guidance'}
            </p>
            <h2 className="font-serif text-3xl text-foreground md:text-5xl">
              {title || 'Frequently Asked Questions'}
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full border-t border-border">
            {questions.map((item, i) => (
              <AccordionItem key={item.id || i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="font-serif text-left text-base text-foreground hover:no-underline hover:text-primary md:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
