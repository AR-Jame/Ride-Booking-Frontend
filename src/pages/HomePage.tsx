import { Hero } from "@/components/modules/Homepage/Hero";
import { HowItWork } from "@/components/modules/Homepage/HowItWork";
import { TestimonialSection } from "@/components/modules/Homepage/Testimonial";

const HomePage = () => {
    return (
        <section className="space-y-64 pb-72">
            <Hero />
            <HowItWork />
            <TestimonialSection />
        </section>
    );
};

export default HomePage;