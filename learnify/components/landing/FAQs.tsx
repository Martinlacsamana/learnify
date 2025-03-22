import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"


const FAQs = () => {
  const faqs = [
    {
      question: "What is Learnify?",
      answer:
        "It's the future.",
    },
    {
      question: "How does the Brain Dump feature work?",
      answer:
        "I don't know ask GPT.",
    },
    {
      question: "What makes Learnify's flashcards different?",
      answer:
        "The developer, Martin, created them.",
    },
    {
      question: "Can I use Learnify for any subject?",
      answer:
        "No, it doesn't help with learning to approach someone at the bar.",
    },
    {
      question: "Is there a mobile app available?",
      answer:
        "Do you want me to sleep or not?",
    },
    {
      question: "How much does Learnify cost?",
      answer:
        "Right now it's free, but I will charge to my heart's content at some point (jk).",
    },
  ]

  return (
    <section id="faq" className="flex flex-col w-3/5 mx-auto">
        <h1 className="text-4xl text-white font-semibold pb-4">Frequently Asked Questions</h1>
        <p className="text-gray-300">Everything you need to know about Learnify and how it can transform your learning experience.</p>

        <Accordion type="single" collapsible className="w-full mt-[5%]">
            <div>
                {faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`item ${i}`} className="text-custom-gray">
                        <AccordionTrigger className="text-white cursor-pointer ">
                            <p className="text-xl text-white font-semibold">{faq.question}</p>
                        </AccordionTrigger>
                        <AccordionContent className="">
                            <p className="text-left text-gray-300">{faq.answer}</p>
                            
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </div>
        </Accordion>
  
    </section>
  )
}

export default FAQs