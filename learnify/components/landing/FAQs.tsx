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
        "Learnify is a comprehensive learning platform that combines brain dumping, interactive flashcards, and educational field exploration to help you master any subject efficiently.",
    },
    {
      question: "How does the Brain Dump feature work?",
      answer:
        "Brain Dump allows you to quickly capture your thoughts and ideas in a structured format. Our AI helps organize and connect related concepts, making it easier to understand complex topics.",
    },
    {
      question: "What makes Learnify's flashcards different?",
      answer:
        "Our flashcards use spaced repetition algorithms that adapt to your learning pace. They also support multimedia content and can generate questions based on your brain dumps.",
    },
    {
      question: "Can I use Learnify for any subject?",
      answer:
        "Yes! Learnify is designed to work with any subject matter. Whether you're studying computer science, history, languages, or any other topic, our platform can help you learn more effectively.",
    },
    {
      question: "Is there a mobile app available?",
      answer:
        "Yes, Learnify is available on iOS and Android, allowing you to learn on the go. Your progress syncs across all your devices.",
    },
    {
      question: "How much does Learnify cost?",
      answer:
        "Learnify offers a free tier with limited features. Premium plans start at $9.99/month with full access to all features. We also offer special pricing for students and educational institutions.",
    },
  ]

  return (
    <section id="faq" className="flex flex-col w-3/5 mx-auto">
        <h1 className="text-4xl text-white font-semibold pb-4">Frequently Asked Questions</h1>
        <p className="text-gray-300">Everything you need to know about Learnify and how it can transform your learning experience.</p>

        <Accordion type="single" collapsible className="w-full mt-[5%]">
            <div>
                {faqs.map((faq, i) => (
                    <AccordionItem value={`item ${i}`} className="text-custom-gray">
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