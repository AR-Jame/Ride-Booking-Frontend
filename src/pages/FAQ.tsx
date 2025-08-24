import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export interface FaqItem {
    id: string,
    question: string;
    answer: string;
}
const faqItems: FaqItem[] = [
    {
        id: "1",
        question: "How do I book a ride?",
        answer:
            "Simply enter your pickup location and destination in the app, choose your ride type, and confirm. A nearby driver will be matched with you instantly.",
    },
    {
        id: "2",
        question: "Can I schedule a ride in advance?",
        answer:
            "Yes! You can schedule rides for later by selecting the date and time that fits your plan. This ensures a driver is available when you need them.",
    },
    {
        id: "3",
        question: "How do drivers post their rides?",
        answer:
            "Drivers can list their upcoming rides by adding the destination, route, and time. Passengers can then book seats from the available options.",
    },
    {
        id: "4",
        question: "Is payment secure?",
        answer:
            "Absolutely. Payments are processed securely through the app with multiple options like mobile banking, cards, or cash depending on availability.",
    },
    {
        id: "5",
        question: "How will I know when my driver arrives?",
        answer:
            "You’ll receive real-time notifications and can track your driver’s location on the map until they arrive at your pickup point.",
    },
    {
        id: "6",
        question: "What if I need to cancel my ride?",
        answer:
            "You can cancel a ride anytime from the app. Cancellation fees may apply depending on how close it is to the scheduled pickup time.",
    },
    {
        id: "7",
        question: "How does the rating system work?",
        answer:
            "After each trip, both drivers and riders can rate each other. This helps maintain safety, trust, and quality service across the platform.",
    },
];

const FAQ = () => {
    return (
        <section className="py-32">
            <div className="container mx-auto space-y-16">
                <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
                    <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
                        "Common Questions & Answers"
                    </h2>
                    <p className="text-muted-foreground lg:text-lg">
                        "Find out all the essential details about our platform and how it can serve your needs."
                    </p>
                </div>
                <Accordion
                    type="single"
                    collapsible
                    className="mx-auto w-full lg:max-w-3xl"
                >
                    {faqItems.map((item) => (
                        <AccordionItem key={item.id} value={item.id}>
                            <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60">
                                <div className="font-medium sm:py-1 lg:py-2 lg:text-lg">
                                    {item.question}
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="sm:mb-1 lg:mb-2">
                                <div className="text-muted-foreground lg:text-lg">
                                    {item.answer}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export { FAQ };
