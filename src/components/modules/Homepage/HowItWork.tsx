import {
    BellIcon,
    CalendarIcon,
    FileTextIcon,
    GlobeIcon,
} from "lucide-react";

import { BentoCard, BentoGrid } from "./BentoForHomePage";

const features = [
    {
        Icon: FileTextIcon,
        name: "Enjoy Your Journey",
        description: "Book a ride in seconds and travel comfortably with trusted drivers.",
        href: "/",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
        Icon: FileTextIcon,
        name: "Post a Ride",
        description: "Drivers can list their rides with destination and timing to find passengers easily.",
        href: "/",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
        Icon: GlobeIcon,
        name: "Get Picked Up",
        description: "Once matched, your driver will arrive at the pickup point to start your trip.",
        href: "/",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
        Icon: CalendarIcon,
        name: "Schedule Rides",
        description: "Plan ahead by booking rides in advance to fit your daily routine.",
        href: "/",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
        Icon: BellIcon,
        name: "Stay Updated",
        description:
            "Receive real-time notifications about driver arrivals, ride updates, and messages.",
        href: "/",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
];


function HowItWork() {
    return (
        <div>
            <h3 className="text-center text-5xl mb-20 font-semibold">How your Experience goes</h3>
            <BentoGrid className="lg:grid-rows-3 container mx-auto">
                {features.map((feature) => (
                    <BentoCard key={feature.name} {...feature} />
                ))}
            </BentoGrid>
        </div>
    );
}

export { HowItWork };